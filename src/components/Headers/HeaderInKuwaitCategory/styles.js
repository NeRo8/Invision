import { StyleSheet, Platform } from 'react-native';

import { colors } from '../../../constants';
import { gothamBook } from '../../../constants/fonts';

export default StyleSheet.create({
  container: {
    height: 132,
    paddingHorizontal: 5,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    backgroundColor: colors.HEADER,
  },
  minContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  minBottomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
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
  inputStyle: {
    ...gothamBook,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '300',
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    height: 40,
  },
  inputContainer: {
    backgroundColor: 'white',
    marginBottom: 15,
  },
  leftIconContainer: {
    marginRight: 10,
  },
});
