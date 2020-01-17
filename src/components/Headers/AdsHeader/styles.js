import { StyleSheet, Platform } from 'react-native';

import { colors } from '../../../constants';
import { gothamBold } from '../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
  },

  searchContainer: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    backgroundColor: 'white',
    height: 35,
    width: '95%',
    borderRadius: 0,
  },
  inputContainerS: {
    borderBottomWidth: 0,
    height: 35,
  },
  leftIconContainer: {
    marginHorizontal: 5,
  },
  filtersContainer: {
    flex: 1,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnTitleStyle: {
    ...gothamBold,
    fontSize: 13,
    color: 'white',
  },
  btnStyle: {
    backgroundColor: colors.HEADER_BUTTON,
    borderRadius: 0,
    height: 30,
  },
  btnContainer: {
    flex: 1,
    height: 35,
  },
});
