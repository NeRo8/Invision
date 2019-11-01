import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/colors';

export default StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 40 : 30,
    zIndex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    lineHeight: 30,
  },

  titleView: {
    marginTop: 25,
  },

  description: {
    fontSize: 15,
    lineHeight: 27,
    fontWeight: '300',
    textAlign: 'justify',
  },
  descriptionView: {
    marginTop: 20,
    backgroundColor: 'rgba(255,255,265, 0.3)',
  },
  icons: {},
  rightBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wraperView: {
    marginHorizontal: 15,
  },
  block: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexBasis: '48%',
    backgroundColor: 'white',
    height: 55,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  blockText: {
    fontSize: 15,
    lineHeight: 26,
  },
  blockBottomText: {
    fontSize: 17,
    lineHeight: 26,
    fontWeight: '300',
    color: colors.LABEL_GREY_COLOR,
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  buttonSend: {
    backgroundColor: colors.HEADER,
    height: 50,
    marginVertical: 15,
  },
});
