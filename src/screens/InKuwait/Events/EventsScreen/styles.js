import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  btnLContainer: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    width: 50,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'white',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  icon: {
    width: 35,
    height: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  headerPicker: {
    height: 40,
    width: '100%',
    marginVertical: 15,
  },
});
