import { StyleSheet } from 'react-native';
import {colors} from '../../constants/colors'

export default StyleSheet.create({
  header:{
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
  },
  elementContainer: {
    paddingVertical: 10,
    marginRight:15,
    flexDirection: 'row',
    alignItems: 'center',

  },
  elementDivider: {
    marginHorizontal: 10,
  },
  elementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'silver',
  },
  elementTitle: {
    flex: 1,
    marginLeft: 10,

  },
});
