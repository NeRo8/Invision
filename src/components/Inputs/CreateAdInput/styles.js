import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';
import { gothamBook } from '../../../constants/fonts';

export default StyleSheet.create({
  inputStyle: {
    ...gothamBook,
    fontSize: 17,
    color: colors.LABEL_GREY_COLOR,
  },
  inputContainerStyle: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    borderBottomWidth: 0,
    paddingHorizontal: 25,
  },
  inputContainer: {
    marginTop: 15,
    paddingHorizontal: 0,
  },
});
