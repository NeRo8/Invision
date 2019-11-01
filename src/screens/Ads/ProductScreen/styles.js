import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../constants/colors';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  child: {
    height: height * 0.4,
    width,
    justifyContent: 'center',
  },
  swiperImage: {
    flex: 1,
    width: null,
    height: null,
  },
  title: {
    fontSize: 22,
    lineHeight: 30,
  },
  price: {
    color: colors.HEADER,
    fontSize: 17,
    lineHeight: 26,
    flex: 1,
  },
  head: {
    marginHorizontal: 15,
    marginTop: 12,
  },
  properties: {
    marginTop: 12,
    flexDirection: 'row',
  },
  vd: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vdView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  tagsView: {
    marginTop: 23,
    alignItems: 'center',
    borderColor: colors.BORDER,
    flex: 1,
  },
  tagsText: {
    fontSize: 12,
    lineHeight: 20,
  },
  description: {
    marginTop: 25,
    fontSize: 17,
    lineHeight: 28,
    fontWeight: '300',
    textAlign: 'justify',
  },
  elementContainer: {
    marginVertical: 15,
  },
  elementIcon: {},
  userName: {
    fontSize: 13,
    lineHeight: 20,
  },

  raiting: {
    height: 1,
  },
  date: {
    fontSize: 12,
    flex: 1,
    color: colors.UNACTIVE,
  },
  coment: {
    fontSize: 15,
    lineHeight: 28,
    fontWeight: '300',
    textAlign: 'justify',
  },
  titleRear: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.HEADER,
  },
  titleWrite: {
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
  },

  btnStyleRear: {
    height: 50,
    borderRadius: 2,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.HEADER,
    marginBottom: 10,
  },
  btnStyleWrite: {
    height: 50,
    borderRadius: 2,
    backgroundColor: colors.HEADER,
    borderWidth: 1,
  },
  flatListView: {
    width: '100%',
    marginTop: 25,
  },
  modalButton: {
    marginHorizontal: 25,
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  buttonCancel: {
    marginVertical: 10,
    backgroundColor: 'white',
  },
  modalButtonIconContainer: {
    borderRadius: 40,
    height: 25,
    width: 25,
    justifyContent: 'center',
    marginRight: 15,
  },
  selectSocialText: {
    marginTop: 25,
    marginHorizontal: 25,
    fontSize: 12,
    lineHeight: 23,
    letterSpacing: 1,
  },
  shareBackgroundImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
  shareSelectSocialView: {
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 282,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
});
