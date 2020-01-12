import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants';
import { gothamBold, gothamBook } from '../../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    paddingHorizontal: 15,
  },
  containerBlock: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  headerTitle: {
    ...gothamBold,
    fontSize: 15,
    lineHeight: 25,
    color: colors.HEADER,
    marginTop: 33,
  },
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
  elementPicker: {
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 15,
  },
  elementPickerText: {
    ...gothamBook,
    fontSize: 17,
    lineHeight: 26,
    color: colors.LABEL_GREY_COLOR,
    paddingHorizontal: 0,
  },

  btnTitle: {
    ...gothamBold,
    fontSize: 15,
    color: 'white',
  },
  btnStyles: {
    backgroundColor: colors.HEADER,
    height: 55,
    borderRadius: 0,
  },
  textPicker: {
    ...gothamBook,
    fontSize: 17,
    color: colors.TITLE,
  },
  flContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  textPickerContainer: { height: 40, justifyContent: 'center' },
});
