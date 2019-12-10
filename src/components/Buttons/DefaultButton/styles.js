import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';

import { gothamBold } from '../../../constants/fonts';

export default StyleSheet.create({
  btnTitle: {
    ...gothamBold,
    color: 'white',
    fontSize: 16,
  },
  btnStyle: {
    height: 50,
    borderRadius: 3,
    backgroundColor: colors.DEFAULT_BUTTON,
  },
  btnContainer: {
    marginVertical: 5,
  },
});
