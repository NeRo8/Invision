import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../constants/colors';

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
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
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
    fontFamily: 'Gotham-Bold',
    color: 'white',
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
    fontFamily: 'Gotham-Bold',
    color: colors.HEADER,
  },
  simpleContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 10,
  },
});
