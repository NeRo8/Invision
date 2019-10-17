import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  selectorContainer: {
    width: '90%',
    flexDirection: 'row',
  },
  activeElement: {
    height: 40,
    backgroundColor: colors.HEADER,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unactiveElement: {
    height: 40,
    borderWidth: 0.5,
    borderColor: 'silver',
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textUnactive: {},
  textActive: {
    color: 'white',
    fontWeight: 'bold',
  },
  bodyBlock: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 5,
  },
  headerBlock: {
    alignItems: 'center',
    marginTop: 10,
  },
});
