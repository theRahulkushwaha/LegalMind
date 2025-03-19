import { StyleSheet } from 'react-native';

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020b1c',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  header: {
    height: '10%',
    width: '100%',
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  Profile: {
      backgroundColor: '#fff',
      height:'100%',
      width: '20%',
  },

  Options: {
    backgroundColor: '#fff',
      height:'100%',
      width: '20%',
  },
 

});

export default HomeStyle;
