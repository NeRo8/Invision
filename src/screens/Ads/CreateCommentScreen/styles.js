import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';
import { gothamBold, gothamBook } from '../../../constants/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgb(246,246,246)',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  inputContainer: {
    marginTop: 15,
    paddingHorizontal: 0,
  },
  inputStyles: {
    ...gothamBook,
    height: '100%',
    fontSize: 17,
    lineHeight: 26,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  textField: {
    ...gothamBook,
    height: '100%',
    fontSize: 17,
    lineHeight: 26,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    paddingTop: 12,
    paddingHorizontal: 10,
  },
  inputContainerStyle: {
    height: 50,
    borderBottomWidth: 0,
  },
  btnStyle: {
    height: 50,
    backgroundColor: colors.HEADER,
  },
  btnTitle: {
    ...gothamBold,
    fontSize: 15,
    color: 'white',
  },
  textContainerStyle: {
    height: '100%',
    borderBottomWidth: 0,
  },
});
