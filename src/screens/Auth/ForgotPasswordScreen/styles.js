import { StyleSheet } from 'react-native';

import { globalStyles } from '../../../constants';
import { colors } from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerForm: {
    paddingHorizontal: 30,
  },
  fontHint: {
    ...globalStyles.gothamBook,
    fontSize: 14,
    marginTop: 20,
    color: '#626773',
  },
  labelInput: {
    fontSize: 17,
    fontWeight: '100',
  },
  containerInput: {
    paddingHorizontal: 0,
    marginTop: 50,
  },
  btnStyles: {
    height: 50,
    backgroundColor: colors.HEADER,
  },
  headerText: {
    ...globalStyles.gothamBook,
    fontSize: 24,
  },
  inputStyle: {
    ...globalStyles.gothamBook,
    fontSize: 17,
  },
});
