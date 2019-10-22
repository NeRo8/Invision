import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
  },
  headerBlock: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  headerRight: {
    marginHorizontal: 10,
    color: 'white',
  },
  bodyBlock: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
});
