import { StyleSheet, Platform } from 'react-native';

import { colors } from '../../constants';

import { gothamBold } from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
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
  selectedBlock: {
    flex: 1,
    paddingTop: 10,
  },
  selectedElement: {
    flex: 1,
    height: 30,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedElementText: {
    ...gothamBold,
    color: 'white',
    lineHeight: 30,
  },
  selectedElementActive: {
    flex: 1,
    height: 30,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedElementTextActive: {
    ...gothamBold,
    lineHeight: 30,
    color: colors.HEADER,
  },
  simpleContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 10,
  },
});
