import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBlock: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },

  bodyBlock: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
    fontSize: 14,
  },
  inputContainer: {
    marginTop: 15,
    backgroundColor: 'white',
  },
  inputContainerS: {
    borderBottomWidth: 0,
    height: 40,
  },
  leftIconContainer: {
    marginRight: 10,
  },
});
