import { StyleSheet, Dimensions } from 'react-native';

import { colors, globalStyles } from '../../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(237, 237, 237)',
    paddingHorizontal: 15,
  },
  headerTitle: {
    ...globalStyles.gothamBold,
    fontSize: 15,
    lineHeight: 25,
    color: colors.HEADER,
    marginTop: 33,
  },
  underTitle: {
    ...globalStyles.gothamBold,
    fontSize: 12,
    lineHeight: 25,
    marginTop: 26,
  },

  element: {
    height: 150,
    width: Dimensions.get('window').width / 2 - 20,
    backgroundColor: 'white',
    margin: 5,
  },
  iconCamera: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#34465F',
    bottom: 75,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitle: {
    ...globalStyles.gothamBold,
    fontSize: 15,
    color: 'white',
  },
  btnStyles: {
    backgroundColor: colors.HEADER,
    height: 55,
    borderRadius: 0,
  },
});
