import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default StyleSheet.create({
  wraperView: {
    minHeight: '100%',
    marginHorizontal: 15,
    marginTop: 15,
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
    backgroundColor: 'red',
    height: '50%',
    marginHorizontal: 32,
    borderRadius: 2,
  },
  modalBody: {
    backgroundColor: 'red',
    height: '50%',
    marginHorizontal: 15,
    borderRadius: 2,
  },
  buttonSend: {
    backgroundColor: colors.HEADER,
  },
  Choose: {
    fontSize: 13,
    lineHeight: 20,
    color: colors.TITLE,
  },
  radioTitle: {
    fontSize: 17,
    lineHeight: 27,
    color: colors.TITLE,
  },
});
