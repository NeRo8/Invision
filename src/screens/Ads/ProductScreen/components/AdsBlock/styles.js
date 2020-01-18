import { StyleSheet } from 'react-native';

import { gothamBold } from '../../../../../constants/fonts';

export default StyleSheet.create({
  headerText: {
    ...gothamBold,
    marginTop: 25,
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 1,
  },
});
