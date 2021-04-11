import React, { useEffect, useState } from 'react';
import { Animated, TouchableOpacity, Text, View, Dimensions, StatusBar, ScrollView, ImageBackground, Image } from 'react-native';
import { useNavigation, useRoute, useIsFocused, useFocusEffect } from '@react-navigation/native';

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
    < >
      <StatusBar barStyle="dark-content" hidden={true} backgroundColor={'#6195F6'} />
      <View style={styles.header}>
        <View style={styles.headerButtonPop}>
          <Text>teste</Text>
        </View>
        <View style={styles.headerItens}>
          <View style={styles.headerItensContainer}>
            <Text style={styles.headerItensContainerText}>{`${data.data.storage}`}</Text>
            <Text style={styles.headerItensContainerSubText}>{`${data.data.storage}`}</Text>
          </View>
          <View style={styles.headerItensContainer}>
            <Text style={styles.headerItensContainerText}>{`${data.data.storage}`}</Text>
            <Text style={styles.headerItensContainerSubText}>{`${data.data.storage}`}</Text>
          </View>
          <View style={styles.headerItensContainer}>
            <Text style={styles.headerItensContainerText}>{`${data.data.storage}`}</Text>
            <Text style={styles.headerItensContainerSubText}>{`${data.data.storage}`}</Text>
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
      <View style={styles.main}>
        <Text>main</Text>
      </View>
      <View style={styles.footer}>
        <Text>footer</Text>
      </View>
    </>

  );
}

