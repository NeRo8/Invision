import { StyleSheet } from 'react-native';

import { gothamMediumRegular, gothamBook } from '../../../../constants/fonts';

export default StyleSheet.create({
  containerElement: {
    padding: 15,
  },
  author: {
    ...gothamMediumRegular,
    fontSize: 17,
    lineHeight: 26,
  },
  time: {
    ...gothamBook,
    marginLeft: 10,
    fontSize: 15,
    lineHeight: 26,
  },
  answer: {
    ...gothamBook,
    fontSize: 15,
    lineHeight: 26,
    textAlign: 'justify',
    marginBottom: 20,
    marginTop: 10,
  },
  rowBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  btnStyleReport: {
    backgroundColor: 'rgba(240, 91, 136, 0.3)',
    height: 44,
  },
  btnStyleReply: {
    backgroundColor: 'rgba(10,104,239,0.3)',
    height: 44,
  },
  btnContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 3,
  },
  btnTitleReport: {
    ...gothamBook,
    color: '#F05B88',
    fontSize: 13,
  },
  btnTitleReply: {
    ...gothamBook,
    color: '#0A68EF',
    fontSize: 13,
  },
  divider: {
    height: 0.5,
    backgroundColor: 'silver',
    marginVertical: 15,
    marginHorizontal: 15,
  },
});
