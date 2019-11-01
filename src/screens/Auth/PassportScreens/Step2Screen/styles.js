import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(237, 237, 237)',
  },
  headerTitle: {
    fontSize: 15,
    lineHeight: 25,
    color: colors.HEADER,
    marginTop: 33,
    paddingHorizontal: 15,
  },
  underTitle: {
    fontSize: 12,
    lineHeight: 25,
    marginTop: 26,
    paddingHorizontal: 15,
  },
  btnTitle: {
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
    paddingHorizontal: 15,
  },
  inputMultiContainerStyle: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 0,
  },
  inputMultiContainer: {
    flex: 1,
    marginTop: 15,
    marginBottom: 25,
    paddingHorizontal: 15,
  },
});
