import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes } from '../../Constants/theme';


export default StyleSheet.create({
  containerBackground: {
    flex: 1,
    backgroundColor: '#356EDE',
  },
  container: {
    width: width,
    height: height,
    position: 'absolute',

  },
  header: {
    //backgroundColor: colors.red,
    flexDirection: 'row',
    width: width,
    paddingHorizontal: sizes.small,
    paddingVertical: sizes.large,
    alignItems: 'center'
  },
  headerDescription: {
    marginTop: sizes.large,
    // backgroundColor: colors.green,
    width: '70%',
    padding: sizes.small
  },
  headerDescriptioText: {
    color: colors.white,
    fontFamily: 'Montserrat-Regular',
    fontSize: sizes.subTitle,
  },
  headerDescriptioTextName: {
    color: colors.white,
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.title,
  },
  headerPhoto: {},
  headerPhotoProfile: {
    width: 90,
    height: 90,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#ffff',
    marginHorizontal: sizes.medium,
    marginTop: sizes.medium,
  },
  card: {
    height: 350,
    //backgroundColor: '#fff',
    padding: sizes.medium,
    flexDirection: 'row',
    width: width,
  },
  cardItem: {
    backgroundColor: "rgba(255, 255, 255,0.2);",
    margin: sizes.small,
    marginLeft: 20,
    borderRadius: 40,
    padding: sizes.small,
    alignItems: 'center',
    width: 200,
    height: 300
  },
  cardTitle: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Montserrat-Regular',


  },
  cardPrice: {
    width: '100%',
    backgroundColor: colors.green,
    zIndex: 1,
  },
  cardPriceItem: {
    backgroundColor: colors.white,
    padding: sizes.medium,
    borderRadius: 8,
    position: 'absolute',
    marginTop: 50,
    marginLeft: -20,

  },
  cardPriceText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.title
  },
  cardConsolePhoto: {
    width: 180,
    height: 230,


  },




  tabBar: {
    //backgroundColor: colors.green,
    flexDirection: 'row',
    marginVertical: sizes.medium
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: sizes.small,

    borderBottomWidth: 3,
    borderColor: '#5685E3',
  },
  tabItemSelected: {
    flex: 1,
    alignItems: 'center',
    padding: sizes.small,
    borderBottomWidth: 3,
    borderColor: colors.white,
  },
  icon: {
    height: 30,
    width: 20,
  },
  text: {
    color: colors.white,
    margin: sizes.small,
    fontFamily: 'Montserrat-Regular',
    fontSize: sizes.subTitle
  },
  textSelected: {
    color: colors.white,
    margin: sizes.small,
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.title

  },

  main: {
    flex: 1,
    backgroundColor: colors.white,
    width: width,
    padding: sizes.small,
  },
  mainContainer: {
    padding: sizes.small,
    backgroundColor: colors.white,
    flexDirection: 'row',

  },
  mainContainerHeader: {
    flex: 1,
  },
  mainContainerTitle: {
    color: colors.black,
    margin: sizes.small,
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.title
  },
  mainContainerText: {
    color: colors.black,
    margin: sizes.small,
    fontFamily: 'Montserrat-Regular',
    fontSize: sizes.text
  },
  mainButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
  },
  mainButtonText: {
    color: colors.blueLight3,
    margin: sizes.small,
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.text
  },

  advertising: {
    flex: 1,
    padding: sizes.small,
  },
  advertisingItem: {
    margin: sizes.small,
    borderRadius: 8,
    backgroundColor: colors.white,
    flexDirection: 'row',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,

  },
  advertisingItemText: {
    zIndex: 2,
    width: '70%',
    //backgroundColor: colors.red,
    height: '100%',
    position: 'absolute',
  },
  advertisingItemImage: {
    zIndex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',

  },
  advertisingTag: {

    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: sizes.small,
    margin: sizes.medium,
    borderRadius: 800,
  },
  advertisingTagText: {
    color: colors.white,
    margin: sizes.small,
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.subTitle
  },
  advertisingTitle: {
    color: colors.blueLight3,
    marginHorizontal: sizes.medium,
    marginTop: sizes.medium,
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.title
  },
  advertisingSubTitle: {
    color: colors.blueLight3,
    marginHorizontal: sizes.medium,
    marginTop: sizes.small,

    fontFamily: 'Montserrat-Regular',
    fontSize: sizes.text
  },
  advertisingIcon: {
    height: 220,
    width: 220,

  },
})