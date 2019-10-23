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
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  OrUseText: {
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 24,
    textAlign: 'center',
  },
  btnSignUp: {
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
    flex: 1,
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
