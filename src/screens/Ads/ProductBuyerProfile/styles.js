import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../../constants/colors';

export default StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  wraperView: {
    minHeight: '100%',
    marginHorizontal: 15,
    marginTop: 15,
  },
  closeView: {
    width: '100%',
    alignItems: 'flex-end',
  },
  userName: {
    fontSize: 20,
    lineHeight: 30,
    color: 'black',
  },
  WhatHapp: {
    fontSize: 20,
    lineHeight: 26,
    color: colors.TITLE,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
  blockEmail: {
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 55,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  blockText: {
    fontSize: 15,
    lineHeight: 26,
  },
  myAdsView: {
    marginTop: 25,
  },
  flatListView: {
    marginTop: 10,
  },
  modalWraper: {
    marginHorizontal: 32,
  },
  modalBody: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 2,
  },
  buttonSend: {
    backgroundColor: colors.HEADER,
    height: 50,
    marginVertical: 25,
  },
  Choose: {
    marginTop: 15,
    fontSize: 13,
    lineHeight: 20,
    color: colors.TITLE,
  },
  radioTitle: {
    marginLeft: 0,
    paddingLeft: 0,
    marginRight: 0,
    paddingRight: 0,
    fontSize: 17,
    lineHeight: 27,
    color: colors.TITLE,
    fontWeight: '300',
  },
  checkBox: {
    marginLeft: 0,
    paddingLeft: 0,
    marginRight: 0,
    paddingRight: 0,
    height: 55,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  checkBoxWraper: {
    width: '100%',
    justifyContent: 'space-between',
  },
});
