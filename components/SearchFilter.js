import {Stylesheet, Text, View, FlatList, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import Main from './Main';

const SearchFilter = ({ data,input,setInput})=>{
    return(
        <View>
         <Text> </Text>
         <FlatList data={data} renderItem={({item}) => {
            if(input==='') {
             return(
          
          <View>
          
                <Text>{item.name}</Text>
                <Image style={ {height:150, width:50}} source={{
                uri: item.img
            }}/>

           
             </View>
             )
            }
             if(item.name.toLowerCase().includes(input.toLowerCase())){
             return(
                <View>
                
                <Text>{item.name}</Text>
                <Image style={ {height:50, width:50}} source={{
                uri: item.img
            }}/>
         
             </View>
             )
             }
             
          }}/>

            </View>  
    )
  
}


export default SearchFilter; 

