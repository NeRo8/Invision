import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  pictureBlock: {
    flex: 1,
  },
  textBlock: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  picture: {
    flex: 1,
    height: null,
    width: null,
  },
  title: {
    color: colors.TITLE,
    fontSize: 13,
  },
  price: {
    color: colors.HEADER,
    fontSize: 13,
  },
  status: {
    color: colors.UNACTIVE,
    fontSize: 13,
  },
});
