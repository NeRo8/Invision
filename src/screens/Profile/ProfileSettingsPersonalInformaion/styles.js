import { StyleSheet } from 'react-native';

import { gothamBook } from '../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  selectBoxContainer: {
    flex: 1,
    marginLeft: 50,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: 'silver',
  },
  selectBoxItem: {
    height: 40,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  selectBoxText: {
    ...gothamBook,
    fontSize: 16,
  },
});
