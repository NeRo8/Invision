import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default StyleSheet.create({
  title: {
    fontSize: 22,
    lineHeight: 30,
  },
  price: {
    color: colors.HEADER,
    fontSize: 17,
    lineHeight: 26,
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
    lineHeight: 20,
  },
  description: {
    marginTop: 25,
    fontSize: 17,
    lineHeight: 28,
    fontWeight: '300',
    textAlign: 'justify',
    color: colors.TITLE,
  },
  elementContainer: {
    marginVertical: 15,
  },
  elementIcon: {},
  userName: {
    fontSize: 13,
    lineHeight: 20,
  },

  raiting: {
    height: 1,
  },
  date: {
    fontSize: 12,
    color: '#6B6F81',
    flex: 1,
  },
  coment: {
    fontSize: 15,
    lineHeight: 28,
    fontWeight: '300',
    textAlign: 'justify',
    color: colors.TITLE,
  },
  titleRear: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.HEADER,
  },
  titleWrite: {
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
  },

  btnStyleRear: {
    height: 50,
    borderRadius: 2,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.HEADER,
    marginBottom: 10,
  },
  btnStyleWrite: {
    height: 50,
    borderRadius: 2,
    backgroundColor: colors.HEADER,
    borderWidth: 1,
  },
  flatListView: {
    width: '100%',
  },
});
