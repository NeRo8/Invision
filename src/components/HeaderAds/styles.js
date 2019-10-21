import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  searchContainer: {
    paddingTop: 10,
    alignItems: 'center',
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
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnTitleStyle: {
    fontWeight: 'bold',
  },
  btnStyle: {
    backgroundColor: colors.HEADER_BUTTON,
    borderRadius: 0,
    height: 35,
  },
  btnContainer: {
    flex: 1,
    height: 35,
  },
});
