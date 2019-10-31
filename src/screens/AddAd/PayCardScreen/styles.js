import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  cardView: {
    borderStyle: 'dashed',
    borderWidth: 2,
    borderRadius: 1,
    height: 200,
    marginTop: 25,
    borderColor: colors.HEADER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.HEADER,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  textHint: {
    fontSize: 17,
    lineHeight: 25,
  },
});
