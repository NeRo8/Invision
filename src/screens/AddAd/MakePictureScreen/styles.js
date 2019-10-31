import { StyleSheet, Platform } from 'react-native';

import { colors } from '../../../constants/colors';

export default StyleSheet.create({
  insideCircle: {
    backgroundColor: 'white',
    width: 55,
    height: 55,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: colors.CAMERA,
  },
  btnMakePhoto: {
    backgroundColor: 'white',
    height: 65,
    width: 65,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    backgroundColor: colors.CAMERA,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerConsole: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    zIndex: 10,
  },
  block: {
    borderWidth: 2,
    borderColor: 'white',
    height: 100,
    width: 100,
  },
  leftTopBlock: {
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  rightTopBlock: {
    borderBottomWidth: 0,
    borderLeftWidth: 0,
  },
  elementBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftBottomBlock: {
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  rightBottomBlock: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
  },
});
