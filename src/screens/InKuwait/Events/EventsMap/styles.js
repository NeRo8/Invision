import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants';

export default StyleSheet.create({
  markerContainer: {
    alignItems: 'center',
  },
  markerIcon: { width: 30, height: 36 },
  markerTitle: { position: 'absolute', top: 5, color: 'white', fontSize: 13 },
  containerMapFL: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  elementCotainer: {
    width: 165,
    height: 146,
    margin: 10,
    backgroundColor: 'white',
    padding: 15,
    justifyContent: 'flex-end',
  },
  elementHeart: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  elementTitle: {
    color: 'white',
    fontSize: 13,
    lineHeight: 24,
    marginTop: 8,
  },
  elementUnderTitle: {
    fontSize: 13,
    color: 'white',
  },
  inputSearch: {
    height: 40,
    fontSize: 15,
    color: colors.LABEL_GREY_COLOR,
  },
  inputContainerStyle: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
  },
  containerInput: {
    position: 'absolute',
    top: 15,
    paddingHorizontal: 15,
  },
});
