import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';
import { gothamBold, gothamBook } from '../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.CHAT_BACKGROUND,
  },
  list: {
    flexGrow: 1,
    paddingHorizontal: 15,
  },
  footer: {
    flexDirection: 'row',
    marginVertical: 30,
    paddingHorizontal: 15,
  },
  btnSend: {
    backgroundColor: colors.HEADER,
    width: 55,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  inputs: {
    ...gothamBook,
    height: 50,
    marginLeft: 20,
    flex: 1,
    fontSize: 17,
  },
});
