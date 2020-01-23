import { StyleSheet } from 'react-native';

import { gothamBold, gothamBook } from '../../../constants/fonts';
import { colors } from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
  },
  btnTitle: {
    ...gothamBold,
    color: colors.HEADER,
    fontSize: 17,
    lineHeight: 23,
  },
  btnStyle: {
    backgroundColor: 'white',
    height: 50,
  },
  headerText: {
    ...gothamBold,
    marginVertical: 20,
  },
  bodyContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  socialIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  divider: {
    backgroundColor: colors.DIVIDER,
    height: 1,
  },
  titleText: {
    ...gothamBook,
    fontSize: 22,
    color: 'white',
    marginLeft: 20,
    marginBottom: 20,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
});
