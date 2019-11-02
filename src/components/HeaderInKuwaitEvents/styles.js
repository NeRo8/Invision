import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBlock: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerText: {
    flex: 1,
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
  },
  headerRight: {
    marginHorizontal: 15,
    color: 'white',
  },
  bodyBlock: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  inputStyle: {
    marginLeft: 10,
    fontSize: 14,
  },
  inputContainer: {
    backgroundColor: 'white',
    height: 40,
  },
  inputContainerS: {
    borderBottomWidth: 0,
  },
  leftIconContainer: {
    marginHorizontal: 10,
  },
});
