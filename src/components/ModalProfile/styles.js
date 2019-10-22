import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

export default StyleSheet.create({
  containerModal: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.7)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  header: {
    height: 300,
    backgroundColor: 'white',
    width: '95%',
  },
  imgBackground: {
    width: null,
    height: null,
    flex: 1,
  },
  imgBackgroundTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  imgBackText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  blockAction: {
    flex: 1,
    justifyContent: 'space-between',
  },
  blockHeader: {
    fontWeight: 'bold',
    marginHorizontal: 30,
    marginTop: 15,
  },
  iconBtnLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: colors.HEADER,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  btnStyle: {
    borderRadius: 0,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'silver',
    height: 50,
    justifyContent: 'flex-start',
  },
  blockStatus: {
    height: 50,
    width: '95%',
    backgroundColor: 'white',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnDoneStyle: {
    backgroundColor: colors.HEADER,
    height: 50,
    borderRadius: 0,
  },
});