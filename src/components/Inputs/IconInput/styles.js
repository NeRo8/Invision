import { StyleSheet } from 'react-native';

import { gothamMediumRegular, gothamBook } from '../../../constants/fonts';

import { colors } from '../../../constants';

export default StyleSheet.create({
  label: {
    ...gothamMediumRegular,
    marginBottom: 7,
    fontSize: 12,
    color: colors.GREY_TITILE_COLOR,
  },
  inpStyle: {
    ...gothamBook,
    fontSize: 14,
    flex: 1,
    paddingHorizontal: 15,
  },
  leftIconContainer: {
    borderRightWidth: 1,
    borderColor: colors.BORDER_COLOR,
    marginLeft: 0,
    width: 50,
  },
  inputContainerS: {
    paddingLeft: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.BORDER_COLOR,
  },
  inputContainer: {
    backgroundColor: 'white',
    height: 44,
    paddingHorizontal: 0,
    marginVertical: 15,
  },
});
