import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    zIndex: 1,
  },
  headerBlock: {},
  icons: {
    paddingHorizontal: 12,
  },
  rightBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
