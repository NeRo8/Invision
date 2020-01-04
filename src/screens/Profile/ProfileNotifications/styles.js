import { StyleSheet, Dimensions } from 'react-native';

import { colors, globalStyles } from '../../../constants';
import {
  gothamBook,
  gothamMediumRegular,
  muliRegular,
} from '../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    paddingHorizontal: 15,
  },
  selectedContainer: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  selectedElementActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.HEADER,
    height: 40,
  },
  selectedTextElementActive: {
    fontFamily: globalStyles.gothamBold.fontFamily,
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
  },
  selectedTextElement: {
    fontFamily: globalStyles.gothamBook.fontFamily,
    fontSize: 15,
    lineHeight: 24,
  },
  selectedElement: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 40,
  },
  containerSwipe: {
    flexGrow: 1,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    marginRight: 10,
  },
  name: {
    ...gothamBook,
    marginBottom: 8,
    color: 'black',
    fontSize: 17,
  },
  message: {
    ...gothamBook,
    color: colors.LABEL_GREY_COLOR,
    fontSize: 15,
  },
  when: {
    ...muliRegular,
    textAlign: 'left',
    color: colors.LABEL_GREY_COLOR,
    fontSize: 13,
  },

  rowFront: {
    //width: Dimensions.get('window').width,
    backgroundColor: 'white',
    height: 70,
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },

  rowBack: {
    //backgroundColor: 'red',
    height: 70,

    marginVertical: 5,
    alignItems: 'flex-end',
  },

  iconContainer: {
    width: 70,
    height: 70,
    backgroundColor: colors.RED_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
