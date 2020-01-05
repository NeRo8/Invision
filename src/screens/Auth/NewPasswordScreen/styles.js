import { StyleSheet } from 'react-native';

import { colors, globalStyles } from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    ...globalStyles.gothamBook,
    fontSize: 24,
  },
  underHeaderText: {
    ...globalStyles.gothamBook,
    fontSize: 14,
    marginTop: 21,
    marginBottom: 20,
    color: colors.HINT,
  },
  containerForm: {
    paddingHorizontal: 30,
  },
  labelInput: {
    ...globalStyles.gothamBook,
    fontSize: 13,
    fontWeight: '100',
    color: '#74859E',
  },
  inputStyle: {
    ...globalStyles.gothamBook,
    fontSize: 17,
  },
  containerInput: {
    paddingHorizontal: 0,
    marginTop: 25,
  },
  btnStyles: {
    height: 50,
    backgroundColor: colors.HEADER,
  },
});
