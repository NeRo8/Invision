import { StyleSheet } from 'react-native';

import { gothamBold } from '../../../../../constants/fonts';
import { colors } from '../../../../../constants';

export default StyleSheet.create({
  reviews: {
    ...gothamBold,
    marginTop: 25,
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 1,
  },
  btnTitle: {
    ...gothamBold,
    fontSize: 17,
    color: 'white',
  },
  btnStyle: {
    backgroundColor: colors.HEADER,
    height: 50,
  },
  btnContainer: {
    marginTop: 25,
  },
});
