import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  filterElement: {
    marginVertical: 20,
  },
  textBlock: {
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
  textElement: {},
  elementActive: {
    flex: 1,
    borderColor: colors.HEADER,
    borderWidth: 0.5,
    backgroundColor: colors.HEADER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textElementActive: {
    color: 'white',
    fontWeight: 'bold',
  },
  blockPrice: {
    marginTop: 10,
    flexDirection: 'row',
  },
  labelInput: {
    padding: 0,
    marginBottom: 5,
    fontSize: 14,
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
    //borderBottomWidth: 0,
  },
  categoryElement: {
    marginHorizontal: 10,
    height: 100,
    width: 100,
    backgroundColor: 'silver',
  },
});
