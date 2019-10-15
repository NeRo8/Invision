import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  elementContainer: {
    //backgroundColor: 'red',
    width: '100%',
    height: 100,
    marginVertical: 10,
  },
  element: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  titleElement: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roundView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundText: {
    fontWeight: 'bold',
    color: colors.HEADER,
  },
});
