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
    fontWeight: 'bold',
  },
  price: {
    color: colors.HEADER,
  },
  status: {
    color: colors.UNACTIVE,
  },
});
