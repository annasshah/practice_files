import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import dataArr from './dataArray';


const App = () => {
  const [signupData, setSignupData] = useState({})

  const [productsData, setProductsData] = useState([{id: 1,name:'muzammil',from:'karachi'},
  {id: 2,name:'muzam',from:'Islamabad'},
  {id: 3,name:'ammil',from:'Lahore'},
  {id: 4,name:'mmil',from:'Multan'}])
  

  function signup() {

    auth()
  .createUserWithEmailAndPassword(signupData.email, signupData.password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  }


  let filterData = () =>{

    let filteredData  = dataArr.filter((e)=>e.id === 1)
    console.log(filteredData)
    
  }


  useEffect(() => {

    setProductsData([...dataArr])    

    // console.log(productsData)

  }, [])



  return (
    <View style={{paddingHorizontal:5}}>
      <View>
      <Text style={{textAlign:'center',fontSize:25,marginVertical:25,fontWeight:'bold',color:'black'}}>SignUp Page</Text>
      </View>

      <View>
        <View><TextInput style={{borderWidth:1,paddingHorizontal:15,paddingVertical:10,marginVertical:3}} placeholder='Enter User email' keyboardType='email-address'

         onChangeText={(e)=>setSignupData({...signupData,email:e})} 
         
        /></View>
        <View><TextInput style={{borderWidth:1,paddingHorizontal:15,paddingVertical:10,marginVertical:3}} placeholder='Enter User password' secureTextEntry onChangeText={(e)=>setSignupData({...signupData,password:e})} /></View>

        <View >
          <TouchableOpacity onPress={filterData}  style={{backgroundColor:'blue',paddingVertical:10,paddingHorizontal:50,
        marginVertical:10,width:'100%'}}  ><Text  style={{color:'white',textAlign:'center'}}>Signup</Text></TouchableOpacity>
        </View>
        {/* <View >
          <TouchableOpacity onPress={()=>signup()}  style={{backgroundColor:'blue',paddingVertical:10,paddingHorizontal:50,
        marginVertical:10,width:'100%'}}  ><Text  style={{color:'white',textAlign:'center'}}>Signup</Text></TouchableOpacity>
        </View> */}
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})

