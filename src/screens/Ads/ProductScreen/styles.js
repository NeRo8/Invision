import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../constants';
import {
  gothamBold,
  gothamBook,
  gothamMediumRegular,
} from '../../../constants/fonts';

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
    ...gothamBook,
    fontSize: 22,
    lineHeight: 30,
  },
  showMoreText: {
    ...gothamBook,
    color: colors.UNACTIVE,
    fontSize: 17,
    lineHeight: 32,
    textDecorationLine: 'underline',
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
  viewsAndDate: {
    ...gothamBook,
    fontSize: 15,
    lineHeight: 26,
    color: colors.UNACTIVE,
  },

  tagsView: {
    marginTop: 23,
    alignItems: 'center',
    borderColor: colors.BORDER,
    flex: 1,
  },
  tagsFlatList: {
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#EAEAEA',
  },
  tagsFlatListContainer: {
    minWidth: '90%',
    height: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
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
    ...gothamBold,
    marginLeft: 10,
    lineHeight: 20,
    fontSize: 15,
  },
  otherAds: {
    ...gothamBook,
    color: colors.HEADER,
    fontSize: 15,
    lineHeight: 23,
  },
  reviews: {
    ...gothamBold,
    marginTop: 25,
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 1,
  },
  similarAds: {
    ...gothamBold,
    marginTop: 48,
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 1,
  },
  userNameComents: {
    ...gothamBold,
    fontSize: 13,
    lineHeight: 20,
  },
  userTouchable: {
    marginHorizontal: 15,
    alignItems: 'center',
    height: 48,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  userLeftBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  bottomView: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F9',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  bottomInput: {
    ...gothamBook,
    fontSize: 17,
    lineHeight: 24,
    backgroundColor: 'white',
    height: 50,
  },
  bottomInputContainer: {
    maxWidth: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 0,
  },
  iconPhoneContainer: {
    backgroundColor: '#9BA9BE',
    width: 55,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  iconSendContainer: {
    backgroundColor: colors.HEADER,
    width: 55,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    marginRight: -10,
  },
});
