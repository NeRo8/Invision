import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';

export default StyleSheet.create({
  privacyPolicy: {
    fontSize: 18,
    color: 'black',
    marginTop: 20,
  },

  privacyPolicyText: {
    fontSize: 17,
    color: colors.TITLE,
    marginTop: 20,
  },

  privacyPolicySmallText: {
    fontSize: 15,
    color: colors.TITLE,
    marginTop: 20,
    paddingHorizontal: 15,
  },
});
