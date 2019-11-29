import { StyleSheet } from 'react-native';

import { colors, globalStyles } from '../../constants';

import { gothamBold } from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 15,
  },
  headerTitle: {
    ...gothamBold,
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
    ...gothamBold,
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
    ...gothamBold,
    color: colors.HEADER,
    fontSize: 13,
  },
  containerBody: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
