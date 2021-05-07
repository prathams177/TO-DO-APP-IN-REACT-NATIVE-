import React , {Component, useState} from 'react';
import {View , Text, StyleSheet , Keyboard, FontVariant,KeyboardAvoidingView,TextInput, Alert,TouchableOpacity, Button} from 'react-native';

const Test= (props)=>{

    
   
    return(
        <>
        
        
            <View style={styles.maincontainer}>
                <View style={styles.leftitems}>
                    <TouchableOpacity style={styles.square}></TouchableOpacity>

                    <Text style ={styles.tasks}>{props.text}</Text>
                
                </View>
                
            </View>
        
        </>
    );
}

export default Test;

const styles =StyleSheet.create({
    leftitems:{
        flexDirection:'row',

        alignItems:'center',
    
    },
    maincontainer:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:15,
        marginBottom:16,
        flexDirection:'row',
        
        justifyContent:'space-between',
        alignItems:'center',
 },
    square:{
        
        width:15,
        height:15,
        backgroundColor:'#61DAFB',
        
    },
    tasks:{
        paddingLeft:10,
        maxWidth:277,
        overflow:'hidden'
       },

       writewrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        position:'absolute',
        left:10,
        right:10,
        
    },
    inputfield:{    
    backgroundColor:'#61DAFB',
    borderRadius:20,
    width:260,
    height:37,
    marginBottom:14,
    fontSize:16,
    paddingLeft:15,
    textAlign:'left',
    marginLeft:12,
        

    },
    addwrapper:{
        width:40,
        height:40,
        alignItems:'center',
        borderRadius:36,
        marginRight:20,
       backgroundColor:'#86B300',
        
    },
    addtext:{
        fontSize:32,
    },

    del:{
    position:'absolute',
    }

});
