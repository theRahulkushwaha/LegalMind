import { StyleSheet } from "react-native";

const MyDocsStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#020b1c',
        justifyContent:'center',
        alignItems:'center',  
    },

    Border:{
        borderColor:'white',
        borderWidth:1, 
        height:'85%',
        width:'94%',
        borderRadius:10
    },

    scroll:{
        borderColor:'white',
        borderWidth:1, 
        height:'20%',
        width:'94%',
        borderRadius:10
    },

})

export default MyDocsStyle;