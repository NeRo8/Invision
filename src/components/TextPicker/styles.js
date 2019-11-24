import { StyleSheet } from 'react-native';

import { colors, globalStyles } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  elementUnactive: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
  elementTextUnactive: {
    fontFamily: globalStyles.gothamMediumRegular.fontFamily,
    fontSize: 13,
    lineHeight: 24,
    color: colors.TITLE,
  },
  elementActive: {
    flex: 1,
    height: 40,
    backgroundColor: colors.HEADER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  elementTextActive: {
    fontFamily: globalStyles.gothamMediumRegular.fontFamily,
    fontSize: 13,
    lineHeight: 24,
    color: 'white',
  },
});
