import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default StyleSheet.create({
  header: {
    backgroundColor: 'grey',
  },
  container: {
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 40 : 30,
    zIndex: 1,
    alignItems: 'center',
  },
  description: {
    fontSize: 15,
    lineHeight: 27,
    fontWeight: '300',
    textAlign: 'justify',
  },
  descriptionView: {
    marginTop: 20,
  },
  icons: {},
  rightBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wraperView: {
    backgroundColor: 'red',
    marginHorizontal: 15,
    marginTop: 15,
  },
  block: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexBasis: '48%',
    backgroundColor: 'white',
    height: 55,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomImageView: {
    marginTop: 30,
    width: '100%',
  },
  bottomImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  blockText: {
    fontSize: 15,
    lineHeight: 26,
  },
});
