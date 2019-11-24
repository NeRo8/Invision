import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    margin: 5,
  },
  pictureBlock: {
    flex: 1,
  },
  picture: {
    flex: 1,
    height: null,
    width: null,
  },
  title: {
    marginTop: 10,
    fontSize: 13,
    lineHeight: 24,
    fontWeight: '300',
  },
  rating: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '300',
  },
  date: {
    marginTop: 8,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
