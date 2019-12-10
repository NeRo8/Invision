import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors } from '../../../../constants';
import {
  gothamMediumRegular,
  gothamBold,
  gothamBook,
} from '../../../../constants/fonts';

const imgWidth = 1600;
const imgHeight = 750;

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.BACKGROUND,
  },
  header: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 40 : 30,
    alignItems: 'center',
  },
  title: {
    ...gothamMediumRegular,
    fontSize: 17,
    lineHeight: 30,
    marginTop: 25,
  },
  imageHeader: {
    width: '100%',
    height: imgHeight / (imgWidth / Dimensions.get('window').width),
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  viewTab: {
    marginTop: 15,
    width: '100%',
  },
  block: {
    flex: 1,
    height: 44,
    marginHorizontal: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  description: {
    ...gothamBook,
    fontSize: 15,
    lineHeight: 27,
    fontWeight: '300',
    textAlign: 'justify',
  },

  //
  iconContainer: { paddingHorizontal: 5 },
  rightBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wraperView: {
    marginHorizontal: 15,
  },

  blockText: {
    ...gothamBook,
    fontSize: 15,
    lineHeight: 26,
  },
  blockBottomText: {
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
  buttonAddGoogle: {
    backgroundColor: '#9BA9BE',
  },

  icon: {
    width: 35,
    height: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  btnLContainer: {
    width: 50,
    height: 50,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'white',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },

  modalWindow: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textModal: {
    ...gothamBook,
    fontSize: 15,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
  },
  bottomContainer: {
    flex: 2,
    paddingHorizontal: 15,
  },
});
