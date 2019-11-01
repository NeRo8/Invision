import { StyleSheet, Platform } from 'react-native';
import { colors } from '../constants/colors';

export default StyleSheet.create({
  gothamBold: {
    fontFamily: 'Gotham-Bold',
    color: colors.TITLE,
  },
  gothamBook: {
    fontFamily: 'Gotham-Book',
    color: colors.TITLE,
  },
  gothamMediumRegular: {
    fontFamily:
      Platform.OS === 'ios' ? 'Gotham Medium' : 'Gotham-Medium-Regular',
    color: colors.TITLE,
  },
  muliRegular: {
    fontFamily: 'Muli-Regular',
    color: colors.TITLE,
  },
});
