import { StyleSheet, Platform } from 'react-native';

import { colors } from '../../../constants';
import { gothamBold, gothamBook } from '../../../constants/fonts';

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    backgroundColor: colors.HEADER,
  },
  headerText: {
    ...gothamBold,
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
  },
  underHeaderText: {
    ...gothamBook,
    fontSize: 11,
    textAlign: 'center',
    color: 'white',
  },
  activeView: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 6,
    height: 5,
  },
  unactiveView: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 6,
    height: 5,
  },
  containerRow: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginVertical: 15,
  },
});
