import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 10,
    backgroundColor: 'white',
    width: '95%',
  },
  inputContainerS: {
    borderBottomWidth: 0,
  },
  leftIconContainer: {
    marginHorizontal: 10,
  },
});
