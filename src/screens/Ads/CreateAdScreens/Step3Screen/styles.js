import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(237, 237, 237)',
  },
  headerTitle: {
    fontSize: 15,
    lineHeight: 25,
    color: colors.HEADER,
    marginTop: 33,
    paddingHorizontal: 15,
  },
  element: {
    height: 150,
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 15,
    color: 'white',
  },
  btnStyles: {
    backgroundColor: colors.HEADER,
    height: 55,
    borderRadius: 0,
  },
});
