import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants';
import { gothamBold, gothamBook } from '../../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: colors.BACKGROUND,
  },
  containerRow: {
    flexDirection: 'row',
  },
  textHeader: {
    ...gothamBold,
    fontSize: 12,
    lineHeight: 20,
    marginVertical: 15,
  },
  activeBlock: {
    height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.HEADER,
  },
  unactiveBlock: {
    height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: colors.BORDER_COLOR,
  },
  activeText: {
    fontSize: 13,
    lineHeight: 24,
    color: 'white',
  },
  unactiveText: {
    fontSize: 13,
    lineHeight: 24,
  },
  elementContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textElement: {
    ...gothamBook,
    flex: 1,
    fontSize: 17,
  },
  textCount: {
    ...gothamBook,
    fontSize: 15,
  },
  btnTitle: {
    ...gothamBold,
    color: 'white',
    fontSize: 15,
  },
  btnStyle: {
    marginVertical: 15,
    height: 50,
    backgroundColor: colors.HEADER,
  },
  btnContainer: {},
  inputContainer: {
    height: 50,
    backgroundColor: 'white',
    borderBottomWidth: 0,
  },
  inputStyle: {
    fontSize: 17,
    color: colors.LABEL_GREY_COLOR,
  },
});
