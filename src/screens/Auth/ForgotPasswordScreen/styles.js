import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerForm: {
    paddingHorizontal: 30,
  },
  fontHint: {
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
});
