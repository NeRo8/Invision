import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  SignInText: {
    fontSize: 24,
    fontFamily: 'GothamBook',
    marginLeft: 30,
    marginTop: 43,
    textAlign: 'left',
  },
  Input: {
    fontSize: 17,
    fontFamily: 'GothamBook',
    marginTop: 45,
    textAlign: 'left',
  },

  title: {
    fontSize: 15,
    fontFamily: 'GothamBook',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  OrUseText: {
    fontSize: 14,
    fontFamily: 'GothamBook',
    fontWeight: '300',
    lineHeight: 24,
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
    flex: 1,
    borderRadius: 30,
  },
  btnSocialContainer: {
    flex: 1,
    height: 44,
    paddingHorizontal: 11,
  },
  bottomView: {
    marginTop: 35,
  },
});
