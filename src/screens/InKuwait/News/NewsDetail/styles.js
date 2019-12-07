import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../../../constants';
import {
  gothamBold,
  gothamBook,
  gothamMediumRegular,
} from '../../../../constants/fonts';

export default StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 1,
    left: 5,
    right: 5,
    backgroundColor: 'transparent',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 40 : 30,
    zIndex: 1,
    alignItems: 'center',
  },
  title: {
    ...gothamMediumRegular,
    fontSize: 17,
    lineHeight: 30,
  },

  titleView: {
    marginTop: 25,
  },

  description: {
    ...gothamBook,
    fontSize: 15,
    lineHeight: 27,
    fontWeight: '300',
    //textAlign: 'justify',
    color: colors.TITLE,
  },
  descriptionView: {
    marginTop: 20,
    backgroundColor: 'rgba(255,255,265, 0.3)',
  },
  icons: {},
  rightBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wraperView: {
    marginHorizontal: 15,
  },
  block: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexBasis: '48%',
    backgroundColor: 'white',
    height: 55,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  blockText: {
    ...gothamBook,
    fontSize: 15,
    lineHeight: 26,
  },
  blockBottomText: {
    ...gothamBook,
    fontSize: 17,
    lineHeight: 26,
    fontWeight: '300',
    color: colors.LABEL_GREY_COLOR,
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  buttonSend: {
    backgroundColor: colors.HEADER,
    height: 50,
    marginVertical: 15,
  },
  btnStyle: {
    ...gothamBold,
    color: 'white',
    fontSize: 15,
    lineHeight: 24,
  },
});
