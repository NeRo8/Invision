import { StyleSheet } from 'react-native';

import { gothamBook } from '../../../constants/fonts';

export default StyleSheet.create({
  inputStyles: {
    ...gothamBook,
    height: '100%',
    fontSize: 17,
    lineHeight: 26,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  inputContainerStyle: {
    height: 50,
    borderBottomWidth: 0,
  },
  inputContainer: {
    marginTop: 15,
    paddingHorizontal: 0,
  },
});
