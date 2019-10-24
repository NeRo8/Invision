import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default StyleSheet.create({
  title: {
    fontSize: 22,
  },
  price: {
    color: colors.HEADER,
    fontSize: 17,
  },
  head: {
    marginHorizontal: 15,
    marginTop: 12,
  },
  properties: {
    marginTop: 12,
    flexDirection: 'row',
  },
  vd: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vdView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  tagsView: {
    marginTop: 23,
    alignItems: 'center',
    borderColor: colors.BORDER,
    flex: 1,
  },
  tagsText: {
    fontSize: 12,
  },
  description: {
    marginTop: 25,
    fontSize: 17,
    textAlign: 'justify',
  },
});
