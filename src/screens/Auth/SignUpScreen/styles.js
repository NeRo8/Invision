import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default StyleSheet.create({
  SignUpText: {
    fontSize: 24,
    marginLeft: 30,
    marginTop: 43,
    textAlign: 'left',
  },
  Input: {
    fontSize: 17,
    marginTop: 20,
    textAlign: 'left',
  },
  forgot: {
    fontSize: 17,
    color: colors.HEADER,
  },
  title: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  OrUseText: {
    fontSize: 14,
    lineHeight: 24,
    marginVertical: 25,
    textAlign: 'center',
  },
  textOfTerms: {
    fontSize: 15,
    lineHeight: 26,
    fontWeight: '100',
  },
  btnSignUp: {
    height: 50,
    marginVertical: 35,
    marginHorizontal: 30,
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
