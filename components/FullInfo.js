import React, {useState}  from 'react';
import {gStyle} from '../styles/style.js'
import { StyleSheet, Text, SafeAreaView, Button, Alert, View, Image } from 'react-native';


export default function FullInfo ( {route}) {
  
    return (
     <View style={ gStyle.main }> 

            <Image style={ styles.image } source={{ uri: route.params.img }}/>
       <Text style={ [gStyle.title , styles.title] }> {route.params.name} </Text>
       <Text style={styles.full}> {route.params.full} </Text>
       </View>
    );
  }

const styles = StyleSheet.create({
  image:{
    width:'100%',
    height: 200,
  },
  full:{
    fontFamily:'bellota',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color:'#223322'
  },
  title:{
    marginTop: 15,
  }
});