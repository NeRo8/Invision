import { StyleSheet } from 'react-native';

import { globalStyles } from '../../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  headerText: {
    ...globalStyles.gothamBold,
    fontSize: 12,
    marginVertical: 15,
  },
  title: {
    ...globalStyles.gothamBook,
    fontSize: 17,
  },
  divider: {
    color: 'silver',
    backgroundColor: 'silver',
    width: '100%',
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
