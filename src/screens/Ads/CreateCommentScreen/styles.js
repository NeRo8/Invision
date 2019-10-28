import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';

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
    fontSize: 17,
  },
  inputContainerStyle: {
    borderWidth: 0.5,
    height: 50,
    borderColor: 'silver',
    borderBottomWidth: 0.5,
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
