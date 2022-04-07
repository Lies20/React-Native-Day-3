
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [password, Setpassword]=useState("");
  const [valueState, setValueState] = useState("");
  const [login, setLogin] = useState ("");

    const chekLogin= (event)=>{
      // const valueState = event.valueState
      if (valueState.length > 5){
        setLogin("login is not long")
        console.log("login is not long")
      } else {
        setLogin("login is good")
        console.log("login is good")
      }
      setValueState(valueState)
    }
    console.log(valueState)

    return (  
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder='Login' 
          defaultValue={valueState}
          onChangeText={newText =>setValueState(newText)}/>
     <TextInput style ={styles.input}
        placeholder='Password'/>
        <Button 
        onPress={chekLogin}
        title='Press me'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    margin: 5,
    padding: 6,
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 10,
    backgroundColor: "#eceff1"
  }
});
