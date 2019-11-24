import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants';

export default StyleSheet.create({
  container: {
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
  underTitle: {
    fontSize: 12,
    lineHeight: 25,
    marginTop: 26,
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
  checkmark: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
  elementCheck: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
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
