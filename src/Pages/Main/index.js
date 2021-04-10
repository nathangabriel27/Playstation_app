import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, Animated, Image } from 'react-native';

import Svg, { Circle, Rect, Path } from 'react-native-svg';

export default function Main() {
  const { height, width } = Dimensions.get('window');

  return (
    <View style={styles.container}>

      <StatusBar barStyle="dark-content" hidden={false} backgroundColor={'#6195F6'} />
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
          translateX='-800'
          fill="#1b53bf"
          d="M0,288L20,293.3C40,299,80,309,120,293.3C160,277,200,235,240,218.7C280,203,320,213,360,218.7C400,224,440,224,480,197.3C520,171,560,117,600,117.3C640,117,680,171,720,197.3C760,224,800,224,840,192C880,160,920,96,960,64C1000,32,1040,32,1080,37.3C1120,43,1160,53,1200,74.7C1240,96,1280,128,1320,138.7C1360,149,1400,139,1420,133.3L1440,128L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
        >
        </Path>
        <Path
          fill="#6195F6"
          translateX='-800'
          //fillOpacity='160'
          d="M0,64L21.8,74.7C43.6,85,87,107,131,122.7C174.5,139,218,149,262,133.3C305.5,117,349,75,393,96C436.4,117,480,203,524,245.3C567.3,288,611,288,655,245.3C698.2,203,742,117,785,101.3C829.1,85,873,139,916,170.7C960,203,1004,213,1047,218.7C1090.9,224,1135,224,1178,213.3C1221.8,203,1265,181,1309,170.7C1352.7,160,1396,160,1418,160L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        >
        </Path>
      </Svg>
      <View style={{ position: 'absolute', flex: 1 }}>
        <Text>teste de SVG</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#356EDE',

  },

});
