import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/colors';

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
    marginVertical: 10,
    height: 78,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
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
    fontSize: 13,
    color: colors.HEADER,
  },
  textElement: {
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
