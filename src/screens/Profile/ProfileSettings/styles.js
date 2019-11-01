import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default StyleSheet.create({
  btnTitleStyle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  btnStyle: {
    backgroundColor: colors.HEADER,
    height: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  header: {
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
  },
  elementContainer: {
    paddingVertical: 10,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    letterSpacing: 2,
  },
  elementDivider: {
    marginHorizontal: 10,
  },
  elementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'silver',
  },
  elementTitle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 12,
  },
  elementTitleNonHeader: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
  },
});
