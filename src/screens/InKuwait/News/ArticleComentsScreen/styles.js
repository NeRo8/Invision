import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants';

export default StyleSheet.create({
  wraper: {
    minHeight: '100%',
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
});
