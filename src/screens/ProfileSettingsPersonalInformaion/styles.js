import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors'

export default StyleSheet.create({
  btnTitleStyle: {
    fontSize: 12,
    fontWeight: 'bold',

  },
  btnStyle: {
    backgroundColor: colors.HEADER,
    height: 50,
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  header: {
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
  },
  elementContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    letterSpacing: 2
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
    fontSize: 12,
    color: colors.GREY_TITILE_COLOR
  },
  elementTitleNonHeader: {
    flex: 1,
    fontSize:14
  },
  inputContainer: {
    backgroundColor: 'white',
    height: 44,
    width: '100%',
    paddingLeft:0,
    paddingRight:0
  },
  inputContainerS: {
    borderWidth: 1,
    height: 44,
    borderColor: colors.BORDER_COLOR,
  },
  leftIconContainer: {
    borderWidth: 1,
    marginHorizontal: 10,
    height: 44,
    borderLeftWidth: 0,
    paddingRight:15,
    borderColor: colors.BORDER_COLOR
  },
  filtersContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
