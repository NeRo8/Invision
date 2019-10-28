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
  },
  headerRight: {
    width: 60,
    marginRight: 10,
    textAlign: 'right',
    color: 'white',
    fontSize: 17,
  },
  bodyBlock: {
    flex: 1,
    alignItems: 'center',
  },
  inputStyle: {
    marginLeft: 10,
    fontSize: 15,
  },
  inputContainer: {
    marginTop: 10,
  },
  inputContainerStl: {
    height: 40,
    borderBottomWidth: 0,
    backgroundColor: 'rgba(255,255,255, 0.2)',
  },
});
