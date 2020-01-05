import { StyleSheet } from 'react-native';

import { colors, globalStyles } from '../../constants';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 30,
  },
  btnContainer: {
    width: '70%',
    marginVertical: 10,
  },
  titleEmail: {
    ...globalStyles.gothamBold,
    color: colors.HEADER,
    fontSize: 16,
  },
  btnStyleEmail: {
    height: 60,
    borderRadius: 2,
    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: colors.HEADER,
  },
  logo: {
    marginTop: 60,
    borderRadius: 20,
  },
  logoText: {
    ...globalStyles.gothamBook,
    marginTop: 40,
    fontSize: 30,
    textAlign: 'center',
  },
  iconLogo: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
    marginTop: -15,
  },
  btnStyle: {
    height: 60,
    borderRadius: 2,
  },
  title: {
    ...globalStyles.gothamBold,
    flex: 5,
    fontSize: 15,
    color: 'white',
    textAlign: 'left',
  },
  blockBottom: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
