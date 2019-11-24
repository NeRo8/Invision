import { StyleSheet } from 'react-native';

import { colors, globalStyles } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerTitle: {
    fontFamily: globalStyles.gothamBold.fontFamily,
    fontSize: 12,
    marginVertical: 10,
  },
  elementContainer: {
    //backgroundColor: 'red',

    width: '100%',
    height: 130,
    marginVertical: 5,
  },
  element: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  titleElement: {
    fontFamily: globalStyles.gothamBold.fontFamily,
    fontSize: 17,
  },
  roundView: {
    width: 75,
    height: 75,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundText: {
    fontFamily: globalStyles.gothamBold.fontFamily,
    color: colors.HEADER,
    fontSize: 13,
  },
  containerBody: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
