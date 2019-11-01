import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default StyleSheet.create({
  itemContainer: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },

  tagStyle: {
    flex: 1,
    fontSize: 17,
    color: colors.TITLE,
  },
  bottomItems: {
    flex: 1,
    fontSize: 15,
    color: colors.LABEL_GREY_COLOR,
  },
  elementTitlePrice: {
    flex: 1,
    fontSize: 17,
    color: colors.TITLE,
    textAlign: 'right',
  },
  elementTitleDate: {
    flex: 1,
    fontSize: 12,
    color: colors.GREY_TITILE_COLOR,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    paddingTop: 10,
  },
});
