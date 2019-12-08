import { StyleSheet } from 'react-native';

import { colors, globalStyles } from '../../constants';

import { gothamBook } from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  selectorContainer: {
    width: '90%',
    flexDirection: 'row',
  },
  loadingText: {
    ...gothamBook,
    fontSize: 18,
    marginTop: 20,
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
  textUnactive: {
    fontFamily: globalStyles.gothamBook.fontFamily,
    fontSize: 14,
  },
  textActive: {
    color: 'white',
    fontFamily: globalStyles.gothamBold.fontFamily,
    fontSize: 14,
  },
  bodyBlock: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 5,
  },
  headerBlock: {
    height: 40,
    paddingHorizontal: 10,
    marginTop: 10,
  },
});
