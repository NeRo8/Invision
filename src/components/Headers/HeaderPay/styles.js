import { StyleSheet, Platform } from 'react-native';

import { colors, globalStyles } from '../../../constants';

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    backgroundColor: colors.HEADER,
  },
  headerBlock: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
  },
  headerText: {
    ...globalStyles.gothamBold,
    color: 'white',
    fontSize: 17,
    flex: 1,
    lineHeight: 30,
    marginRight: 40,
    marginTop: 5,
    padding: 0,
    textAlign: 'center',
    color: 'white',
  },
  headerRight: {
    marginHorizontal: 10,
    color: 'white',
  },
  selectedBlock: {
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
    ...globalStyles.gothamBold,
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
    lineHeight: 30,
    ...globalStyles.gothamBold,
    color: colors.HEADER,
  },
  simpleContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
