import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';

import { gothamBook, gothamBold } from '../../../constants/fonts';

export default StyleSheet.create({
  SignUpText: {
    ...gothamBook,
    fontSize: 24,
    marginLeft: 30,
    marginTop: 43,
    textAlign: 'left',
  },
  forgot: {
    fontSize: 17,
    color: colors.HEADER,
  },
  title: {
    ...gothamBold,
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  OrUseText: {
    ...gothamBook,
    fontSize: 14,
    lineHeight: 24,
    marginVertical: 25,
    textAlign: 'center',
  },
  checkBox: {
    paddingHorizontal: 0,
    marginHorizontal: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  textOfTerms: {
    ...gothamBook,
    fontSize: 15,
    lineHeight: 26,
    fontWeight: '100',
  },
  btnSignUp: {
    height: 50,
    marginVertical: 35,
    marginHorizontal: 30,
    backgroundColor: colors.HEADER_BUTTON,
  },
  textLink: {
    ...gothamBook,
    fontSize: 15,
    lineHeight: 26,
    fontWeight: '100',
    color: colors.HEADER,
  },

  btnSocialView: {
    flexDirection: 'row',
    paddingHorizontal: 19,
  },
  btnSocial: {
    borderRadius: 30,
  },
  btnSocialContainer: {
    marginTop: 5,
    flex: 1,
    width: 40,
    height: 44,
    paddingHorizontal: 10,
  },
  bottomView: {
    marginBottom: 40,
  },
});
