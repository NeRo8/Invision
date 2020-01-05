import { StyleSheet } from 'react-native';

import { colors, globalStyles } from '../../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(252,253,255)',
    paddingHorizontal: 15,
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
    ...globalStyles.gothamBook,
    fontSize: 17,
    lineHeight: 26,
    color: colors.LABEL_GREY_COLOR,
    paddingHorizontal: 0,
  },
  elementCheckBox: {
    ...globalStyles.gothamBook,
    fontSize: 17,
    color: colors.LABEL_GREY_COLOR,
    paddingHorizontal: 0,
    fontWeight: '100',
    color: 'black',
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
    ...globalStyles.gothamBold,
    fontSize: 15,
    color: 'white',
  },
  btnStyles: {
    backgroundColor: colors.HEADER,
    height: 55,
    borderRadius: 0,
  },
});
