import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'ios' ? 0 : 10,
  },
  title: {
    fontFamily: 'Gotham-Bold',
    color: 'white',
    fontSize: 17,
    paddingTop: 5,
  },
  leftIcon: {
    width: 50,
  },
  rightIcon: {
    width: 50,
  },
});
