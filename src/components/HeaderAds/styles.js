import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
    width: '95%',
    borderRadius: 5,
  },
  inputContainerS: {
    borderBottomWidth: 0,
  },
  leftIconContainer: {
    marginHorizontal: 10,
  },
  filtersContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnTitleStyle: {
    fontWeight: 'bold',
  },
  btnStyle: {
    backgroundColor: colors.HEADER_BUTTON,
    borderRadius: 0,
  },
  btnContainer: {
    flex: 1,
    paddingHorizontal: '2.5%',
  },
});
