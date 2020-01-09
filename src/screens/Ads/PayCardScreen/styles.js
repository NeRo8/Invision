import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.BACKGROUND,
  },
  cardView: {
    borderStyle: 'dashed',
    borderWidth: 2,
    borderRadius: 1,
    height: 200,
    marginTop: 25,
    borderColor: colors.HEADER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.HEADER,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  textHint: {
    fontSize: 17,
    lineHeight: 25,
  },
  inputRowContainer: {
    flex: 1,
  },
  inputContainer: {
    marginVertical: 15,
  },
  inputRowStyle: {
    textAlign: 'center',
    fontSize: 17,
  },
  inputRowCStyle: {
    borderBottomWidth: 0,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  btnStyle: {
    height: 55,
    backgroundColor: colors.HEADER,
    borderRadius: 0,
  },
  btnTitle: {
    fontSize: 13,
    color: 'white',
  },
});
