import { StyleSheet, Platform } from 'react-native';

import { gothamBook, gothamBold } from '../../constants/fonts';

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
    ...gothamBold,
    flex: 1,

    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  headerRight: {
    ...gothamBook,
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
    ...gothamBook,
    marginLeft: 10,
    fontSize: 15,
    color: 'white',
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
