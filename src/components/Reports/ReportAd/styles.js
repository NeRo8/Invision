import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';
import { gothamBook, gothamMediumRegular } from '../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    justifyContent: 'center',
  },
  modalBody: {
    backgroundColor: 'white',
    marginHorizontal: '4%',
  },
  modalContainer: {
    padding: '9%',
  },
  headerText: {
    ...gothamMediumRegular,
    fontSize: 20,
    marginBottom: 10,
  },
  underHeaderText: {
    ...gothamBook,
    fontSize: 13,
    marginVertical: 15,
  },
  titleStyle: {
    ...gothamBook,
    fontSize: 17,
    fontWeight: 'normal',
    marginLeft: 0,
    marginRight: 0,
  },
  wrapperStyle: {
    justifyContent: 'space-between',
  },
  containerStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    paddingHorizontal: 0,
    marginHorizontal: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  iconClose: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
});
