import { StyleSheet } from "react-native";

export const style= StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor:'black',
    },
    calculatorContainer:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20
    },
    result:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        
    },
    resultTiny:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right'
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10,
    },
    button:{
        height:80,
        width:80,
        // backgroundColor:"#333333",
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10
    },
    textButton:{
        textAlign:'center',
        // color:'white',
        fontSize:30,
        padding:10,
        fontWeight:'300'
    },
})