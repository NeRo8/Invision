import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants';
import { gothamBold, gothamBook } from '../../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  topOfComent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comentView: {
    marginTop: 20,
  },
  button: {
    height: 44,
    flexBasis: '48%',
  },
  buttonsView: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 17,
    lineHeight: 26,
    color: colors.TITLE,
  },
  date: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '300',
    color: colors.UNACTIVE,
  },
  coment: {
    textAlign: 'justify',
    fontSize: 15,
    lineHeight: 27,
    fontWeight: '300',
    color: colors.TITLE,
  },
  buttonWrite: {
    backgroundColor: colors.HEADER,
    height: 50,
    marginBottom: 15,
    marginHorizontal: 15,
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
  },

  containerElement: {
    padding: 15,
  },
  author: {
    fontSize: 17,
    lineHeight: 26,
  },
  time: {
    marginLeft: 10,
    fontSize: 15,
    lineHeight: 26,
  },
  answer: {
    fontSize: 15,
    lineHeight: 26,
    textAlign: 'justify',
    marginBottom: 20,
    marginTop: 10,
  },
  rowBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  btnStyleReport: {
    backgroundColor: 'rgba(240, 91, 136, 0.3)',
    height: 44,
  },
  btnStyleReply: {
    backgroundColor: 'rgba(10,104,239,0.3)',
    height: 44,
  },
  btnContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 3,
  },
  btnTitleReport: {
    ...gothamBook,
    color: '#F05B88',
    fontSize: 13,
  },
  btnTitleReply: {
    ...gothamBook,
    color: '#0A68EF',
    fontSize: 13,
  },
  divider: {
    height: 0.5,
    backgroundColor: 'silver',
    marginVertical: 15,
    marginHorizontal: 15,
  },
  btnTitle: {
    ...gothamBold,
    color: 'white',
    fontSize: 15,
    lineHeight: 24,
  },
});
