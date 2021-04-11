import { Dimensions, StyleSheet, Platform } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes } from '../../Constants/theme';


export default StyleSheet.create({
  header: {
    height: height / 2,
    width: width,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerButton: {
    zIndex: 3,
    width: width,
    height: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: sizes.medium,
  },
  headerButtonPopBack: {
    marginHorizontal: sizes.medium,
    padding: sizes.medium,
    width: width / 4,
  },
  headerButtonPop: {

    marginHorizontal: sizes.medium,
    padding: sizes.medium,
    width: width / 4,
    justifyContent: 'center',
    alignItems: 'center',

  },

  headerItens: {
    position: 'absolute',
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    width: '50%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: 2
  },
  headerItensContainer: {

    justifyContent: 'center',
    alignItems: 'center',
  },
  headerItensContainerText: {
    color: colors.blackAbsolut,
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.title
  },
  headerItensContainerSubText: {
    color: colors.blackAbsolut,
    fontFamily: 'Montserrat-Regular',
    fontSize: sizes.subTitle
  },
  headerImage: {
    height: '90%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: sizes.small,
  },
  headerImageURI: {
    width: height / 3,
    height: height / 3,
  },
  main: {
    width: width,
    padding: sizes.small,
  },
  mainHeader: {
    margin: sizes.small,
  },
  mainHeaderText: {
    padding: sizes.small,
  },
  mainHeaderTextTitle: {
    color: colors.blueLight3,
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.title
  },
  mainHeaderTextSubTitle: {
    color: colors.blueLight3,
    fontFamily: 'Montserrat-Regular',
    fontSize: sizes.subTitle
  },

  mainFeatures: {

    padding: sizes.small,


  },
  mainFeaturesTitle: {
    color: colors.blueLight3,
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.title,
    marginTop: sizes.small,
  },
  mainFeaturesItens: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  mainFeaturesItensData: {

    paddingVertical: sizes.medium,
    margin: sizes.small,
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  mainIcon: {
    height: 35,
    width: 35,
    margin: sizes.small
  },
  mainFeaturesItensDataTitle: {
    color: colors.blueLight3,
    fontFamily: 'Montserrat-Regular',
    fontSize: sizes.text,
    marginTop: sizes.small,
  },


  footer: {
    width: width,
    padding: sizes.small,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  footerPriceContainer: {
    padding: sizes.small,
    margin: sizes.medium,

  },
  footerPrice: {
    color: colors.blackAbsolut,
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.title,

  },
  footerPriceText: {
    color: colors.blackAbsolut,
    fontFamily: 'Montserrat-Regular',
    fontSize: sizes.subTitle,
  },
  footerSend: {
    backgroundColor: colors.blueLight2,
    padding: sizes.small,
    margin: sizes.medium,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  footerSendText: {
    color: colors.white,
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.title,
    paddingVertical: sizes.small,
    paddingHorizontal: sizes.medium,
  },
})