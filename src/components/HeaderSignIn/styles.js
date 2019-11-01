import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../constants/colors';
import globalStyles from '../../constants/globalStyles';

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
    flex: 1,
    fontSize: 20,
    lineHeight: 30,
    marginRight: 40,
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
    fontFamily: globalStyles.gothamBold.fontFamily,
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
    fontFamily: globalStyles.gothamBold.fontFamily,
    color: colors.HEADER,
  },
  simpleContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 10,
  },
});
