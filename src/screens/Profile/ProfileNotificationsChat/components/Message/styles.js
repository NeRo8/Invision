import { StyleSheet } from 'react-native';

import { gothamBold, gothamBook } from '../../../../../constants/fonts';

export default StyleSheet.create({
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
  messageMy: {
    backgroundColor: '#E6F0FF',
    paddingVertical: 12,
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderRadius: 5,
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

  senderName: {
    ...gothamBold,
    fontSize: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'silver',
  },
});
