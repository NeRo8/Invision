import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default StyleSheet.create({
  SignInText: {
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
    fontSize: 15,
    color: 'white',
  },
  OrUseText: {
    fontSize: 14,
    textAlign: 'center',
  },
  btnSignIn: {
    height: 50,
    marginVertical: 35,
    marginHorizontal: 30,
  },

  btnSocialView: {
    flexDirection: 'row',
    paddingHorizontal: 19,
    paddingTop: 35,
  },
  btnSocial: {
    borderRadius: 30,
  },
  btnSocialContainer: {
    flex: 1,
    height: 44,
    paddingHorizontal: 11,
  },
  bottomView: {
    justifyContent: 'space-between',
    marginBottom: 40,
  },
});
