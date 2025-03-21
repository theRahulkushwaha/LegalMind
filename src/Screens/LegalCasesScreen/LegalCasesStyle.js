import { StyleSheet } from "react-native";

const LegalCasesStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#020b1c',

    },

    boxWrap:{
        // backgroundColor:'red',
        height:'40%',
        width:'100%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'center',
        marginTop: '5%',
    },

    LegalBox: {
        // backgroundColor:'white',
        borderColor:'white',
        borderWidth: 2,
        borderRadius: 10,
        height:'45%',
        width:'26%',
        margin : 14,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems:'center',
        // padding: 25,
    
    },

    BoxImg:{
        height:'60%',
        width:'60%',
        
    },

    BoxText:{
        color:'white',
        fontSize: 12,
        margin:5
        
    },

})

export default LegalCasesStyle;