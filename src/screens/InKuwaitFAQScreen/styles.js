import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

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
    fontWeight: 'bold',
  },
  textUnactive: {
    color: 'black',
    fontWeight: 'bold',
  },
  headerBlock: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  questionBlock: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  elementFL: {
    marginVertical: 10,
    height: 70,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
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
});
