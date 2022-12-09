
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Nav from '../components/Home/Nav';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'

export default function Add() {

  return (
    <View>
      <Nav />
      <View style={styles.subContainer}>
      <Text style={styles.title}>Agrega producto al inventario</Text>
        <TextInput
          style={styles.imput}
          placeholder='Nombre del producto'
        />
        <View style={styles.continer}>
          <View>
            <TextInput
              style={styles.cantidad}
              placeholder='Cantiddad'
            />
          </View>
          <View>

            <TextInput
              style={styles.fecha}
              placeholder='00/00/00'
            />
          </View>
        </View>
        <TextInput
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          placeholder={"Descriptions"}
          multiline={true}
        />
        <View style={{
          justifyContent: "space-between",
          flexDirection: "row",
        }}>
          <TouchableOpacity>
            <Text style={styles.btnDell}>
              Limpiar
              <MaterialIcons name="delete-outline" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btnAdd}>
              Agragar
              <Ionicons name="add" />
            </Text>
          </TouchableOpacity>

        </View>
      </View>
      <View style={styles.container}>
        <Image
        source={{
          uri:'https://www.confluency.ai/wp-content/uploads/icn-b-simulation.png'
        }}
        style={{width:200, height:200}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: '#022F52',
    fontWeight: 'bold',
    marginTop: '2%',
    marginBottom: '5%',
    marginLeft: '5%',
  },
  container:{
    margin:40,
    alignItems:'center',
  },
  subContainer: {
    padding:20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
    backgroundColor: '#FFF',
    borderRadius: 15,

  },
  imput: {
    backgroundColor:'#fff',
    fontSize:20,
    borderRadius: 8,
    paddingLeft: 15,
    paddingVertical:10,
    borderWidth: 1,
    borderColor: '#022F52',
  },

  TextInputStyleClass: {
    backgroundColor:'#fff',
    borderWidth: 1,
    fontSize:20,
    borderRadius: 8,
    paddingLeft: 10,
    paddingBottom: 60,
  },
  cantidad: {
    backgroundColor:'#fff',
    fontSize:20,
    textAlign: 'center',
    marginTop: 20,
    borderRadius: 8,
    paddingVertical: 5,
    padding: "11%",
    borderWidth: 1,
    borderColor: '#022F52',

  },
  fecha: {
    backgroundColor:'#fff',
    fontSize:20,
    textAlign: 'center',
    marginTop: 20,
    borderRadius: 8,
    padding: "11%",
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#022F52',
    alignSelf: "flex-end",
  },
  continer: {
    marginBottom: 15,
    justifyContent: "space-between",
    flexDirection: 'row',
  },
  btnAdd: {
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#008FFF',
    fontSize: 20,
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    marginHorizontal: 20,
  },
  btnDell: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: '#FD0B12',
    padding: 10,
    marginTop: 15,
    marginHorizontal: 20,
  },
});