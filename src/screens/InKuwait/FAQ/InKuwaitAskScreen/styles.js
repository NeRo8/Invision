import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/colors';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.BACKGROUND,
  },
  headerTextTitle: {
    fontSize: 15,
    color: colors.HEADER,
    marginVertical: 15,
  },
  textBlock: {
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
    fontSize: 17,
    lineHeight: 26,
    textAlignVertical: 'top',
    width: '100%',
    height: '100%',
  },
  text: {
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
