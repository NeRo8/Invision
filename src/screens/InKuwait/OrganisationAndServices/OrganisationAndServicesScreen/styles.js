import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/colors';

export default StyleSheet.create({
  wraper: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  mapPin: {
    position: 'absolute',
    bottom: 30,
    right: 10,
    backgroundColor: 'white',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
