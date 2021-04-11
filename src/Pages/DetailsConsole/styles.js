import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes } from '../../Constants/theme';


export default StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: colors.w,
    padding: sizes.small,
  },
  headerButtonPop: {
    zIndex: 3,
    width: width,
    height: '10%',
  },
  main: {
    width: width,
    height: '30%',
    backgroundColor: colors.red,
    padding: sizes.small,
  },
  footer: {
    width: width,
    height: '15%',
    backgroundColor: colors.blue,
    padding: sizes.small,
  },
  headerItens: {
    position: 'absolute',
    backgroundColor: colors.blue,
    width: '50%',
    height: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 2
  },
  headerItensContainer: {

  },
  headerItensContainerText: {

  },
  headerItensContainerSubText: {

  },



  headerImageURI: {
    width: height / 2,
    height: height / 2,
  },

})