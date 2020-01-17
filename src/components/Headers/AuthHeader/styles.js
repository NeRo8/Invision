import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';

import { gothamBold } from '../../../constants/fonts';

export default StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: colors.HEADER,
  },
  headerBlock: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    ...gothamBold,
    flex: 1,
    fontSize: 18,
    marginRight: 40,
    paddingTop: 10,
    padding: 0,
    textAlign: 'center',
    color: 'white',
  },
  headerRight: {
    marginHorizontal: 10,
    color: 'white',
  },
  navBlock: {
    flexDirection: 'row',
    marginHorizontal: 15,
    backgroundColor: colors.BACKGROUND,
    marginTop: 18,
    marginBottom: 10,
  },
  activeBlock: {
    flex: 1,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 0.5,
  },
  textActive: {
    ...gothamBold,
    fontSize: 14,
    color: colors.REPLY,
    marginTop: 5,
  },
  textUnactive: {
    ...gothamBold,
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
});
