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
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',

  },

  Profile: {
      height:'90%',
      width: '15%',
      padding: 5,
      margin: 5,
      marginLeft: 15,
  },

  Options: {
      height:'80%',
      width: '20%',
      padding:20,
      margin: 5,


  },

  chat: {
    // backgroundColor: 'red',
    height: '20%',
    width: '100%',
    margin: 10,
    padding: 10,
    // alignItems: 'center',
    justifyContent: 'center',
  },

  chatText: {
    color: 'white',
    margin : 10,
    fontSize: 18,
  },

  chatInput: {
    backgroundColor: 'white',
    width: '98%',
    height: '50%',
    borderRadius: 10,
    margin: 10,
  },

  OurServicesContainer:{
    height: '25%',
    width: '100%',
    padding: 10,
    // backgroundColor: 'blue',
  },
  OurServicesText: {  
    color: 'white',
    margin: 10,
    fontSize: 18,
  },

  OurServices: {
    // backgroundColor: 'green',
    height: '100%',
    width: '100%',
    padding: 2,
  },

  OurServicesBox: {
    height: '95%',
    width: 110,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
  },

  RecentDocContainer:{
    // backgroundColor: 'red',
    height: '45%',
    width: '100%',
    padding: 10,
  },

  RecentDocText:{
    color: 'white',
    margin: 10,
    fontSize: 18,
  },

  RecentDoc:{
    height: '100%',
    width: '100%',
    padding: 2,
    // backgroundColor: 'green',
  },

  RecentDocBox:{
    height: '40%',
    width: 110,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5
  },


 

});

export default HomeStyle;
