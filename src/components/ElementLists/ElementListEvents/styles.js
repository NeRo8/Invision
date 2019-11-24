import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 207,
    backgroundColor: 'white',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  fullFlex: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  star: {
    marginRight: 3,
  },
  titleText: {
    fontSize: 13,
    lineHeight: 24,
    marginVertical: 5,
    color: '#2C3440',
  },
  ratingText: {
    marginHorizontal: 3,
    fontSize: 12,
    lineHeight: 18,
  },
  heart: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  dateText: {
    fontSize: 13,
    color: '#6B6F81',
    lineHeight: 24,
    marginVertical: 10,
  },
  textGrayscale: {
    position: 'absolute',
    zIndex: 1,
    top: '35%',
    left: '25%',
    fontSize: 30,
    color: 'rgba(255,255,255, 0.4)',
  },
});
