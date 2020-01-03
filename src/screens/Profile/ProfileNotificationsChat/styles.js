import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';
import { gothamBold, gothamBook } from '../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.CHAT_BACKGROUND,
  },
  list: {
    paddingHorizontal: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'silver',
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 15,
    marginBottom: 30,
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
  blockMessage: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingLeft: '20%',
    paddingRight: 12,
    marginVertical: 7,
  },
  blockMessageIncome: {
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: '20%',
    marginVertical: 7,
  },
  messages: {
    ...gothamBook,
    fontSize: 17,
  },
  time: {
    ...gothamBook,
    fontSize: 12,
    textAlign: 'right',
    color: '#79898A',
  },
  timeIncome: {
    ...gothamBook,
    fontSize: 12,
    color: '#79898A',
  },
  messageMy: {
    backgroundColor: '#E6F0FF',
    paddingVertical: 12,
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderRadius: 5,
  },
  senderName: {
    ...gothamBold,
    fontSize: 15,
  },
});
