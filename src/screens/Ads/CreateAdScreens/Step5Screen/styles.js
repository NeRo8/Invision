import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(237, 237, 237)',
  },
  containerBlock: {
    flex: 1,
    backgroundColor: 'rgb(237, 237, 237)',
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 15,
    lineHeight: 25,
    color: colors.HEADER,
    marginTop: 33,
  },
  card: {
    height: 116,
    borderRadius: 5,
    marginVertical: 7,
    overflow: 'hidden',
  },
  hint: {
    fontSize: 13,
    lineHeight: 26,
    color: colors.HINT,
  },
  cardText: {
    fontSize: 17,
    color: 'white',
    marginTop: 25,
  },
  btnTitle: {
    fontSize: 15,
    color: 'white',
  },
  btnStyles: {
    backgroundColor: colors.HEADER,
    height: 55,
    borderRadius: 0,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  smallTextCard: { color: 'white', fontSize: 15 },
  smallTextCardBold: {
    color: 'white',
    fontSize: 15,
    marginRight: 25,
  },
  iconSpeakerContainer: {
    width: 35,
    height: 35,
    borderRadius: 17,
    backgroundColor: '#08A375',
    marginTop: 20,
    marginLeft: 25,
  },
  iconContainer: {
    flex: 1,
    width: null,
    height: null,
  },
});
