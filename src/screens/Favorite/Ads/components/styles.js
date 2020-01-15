import { StyleSheet } from 'react-native';

import { globalStyles, colors } from '../../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 5,
    height: 234,
  },
  headerBlock: {
    flex: 1,
  },
  bottomBlock: {
    flex: 1,
    paddingHorizontal: '9%',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  heartContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  title: {
    ...globalStyles.gothamMediumRegular,
    fontSize: 13,
  },
  price: {
    ...globalStyles.gothamBook,
    fontSize: 13,
    color: colors.LINK_TEXT,
  },
  description: {
    ...globalStyles.gothamBook,
    fontSize: 13,
    color: '#6B6F81',
  },
});
