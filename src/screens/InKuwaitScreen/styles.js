import { StyleSheet } from 'react-native';

import globalStyles from '../../constants/globalStyles';
import { colors } from '../../constants/colors';

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
    marginVertical: 15,
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
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundText: {
    fontFamily: globalStyles.gothamBold.fontFamily,
    color: colors.HEADER,
  },
});
