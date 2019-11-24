import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
    fontSize: 13,
    lineHeight: 24,
  },
  date: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
