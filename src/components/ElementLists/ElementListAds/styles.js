import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 234,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
