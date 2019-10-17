import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerProfile: {
    height: 150,
    width: '100%',
    alignItems: 'center',
  },
  headerProfileContainer: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 1,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'silver',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  iconUpdate: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
  },
  bold: {
    fontWeight: 'bold',
  },
  infoElement: {
    borderBottomWidth: 0.5,
    borderColor: 'silver',
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  selectedContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  selectedElement: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 40,
  },
  selectedTextElement: {},
  selectedElementActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.HEADER,
    height: 40,
  },
  selectedTextElementActive: {
    fontWeight: 'bold',
    color: 'white',
  },
  headerText: {
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
  },
  blockBody: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
});
