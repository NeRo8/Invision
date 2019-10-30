import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default StyleSheet.create({
  wraperView: {
    minHeight: '100%',
    marginHorizontal: 15,
    marginTop: 15,
  },
  userName: {
    fontSize: 20,
    lineHeight: 30,
    color: 'black',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  block: {
    flexDirection: 'row',
    flexBasis: '48%',
    backgroundColor: 'white',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockEmail: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockText: {
    fontSize: 15,
    lineHeight: 26,
  },
  myAdsView: {
    marginTop: 25,
  },
  flatListView: {
    marginTop: 10,
  },
});
