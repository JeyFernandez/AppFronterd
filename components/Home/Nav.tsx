import React from "react";
import { StyleSheet, Text, View,ScrollView,Image } from "react-native";
import { Entypo, } from '@expo/vector-icons';

type Props ={
  name:string
}
const nombre= 'Jasson'

const Greeting = (props:Props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.text}>Bienvenido {props.name}</Text>
    </View>
  );
}

export default function Nav() {
  return (
    <View>
      <View style={styles.nav}>
      <Entypo name="dots-three-vertical" style={styles.icon} />
        <Greeting name={nombre} />
          <View style={styles.options}>
          <Image source={{
            uri:'https://lh3.googleusercontent.com/a/ALm5wu1M--7NIKkEtCcOvgcJSkmkNxGQ887rcftMWRhHGA=s288-p-rw-no'
          }}
          style={styles.icon1}
          />
          </View>
      </View>
    </View>
  )};

  const styles = StyleSheet.create({
    nav:{
      marginTop:30,
      paddingBottom:10,
      flexDirection:'row',
    },
    icon:{
      color:'#0D70C3',
      marginLeft:10,
      fontSize:25,
      padding:4,
    },
    options:{
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon1:{
      borderRadius:100,
      height:40,
      width:40,
      alignSelf:'flex-end',
      textAlign: 'right',
      marginRight:14,
    },
    text:{
      color:'#0D70C3',
      fontWeight:'bold',
      marginLeft:5,
      fontSize:30,
      padding:0,
    },
  });