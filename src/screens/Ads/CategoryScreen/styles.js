import { StyleSheet } from 'react-native';

import { gothamBook } from '../../../constants/fonts';

export default StyleSheet.create({
  elementContainer: {
    marginHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  elementDivider: {
    marginHorizontal: 10,
  },
  elementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'silver',
  },
  elementTitle: {
    ...gothamBook,
    flex: 1,
    marginLeft: 10,
  },
});
