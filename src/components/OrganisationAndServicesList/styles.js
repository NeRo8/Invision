import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    paddingHorizontal: 10,
    marginTop: 25,
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
    marginTop: 10,
    fontSize: 13,
    lineHeight: 24,
    fontWeight: '300',
  },
  rating: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '300',
  },
  date: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
