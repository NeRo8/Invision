import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants';
import { gothamBook, gothamBold } from '../../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  selectBlock: {
    height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  selectBlockActive: {
    height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.HEADER,
  },
  textActive: {
    color: 'white',
    fontSize: 13,
  },
  textUnactive: {
    color: 'black',
    fontSize: 13,
  },
  headerBlock: {
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  questionBlock: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  elementFL: {
    height: 78,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
  roundView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'silver',
  },
  roundText: {
    ...gothamBook,
    fontSize: 13,
    color: colors.HEADER,
  },
  textElement: {
    ...gothamBook,
    fontSize: 15,
    lineHeight: 26,
  },
  iconAddContainer: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
