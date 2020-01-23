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
    textAlignVertical: 'top',
    paddingHorizontal: 15,
    paddingTop: 12,
  },
  inputContainerStyle: {
    height: '100%',
    borderBottomWidth: 0,
  },
  inputContainer: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 0,
    marginBottom: 10,
  },
});
