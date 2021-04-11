import React, { useEffect, useState } from 'react';
import { Animated, TouchableOpacity, Text, View, Dimensions, StatusBar, ScrollView, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Svg, { Path } from 'react-native-svg';
import styles from '../Main/styles';
import { dataUserProfile, consolesPlaystation, advertising } from '../../Constants/data'
import { color } from 'react-native-reanimated';


export default function Main() {
  const navigation = useNavigation()
  const { height, width } = Dimensions.get('window');

  const [translatePrimary, setTranslatePrimary] = useState(10)
  const [somaPrimary, setSomaPrimary] = useState(true)
  useEffect(() => {
    //setTimeout(() => startLoopSvgPrimary(), 100)
  }, [translatePrimary])
  function startLoopSvgPrimary() {
    if (somaPrimary) {
      setTranslatePrimary(translatePrimary => translatePrimary + 1)
      if (translatePrimary >= 900) {
        return setSomaPrimary(false)
      }
    } else {
      setTranslatePrimary(translatePrimary => translatePrimary - 1)
      if (translatePrimary == 10) {
        return setSomaPrimary(true)
      }
    }
  }
  const [translateSecundary, setTranslateSecundary] = useState(10)
  const [somaSecundary, setSomaSecundary] = useState(false)
  useEffect(() => {
    // setTimeout(() => startLoopSvgSecundary(), 1)
  }, [translateSecundary])
  function startLoopSvgSecundary() {
    if (somaSecundary) {
      setTranslateSecundary(translateSecundary => translateSecundary + 1)
      if (translateSecundary >= 900) {
        return setSomaSecundary(false)
      }
    } else {
      setTranslateSecundary(translateSecundary => translateSecundary - 1)
      if (translateSecundary == 10) {
        return setSomaSecundary(true)
      }
    }
  }

  function navigateToDetailsConsole(params) {
    console.log('cheogu no navigateToDetailsConsole', params);
   return navigation.navigate('DetailsConsole', params)
  }



  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 0 }))
  useEffect(() => {
    Animated.spring(offset.x, {
      useNativeDriver: true,
      toValue: 0,
      speed: 4,
    }).start();
  }, [])




  const animationSVG = () => {
    return (
      <Animated.View
        style={[styles.viewSvg, {
          transform: [
            {
              translateX: offset.y
            }
          ]
        }]}
      >
        <Svg  >
          <Image
            source={require('../../../assets/simbolospsn1.png')}
            resizeMode={'contain'}
            style={{
              height: height / 4,
              width: width,
            }}
          />
          <Path
            x={`0`}
            translateX={`-800`}
            fill="#1b53bf"
            d="M0,288L20,293.3C40,299,80,309,120,293.3C160,277,200,235,240,218.7C280,203,320,213,360,218.7C400,224,440,224,480,197.3C520,171,560,117,600,117.3C640,117,680,171,720,197.3C760,224,800,224,840,192C880,160,920,96,960,64C1000,32,1040,32,1080,37.3C1120,43,1160,53,1200,74.7C1240,96,1280,128,1320,138.7C1360,149,1400,139,1420,133.3L1440,128L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
          >
          </Path>
          <Path
            fill="#6195F6"
            //translateX={`-${translatePrimary}`}
            d="M0,64L21.8,74.7C43.6,85,87,107,131,122.7C174.5,139,218,149,262,133.3C305.5,117,349,75,393,96C436.4,117,480,203,524,245.3C567.3,288,611,288,655,245.3C698.2,203,742,117,785,101.3C829.1,85,873,139,916,170.7C960,203,1004,213,1047,218.7C1090.9,224,1135,224,1178,213.3C1221.8,203,1265,181,1309,170.7C1352.7,160,1396,160,1418,160L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          >
          </Path>
        </Svg>
      </Animated.View>

    )
  }

  const ConsolesRoute = () => (
    <View style={styles.card}>
      <ScrollView
        horizontal={true}
        style={{ paddingLeft: 5 }}
        showsHorizontalScrollIndicator={false}
      >

        {consolesPlaystation.map((console, i) => {
          return (
            <TouchableOpacity
              key={i}
              activeOpacity={0.9}
              style={styles.cardItem}
              onPress={() => navigateToDetailsConsole(console)}
            >


              <Text style={styles.cardTitle} numberOfLines={2}>{console.consoleName}</Text>
              <View style={styles.cardPrice}>
                <View style={styles.cardPriceItem}>
                  <Text style={styles.cardPriceText} numberOfLines={1}>{` $${console.price}`}</Text>
                </View>
              </View>
              <Image
                resizeMode='contain'
                source={{ uri: console.uriPhotoCosole }}
                style={styles.cardConsolePhoto}
              />



            </TouchableOpacity>
          )

        })}
      </ScrollView>
    </View>
  )
  const ControleRoute = () => (
    <View style={{ backgroundColor: '#fff', height: 350 }}>
      <Text> ControleRoute</Text>
    </View>
  )
  const AcessoriosRoute = () => (
    <View style={{ backgroundColor: '#fff', height: 350 }}>
      <Text> AcessoriosRoute</Text>
    </View>
  )
  const GamesRoute = () => (
    <View style={{ backgroundColor: '#fff', height: 350 }}>
      <Text> GamesRoute</Text>
    </View>
  )

  const initialLayout = { width: Dimensions.get('window').width };
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'Consoles', title: 'Consoles' },
    { key: 'Controle', title: 'Controle' },
    { key: 'Acessorios', title: 'Acessorios' },
    { key: 'Games', title: 'Games' },
  ]);
  const renderScene = SceneMap({
    Consoles: ConsolesRoute,
    Controle: ControleRoute,
    Acessorios: AcessoriosRoute,
    Games: GamesRoute
  });
  const _renderTabBar = () => {
    return (
      <View style={styles.tabBar}>
        {routes.map((route, i) => {
          return (
            <TouchableOpacity
              key={i}
              activeOpacity={0.9}
              style={index == i ? styles.tabItemSelected : styles.tabItem}
              onPress={() => setIndex(i)}>
              {/* <Image
                source={{ uri: route.icon }}
                style={styles.icon}
                resizeMode={'contain'}
              /> */}
              <Text style={index == i ? styles.textSelected : styles.text} numberOfLines={1}>{route.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.containerBackground}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor={'#6195F6'} />
      {animationSVG()}
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.headerDescription}>
            <Text style={styles.headerDescriptioText}>{`Bem Vindo `}</Text>
            <Text style={styles.headerDescriptioTextName}>{`${dataUserProfile.name}`}</Text>

          </View>
          <View style={styles.headerPhoto}>
            <Image
              source={{ uri: dataUserProfile.photoProfile }}
              style={styles.headerPhotoProfile}
            />
          </View>
        </View>
        {/*  <ScrollView> */}


        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={_renderTabBar}
          scrollEnabled={true}
        />
        <View style={styles.main}>
          <View style={styles.mainContainer}>
            <View style={styles.mainContainerHeader}>
              <Text style={styles.mainContainerTitle}>Games para você</Text>
              <Text style={styles.mainContainerText}>Selecione um exclusivo da psn</Text>
            </View>
            <TouchableOpacity
              //activeOpacity={0.9}
              style={styles.mainButton}
              onPress={() => { console.log('ver mais> ') }}
            >
              <Text style={styles.mainButtonText}>{'Ver mais >'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.advertising}>

            {advertising.map((advertising, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={0.9}
                style={styles.advertisingItem}
                onPress={() => { console.log('card', advertising) }}
              >
                <View style={styles.advertisingItemText}>
                  <View style={[styles.advertisingTag, { backgroundColor: advertising.colorBackground }]}>
                    <Text style={styles.advertisingTagText}>{advertising.tag}</Text>
                  </View>
                  <Text style={styles.advertisingTitle} numberOfLines={1}>{advertising.title}</Text>
                  <Text style={styles.advertisingSubTitle} numberOfLines={1}>{advertising.subTitle}</Text>

                </View>
                <View style={styles.advertisingItemImage}>
                  <Image
                    source={{ uri: advertising.photoGame }}
                    style={styles.advertisingIcon}
                    resizeMode={'contain'}
                  />
                </View>

              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/*  </ScrollView> */}

      </View>
    </View>
  );
}

