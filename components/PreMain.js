import React, {useState}  from 'react';
import { gStyle } from '../styles/style';
import { StyleSheet, Text, SafeAreaView, Button, Alert, View, Image, TouchableOpacity, FlatList, CameraRoll, TextBase} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Grid } from 'react-native-animated-spinkit';



export default function PreMain ({navigation, route} ) {
    

 
  const [categories, setCategories] = useState([
        {category:'Сердце', anons:'Болезнь сердца', descript:'fdsfdsdf',key:'1', img:'search',},
        {category:'Легкие',anons:'dad', descript:'fdsfdsdf', key:'2', img:'search',  },
        {category:'Желудок',anons:'dad', descript:'fdsfdsdf', key:'3', img:'search', },
        {category: 'Мозг',anons:'dad', descript:'fdsfdsdf', key:'4', img:'search',},
        {category:'Щитовидная',anons:'dad', descript:'fdsfdsdf', key:'5', img:'search', },
        {category:'Кишечник',anons:'dad', descript:'fdsfdsdf', key:'6', img:'search',},
        {category:'Почки',anons:'dad', descript:'fdsfdsdf', key:'7', img:'search', },
        {category:'Печень',anons:'dad', descript:'fdsfdsdf', key:'8', img:'search',}
        
    ]) 
    function setItems(i) {
      if(news[0].first.key == categories.key){
       
      }
    }
    return (
    <View style={styles.categories}>
        <FlatList style={styles.flatList} data={categories} numColumns={Math.ceil(categories.length / 6)}
        scrollEnabled={false}  renderItem={({item}) => (
         <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Назад', item ) }>
           <View >
          
           <Ionicons name={item.img} size={50} color="#FCC153" style={{backgroundColor:'#fff'}} />
        

            <Text style={styles.title}>{item.category}</Text>
          
           
            </View>
      

         </TouchableOpacity>
        )}/>
               </View>
    )
  }

const styles = StyleSheet.create({
    categories:{
        paddingTop:30,
        flex: 1,
        paddingHorizontal:'2%',
        height:'100%',
        backgroundColor:'#F6F7F6',
       
    },

    flatList:{
      
    },
    row:{
        
    },
  item:{
    flex: 1,
    borderRadius:30,
    minHeight:'20%',
    marginLeft:'2%',
    marginRight:'2%',
    marginVertical:'2%',
    color:'white',
    maxWidth: "100%", // 100% devided by the number of rows you want
    alignItems: "center",
    padding: '5%',
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#fff",
    justifyContent: "center",
    textAlign:'center'
  },
  image:{
   height:50,
   width:50,
   backgroundColor:'#fff'
  },
  full:{
   
  },
  title:{
    marginTop: 10,
    color:'black',
    fontFamily:'Gt-med',
    textAlign:'center',
    backgroundColor:'#fff'
  }
});