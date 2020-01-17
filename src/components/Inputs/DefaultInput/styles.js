import { StyleSheet } from 'react-native';
import globalStyles from '../../../constants/globalStyles';

export default StyleSheet.create({
  inputContainerStyle: {
    borderBottomWidth: 1,
  },
  inputContainer: {
    paddingHorizontal: 30,
  },
  inputStyle: {
    fontFamily: globalStyles.gothamBook.fontFamily,
    fontSize: 17,
    marginTop: 20,
    alignItems: 'flex-start',
  },
});
