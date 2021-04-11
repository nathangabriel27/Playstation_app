import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Dimensions, Image, ScrollView, StatusBar, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import iconBase64 from '../../Constants/imageBase64';
import styles from '../DetailsConsole/styles';


export default function DetailsConsole() {
  const navigation = useNavigation()
  const route = useRoute()
  const { height, width } = Dimensions.get('window');
  const data = route.params


  useEffect(() => {

    console.log(route.params);
  }, [])
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor={'#fff'} />
        <View style={styles.header}>
          <View style={styles.headerButton}>
            <TouchableOpacity
              style={styles.headerButtonPopBack}
              onPress={() => navigation.pop()}
            >
              <Image
                source={{ uri: iconBase64.arrowLeftDark }}
                style={{ height: 20, width: 20 }}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerButtonPop}
              onPress={() => console.log('liked')}
            >
              <Image
                source={{ uri: iconBase64.lifeOffDark }}
                style={{ height: 35, width: 35 }}
                resizeMode={'contain'}
              />

            </TouchableOpacity>
          </View>
          <View style={styles.headerItens}>
            <View style={styles.headerItensContainer}>
              <Text style={styles.headerItensContainerText}>{`${data.data.storage}`}</Text>
              <Text style={styles.headerItensContainerSubText}>{`Tamanho`}</Text>
            </View>
            <View style={styles.headerItensContainer}>
              <Text style={styles.headerItensContainerText}>{`${data.data.tecnogi.value}`}</Text>
              <Text style={styles.headerItensContainerSubText}>{`${data.data.tecnogi.name}`}</Text>
            </View>
            <View style={styles.headerItensContainer}>
              <Text style={styles.headerItensContainerText}>{`${data.data.velocity.value}`}</Text>
              <Text style={styles.headerItensContainerSubText}>{`${data.data.velocity.name}`}</Text>
            </View>

          </View>
          <View style={styles.headerImage}>
            <Image
              source={{ uri: data.uriPhotoCosole }}
              style={styles.headerImageURI}
              resizeMode={'contain'}
            />
          </View>
        </View>

        <ScrollView >

          <View style={styles.main}>
            <View style={styles.mainHeader}>
              <View style={styles.mainHeaderText}>
                <Text style={styles.mainHeaderTextTitle} >{data.consoleName}</Text>
              </View>
              <View style={styles.mainHeaderText}>
                <Text style={styles.mainHeaderTextSubTitle}>{data.description}</Text>
              </View>
            </View>

            <View style={styles.mainFeatures}>
              <Text style={styles.mainFeaturesTitle}>Características</Text>

              <View style={styles.mainFeaturesItens}>
                <View style={styles.mainFeaturesItensData}>
                  <Image
                    source={{ uri: iconBase64.tv }}
                    style={{ height: 35, width: 35 }}
                    resizeMode={'contain'}
                  />
                  <Text style={styles.mainFeaturesItensDataTitle}>{`   ${data.data.features.resolution}`}</Text>
                </View>
                <View style={styles.mainFeaturesItensData}>
                  <Image
                    source={{ uri: iconBase64.light }}
                    style={styles.mainIcon}
                    resizeMode={'contain'}
                  />
                  <Text style={styles.mainFeaturesItensDataTitle}>{`   ${data.data.features.tecnologia}`}</Text>
                </View>
                <View style={styles.mainFeaturesItensData}>
                  <Image
                    source={{ uri: iconBase64.hdr }}
                    style={{ height: 35, width: 35 }}
                    resizeMode={'contain'}
                  />
                  <Text style={styles.mainFeaturesItensDataTitle}>{`   ${data.data.features.hdr}`}</Text>
                </View>
                <View style={styles.mainFeaturesItensData}>
                  <Image
                    source={{ uri: iconBase64.tv }}
                    style={{ height: 35, width: 35 }}
                    resizeMode={'contain'}
                  />
                  <Text style={styles.mainFeaturesItensDataTitle}>{`   ${data.data.features.fps} FPS`}</Text>
                </View>
              </View>
            </View>
          </View>


          <View style={styles.footer}>
            <View style={styles.footerPriceContainer}>
              <Text style={styles.footerPrice}>{`$ ${data.price}`}</Text>
              <Text style={styles.footerPriceText}>por dia </Text>
            </View>

            <TouchableOpacity
              style={styles.footerSend}
              onPress={() => console.log('Comprado')}
            >
              <Text style={styles.footerSendText}>Alugar Agora</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>

      </>
    </SafeAreaView>
  );
}

