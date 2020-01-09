import { StyleSheet } from 'react-native';

import { colors, globalStyles } from '../../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(247,247,247)',
    paddingHorizontal: 15,
  },
  inputStyle: {
    ...globalStyles.gothamBook,
    fontSize: 17,
  },
  headerTitle: {
    ...globalStyles.gothamBold,
    fontSize: 15,
    lineHeight: 25,
    color: colors.HEADER,
    marginTop: 33,
  },
  underTitle: {
    ...globalStyles.gothamBold,
    fontSize: 12,
    lineHeight: 25,
    marginTop: 26,
  },
  btnTitle: {
    ...globalStyles.gothamBold,
    fontSize: 15,
    color: 'white',
  },
  btnStyles: {
    backgroundColor: colors.HEADER,
    height: 55,
    borderRadius: 0,
  },
  inputContainerStyle: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 0,
  },
  inputContainer: {
    marginTop: 25,
    paddingHorizontal: 0,
  },
  inputStyleMultiline: {
    ...globalStyles.gothamBook,
    fontSize: 17,
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    height: '100%',
  },
  inputMultiContainerStyle: {
    backgroundColor: 'white',
    flex: 1,
    borderBottomWidth: 0,
  },
  inputMultiContainer: {
    flex: 1,
    marginTop: 15,
    marginBottom: 25,
    paddingHorizontal: 0,
  },
});
