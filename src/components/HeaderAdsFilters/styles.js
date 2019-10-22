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
    flex: 1,
    alignItems: 'center',
  },
  inputStyle: {
    marginLeft: 10,
    fontSize: 14,
  },
  inputContainer: {
    marginTop: 5,
  },
  inputContainerStl: {
    height: 30,
    borderBottomWidth: 0,
    backgroundColor: 'rgba(255,255,255, 0.2)',
  },
});
