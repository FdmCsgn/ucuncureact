import React from "react";
import { SafeAreaView, View, Button, StyleSheet } from "react-native";

function App(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}/> 
      <View style={styles.box2}/> 
      <View style={styles.box3}/> 
      <View style={styles.box4}/> 
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'yellow',
    justifyContent:'space-between',
    alignItems:'center',
  },
  box1: {
    width:75,
    height:75,
    backgroundColor:'red',
  },
  box2: {
    width:75,
    height:75,
    backgroundColor:'blue',
  },
  box3: {
    width:75,
    height:75,
    backgroundColor:'aqua',
  },
  box4: {
    width:75,
    height:75,
    backgroundColor:'green',
  },
});
export default App;