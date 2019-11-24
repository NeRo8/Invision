import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.CHAT_BACKGROUND,
  },
  list: {
    paddingHorizontal: 12,
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 10,
    padding: 5,
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
    height: 50,
    marginLeft: 20,
    flex: 1,
    fontSize: 17,
  },
  itemIn: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  itemMe: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  time: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: colors.CHAT_DATE_COLOR,
    marginTop: 6,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: colors.CHAT_BACKGROUND_MESSAGE,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
  },
  date: {
    color: colors.CHAT_DATE,
    borderColor: colors.CHAT_DATE_BORDER_COLOR,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 15,
    paddingLeft: 21,
    paddingRight: 21,
    paddingTop: 7,
    paddingBottom: 7,
    marginBottom: 25,
    marginTop: 15,
  },
  itemInName: {
    flexDirection: 'row',
    backgroundColor: colors.CHAT_BACKGROUND_IN,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
  },
  messageIn: {
    flexDirection: 'row',
    backgroundColor: colors.CHAT_BACKGROUND_IN,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
  },
  messageMe: {
    color: colors.CHAT_MESSAGES_COLOR,
    fontSize: 17,
  },
  messageInTitle: {
    color: colors.CHAT_NAME_COLOR,
    fontSize: 15,
  },
});
