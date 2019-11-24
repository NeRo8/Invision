import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgb(246,246,246)',
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
  },
  inputContainer: {
    marginTop: 15,
    paddingHorizontal: 0,
  },
  inputStyles: {
    height: '100%',
    fontSize: 17,
    lineHeight: 26,
    backgroundColor: 'white',
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
    fontSize: 15,
    color: 'white',
  },
});
