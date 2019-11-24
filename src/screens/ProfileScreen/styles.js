import { StyleSheet, Platform } from 'react-native';

import { colors } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  fontInsideImage: {
    fontSize: 11,
    color: 'white',
  },
  fontDescription: {
    fontSize: 15,
    color: 'white',
    textAlign: 'justify',
    lineHeight: 20,
  },
  headerProfile: {
    paddingTop: 30,
    height: 190,
    width: '100%',
    alignItems: 'center',
  },
  headerProfileContainer: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 1,
  },
  profileImage: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconUpdate: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
  },
  bold: {
    fontWeight: 'bold',
  },
  infoElement: {
    borderBottomWidth: 0.5,
    borderColor: 'silver',
    height: 55,
    alignItems: 'center',
    flexDirection: 'row',
  },
  selectedContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  selectedElement: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 40,
  },
  selectedTextElement: {
    fontSize: 15,
  },
  selectedElementActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.HEADER,
    height: 40,
  },
  selectedTextElementActive: {
    color: 'white',
    fontSize: 15,
  },
  headerTitleText: { fontSize: 20, color: 'white', marginVertical: 17 },
  headerText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 20,
  },
  blockBody: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  elementContainer: {
    width: null,
    height: 230,
    flex: 1,
    margin: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  elementBody: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 40,
    justifyContent: 'space-between',
  },
  iconDots: {
    borderRadius: 17,
    width: 35,
    height: 35,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconHeader: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTextIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: colors.NOTIF_ICON,
    height: 15,
    width: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconHeaderProfile: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 25,
    height: 25,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.HEADER,
  },
  iconProfile: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSettingsTitle: {
    color: 'white',
  },
  btnStyle: {
    borderRadius: 0,
    backgroundColor: colors.HEADER,
    height: 50,
  },
});
