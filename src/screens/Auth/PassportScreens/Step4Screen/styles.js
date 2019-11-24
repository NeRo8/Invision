import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(237, 237, 237)',
  },
  containerBlock: {
    flex: 1,
    backgroundColor: 'rgb(237, 237, 237)',
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 15,
    lineHeight: 25,
    color: colors.HEADER,
    marginTop: 33,
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
    fontSize: 17,
    lineHeight: 26,
    color: colors.LABEL_GREY_COLOR,
    paddingHorizontal: 0,
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
});
