import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';
import { globalStyles } from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  containerBlock: {
    flexGrow: 1,
    paddingHorizontal: 15,
  },
  headerText: {
    marginTop: 25,
    ...globalStyles.gothamBold,
    fontSize: 12,
  },
  divider: {
    marginVertical: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemTitle: {
    ...globalStyles.gothamBook,
    fontSize: 17,
  },
});
