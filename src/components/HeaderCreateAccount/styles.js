import { StyleSheet } from 'react-native';

import globalStyles from '../../constants/globalStyles';
import { colors } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: globalStyles.gothamBold.fontFamily,
    fontSize: 13,
    lineHeight: 16,
    color: 'white',
  },
  underTitle: {
    fontFamily: globalStyles.gothamBook.fontFamily,
    fontSize: 11,
    lineHeight: 13,
    color: 'white',
  },
  containerView: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  activeView: {
    flex: 1,
    height: 5,
    marginHorizontal: 5,
    backgroundColor: 'white',
  },
  unactiveView: {
    flex: 1,
    height: 5,
    marginHorizontal: 5,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
});
