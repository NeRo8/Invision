import { StyleSheet } from 'react-native';

import { colors, globalStyles } from '../../../constants';

export default StyleSheet.create({
  itemContainer: {
    marginVertical: 5,
    marginHorizontal: 15,

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
    backgroundColor: colors.BACKGROUND,
    paddingRight: 15,
  },
  containerSwipe: {
    paddingLeft: 15,
    height: '90%',
  },

  standalone: {
    marginTop: 30,
    marginBottom: 30,
  },
  standaloneRowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    justifyContent: 'center',
    height: 50,
  },
  standaloneRowBack: {
    alignItems: 'center',
    backgroundColor: '#8BC645',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 70,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 3,
  },
  name: {
    marginBottom: 8,
    color: 'black',
    fontSize: 17,
  },
  message: {
    color: colors.LABEL_GREY_COLOR,
    fontSize: 15,
  },
  when: {
    flex: 1,
    textAlign: 'right',
    marginBottom: 22,
    color: colors.LABEL_GREY_COLOR,
    fontSize: 13,
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
  selectedContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 15,
    paddingLeft: 15,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: colors.RED_COLOR,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginLeft: 20,
    borderRadius: 3,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  controls: {
    alignItems: 'center',
    marginBottom: 30,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  switch: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
  },
  trash: {
    height: 25,
    width: 25,
  },
  selectedElement: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 40,
  },
});
