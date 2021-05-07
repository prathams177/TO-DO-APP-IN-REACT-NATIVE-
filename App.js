import React ,{Component, useState} from 'react';
import {View,Text,TextInput,KeyboardAvoidingView,Platform,StyleSheet,Button,TouchableOpacity,Keyboard, ScrollView, Alert} from 'react-native';
import Test from './components/Test';


export default function App (){
  
  const [text  ,setText] = useState('');

  const [textarray , setTextarray]= useState([]);
  
  const inputhandle=()=>{
    Keyboard.dismiss();
    setTextarray([...textarray , text]);
    console.log(textarray);
    
    setText(null);
  };

  const alltask=(index)=>{
    let itemscopy =[...textarray];
    itemscopy.splice(index , 1);
    setTextarray(itemscopy);

  }

  return(

    <>
       <View style={styles.container}>
    

      <Text style={styles.header}>todays task</Text>
      <View style={styles.compo}>
      
      <ScrollView>

      {textarray.map((value , index)=>{
        return (
     
        <TouchableOpacity  style={styles.delframe}key={index} >          
          <Test  text={value} />
          
          <View style={styles.del}>
            <Button 
              key={index+1}
              title='del'
              color='#841584'
              onPress={
                ()=>{alltask(index)}
               }
            />
          </View>

         </TouchableOpacity>
        )
      })}

        
      </ScrollView>

      </View>



              {/* input field area*/}

      <KeyboardAvoidingView style={styles.writewrapper} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      >

       
        <TextInput
          style={styles.inputfield}
          placeholder="write ur task"
          
          value={text}
          onChangeText={text=>setText(text)}
        />

        <TouchableOpacity >
          <View style={styles.addwrapper}>
            <Text style={styles.addtext} onPress={()=>inputhandle()}>+</Text>
          </View>

        </TouchableOpacity>

      </KeyboardAvoidingView>
 
    </View>
    

      
    </>
  );
  
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#5C5C5C',
    flex:1,
    
},
  header:{
    fontWeight:'bold',
    paddingTop:60,
    fontSize:30,
    paddingLeft:15,
    color:'white',
    marginBottom:16

  },

  compo:{
    flex:8,
  },

  inputlayout:{
    backgroundColor:'#5C5C5C',
    
  },

  scrol:{
    backgroundColor:'#5C5C5C',
    
  },

  writewrapper:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    
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
  width:50,
  height:50,
  position:'absolute',
  marginLeft:334,
  marginTop:7

},
delframe:{
  
    justifyContent:'space-around'
},

start:{
    flex:1,
    justifyContent:'center',
},
 
});
