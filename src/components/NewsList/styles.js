import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  pictureBlock: {
    flex: 1,
  },
  picture: {
    flex: 1,
    height: null,
    width: null,
  },
  title: {
    fontSize: 13,
    lineHeight: 24,
  },
  date: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
