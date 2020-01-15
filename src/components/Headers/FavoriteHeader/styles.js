import { StyleSheet } from 'react-native';

import { colors, globalStyles } from '../../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.HEADER,
  },
  titleBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sideComponent: {
    flex: 1,
    textAlign: 'right',
    marginRight: 11,
    ...globalStyles.gothamBook,
    fontSize: 17,
    color: 'white',
  },
  titleScreen: {
    flex: 2,
    ...globalStyles.gothamBold,
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
  },
  navBlock: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: colors.BACKGROUND,
    paddingVertical: 25,
  },
  activeBlock: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'silver',
    borderWidth: 0.5,
  },
  textActive: {
    ...globalStyles.gothamBold,
    fontSize: 14,
    color: 'white',
  },
  textUnactive: {
    ...globalStyles.gothamBook,
    fontSize: 14,
  },
});
