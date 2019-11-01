import { StyleSheet } from 'react-native';

import globalStyles from '../../../constants/globalStyles';
import { colors } from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F3F5F7',
  },
  filterElement: {
    marginTop: 25,
  },
  textBlock: {
    fontSize: 12,
    color: colors.TITLE,
  },
  selectBlock: {
    marginTop: 10,
    flexDirection: 'row',
    height: 40,
  },
  element: {
    flex: 1,
    borderColor: 'silver',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textElement: {
    fontFamily: globalStyles.gothamBook.fontFamily,
    color: colors.TITLE,
    fontSize: 14,
  },
  elementActive: {
    flex: 1,
    borderColor: colors.HEADER,
    borderWidth: 0.5,
    backgroundColor: colors.HEADER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textElementActive: {
    fontFamily: globalStyles.gothamBold.fontFamily,
    color: 'white',
    fontSize: 14,
  },
  blockPrice: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#F3F5F7',
  },
  labelInput: {
    fontFamily: globalStyles.gothamMediumRegular.fontFamily,
    padding: 0,
    marginBottom: 5,
    fontSize: 12,
    fontWeight: '500',
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 0,
  },
  inputStyle: {
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: 'silver',
    height: 40,
    //borderBottomWidth: 0,
  },
  inputS: {
    fontSize: 14,
    fontFamily: globalStyles.muliRegular.fontFamily,
  },
  markerStyle: {
    marginTop: 14,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#E4E5EC',
    height: 20,
    width: 20,
    backgroundColor: 'white',
  },
  unselectedStyle: {
    backgroundColor: 'rgba(35, 107, 230, 0.2)',
    height: 14,
  },
  categoryElement: {
    marginHorizontal: 10,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'silver',
  },
  titleCategory: {
    marginTop: 10,
    fontFamily: globalStyles.gothamBold.fontFamily,
    fontSize: 12,
  },
});
