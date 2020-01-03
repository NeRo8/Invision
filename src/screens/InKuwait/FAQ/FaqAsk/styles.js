import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants';
import { gothamBold, gothamBook } from '../../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.BACKGROUND,
  },
  headerTextTitle: {
    ...gothamBold,
    fontSize: 15,
    color: colors.HEADER,
    marginVertical: 15,
  },
  element: {
    backgroundColor: 'white',
    height: 50,
    marginHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',

    marginVertical: 10,
  },
  modalHeader: {
    height: 50,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    backgroundColor: colors.HEADER,
  },
  textBlock: {
    ...gothamBold,
    fontSize: 12,
    marginVertical: 5,
  },

  multilineInputContainer: {
    height: 140,
    backgroundColor: 'white',
    borderRadius: 5,
    borderBottomWidth: 0,
    paddingHorizontal: 15,
  },
  inputContainer: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
    marginTop: 15,
  },
  input: {
    ...gothamBook,
    fontSize: 17,
    lineHeight: 26,
    textAlignVertical: 'top',
    width: '100%',
    height: '100%',
  },
  text: {
    ...gothamBook,
    fontSize: 17,
    color: colors.LABEL_GREY_COLOR,
  },

  blockPicker: {
    height: 50,
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  divider: {
    height: 1,
    backgroundColor: 'silver',
    marginVertical: 25,
  },
  btnStyle: {
    height: 50,
    backgroundColor: colors.HEADER,
  },
});
