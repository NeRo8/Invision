import { StyleSheet } from 'react-native';
import { colors } from '../../constants';
import {
  gothamBook,
  gothamMediumRegular,
  gothamBold,
} from '../../constants/fonts';

export default StyleSheet.create({
  modalBody: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 2,
  },
  buttonSend: {
    backgroundColor: colors.HEADER,
    height: 50,
    marginVertical: 25,
  },
  choose: {
    ...gothamBook,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 13,
    lineHeight: 20,
    color: colors.TITLE,
  },
  radioTitle: {
    ...gothamBook,
    fontSize: 17,
    lineHeight: 27,
    color: colors.TITLE,
    fontWeight: '300',
  },
  checkBox: {
    marginLeft: 0,
    paddingLeft: 0,
    marginRight: 0,
    paddingRight: 0,
    height: 55,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  checkBoxWraper: {
    width: '100%',
    justifyContent: 'space-between',
  },
  closeView: {
    width: '100%',
    alignItems: 'flex-end',
  },
  modalWraper: {
    marginHorizontal: 32,
  },
  whatHapp: {
    ...gothamMediumRegular,
    fontSize: 20,
  },
  buttonContainer: {
    marginVertical: 25,
  },
});
