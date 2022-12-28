import React, {useState, useEffect, Component}  from 'react';
import { gStyle } from '../styles/style';
import { StyleSheet, Text, StatusBar, SafeAreaView, Button, Alert, Image, View, TouchableOpacity, FlatList, Modal, TextInput, } from 'react-native';
import { Feather, Ionicons} from '@expo/vector-icons';
import SearchBar from "react-native-dynamic-search-bar";
import SearchInput, { createFilter } from 'react-native-search-filter';
import SearchFilter from './SearchFilter.js';



export default function Main({navigation, route}) {
  const [news, setNews] = useState([ 
       //Сердце
        {name: 'First', anons:'First', full: 'First describe', key:'111',category:'Сердце', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg'},
        {name: 'Second', anons:'Second', full: 'First describe',key: '1111',category:'Сердце', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg' },
        {name: 'Third', anons:'third', full: 'First describe', key: '321',category:'Сердце', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2Hiv1487y--V7Ynefyrp9XyIAofKN2P34Pvislvg5U7Lz6zNRzAxbuHKT9i3pDpYeZw&usqp=CAU'},
       
       
        //Легкие
        {name: 'Болезнь легких', anons:'Болезнь легких', full: 'First describe', key:'41223', category:'Легкие',img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg'},
        {name: 'Вторая болезнь', anons:'Second', full: 'First describe',key: '5123',category:'Легкие', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg' },
        {name: 'Третья болезнь', anons:'third', full: 'First describe', key: '6123',category:'Легкие', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2Hiv1487y--V7Ynefyrp9XyIAofKN2P34Pvislvg5U7Lz6zNRzAxbuHKT9i3pDpYeZw&usqp=CAU'},
        {name: 'Болезнь легких', anons:'Болезнь легких', full: 'First describe', key:'4123', category:'Легкие',img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg'},

        
         //Желудок
         {name: 'First', anons:'First', full: 'First describe', key:'1237',category:'Желудок', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg'},
         {name: 'Second', anons:'Second', full: 'First describe',key: '8123',category:'Желудок', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg' },
         {name: 'Third', anons:'third', full: 'First describe', key: '9123',category:'Желудок', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2Hiv1487y--V7Ynefyrp9XyIAofKN2P34Pvislvg5U7Lz6zNRzAxbuHKT9i3pDpYeZw&usqp=CAU'},
        
        
         //Мозг
         {name: 'First', anons:'First', full: 'First describe', key:'10234',category:'Мозг', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg'},
         {name: 'Second', anons:'Second', full: 'First describe',key: '12341',category:'Мозг', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg' },
         {name: 'Third', anons:'third', full: 'First describe', key: '1223',category:'Мозг', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2Hiv1487y--V7Ynefyrp9XyIAofKN2P34Pvislvg5U7Lz6zNRzAxbuHKT9i3pDpYeZw&usqp=CAU'},
 
    

          //Щитовидная
        {name: 'First', anons:'First', full: 'First describe', key:'13',category:'Щитовидная', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg'},
        {name: 'Second', anons:'Second', full: 'First describe',key: '14',category:'Щитовидная', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg' },
        {name: 'Third', anons:'third', full: 'First describe', key: '15',category:'Щитовидная', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2Hiv1487y--V7Ynefyrp9XyIAofKN2P34Pvislvg5U7Lz6zNRzAxbuHKT9i3pDpYeZw&usqp=CAU'},
       
       
        //Кишечник
        {name: 'First', anons:'First', full: 'First describe', key:'16',category:'Кишечник', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg'},
        {name: 'Second', anons:'Second', full: 'First describe',key: '17',category:'Кишечник', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg' },
        {name: 'Third', anons:'third', full: 'First describe', key: '18',category:'Кишечник', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2Hiv1487y--V7Ynefyrp9XyIAofKN2P34Pvislvg5U7Lz6zNRzAxbuHKT9i3pDpYeZw&usqp=CAU'},


        
         //Почки
         {name: 'First', anons:'First', full: 'First describe', key:'19',category:'Почки', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg'},
         {name: 'Second', anons:'Second', full: 'First describe',key: '20',category:'Почки', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg' },
         {name: 'Third', anons:'third', full: 'First describe', key: '21',category:'Почки', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2Hiv1487y--V7Ynefyrp9XyIAofKN2P34Pvislvg5U7Lz6zNRzAxbuHKT9i3pDpYeZw&usqp=CAU'},
        
        
         //Печень
         {name: 'First', anons:'First', full: 'First describe', key:'22',category:'Печень', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg'},
         {name: 'Second', anons:'Second', full: 'First describe',key: '23',category:'Печень', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg' },
         {name: 'Third', anons:'third', full: 'First describe', key: '24',category:'Печень', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2Hiv1487y--V7Ynefyrp9XyIAofKN2P34Pvislvg5U7Lz6zNRzAxbuHKT9i3pDpYeZw&usqp=CAU'},







    ])
  const a = news.filter(item => item.category == route.params.category) ;
/*const [news1, setNews1] = useState([ 
       
    {name: 'Firs2123t', anons:'First', full: 'First describe', key:'1', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg'},
    {name: 'Seco123123nd', anons:'Second', full: 'First describe',key: '2', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg' },
    {name: 'Th12312ird', anons:'third', full: 'First describe', key: '3', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2Hiv1487y--V7Ynefyrp9XyIAofKN2P34Pvislvg5U7Lz6zNRzAxbuHKT9i3pDpYeZw&usqp=CAU'},

])
*/
    const [input, setInput] = useState('');
    //const b  =  news.filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
     
    
   // console.log(news);
    //const [input, setInput] = useState("");
   // console.log(b);
    console.log(input);
    return ( 
           
     <View style={ gStyle.main }> 
     
      <StatusBar backgroundColor="#008" />
      
      
        
   
   
       <Text style={ [gStyle.title, styles.header] }> Главная страница</Text>
       <TextInput 
       value={input}
       onChangeText={(item) => setInput(item)}
       style={styles.searchBar}
       placeholder='Что вы ищете?'
       />
  
       <FlatList data={a} renderItem={({item}) => {
        
        if(input==='') {
          return(
       
       <View>
       <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo',item   ) }>
             <Text>{item.name}</Text>
             <Image style={ {height:150, width:50}} source={{
             uri: item.img
         }}/>

        </TouchableOpacity>  
          </View>
          )
         }
          if(item.name.toLowerCase().includes(input.toLowerCase())){
          return(
            
             <View>
              <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo',item   ) }>
             <Text>{item.name}</Text>
             <Image style={ {height:50, width:50}} source={{
             uri: item.img
             
         }}/>
      </TouchableOpacity> 
          </View>
          )
          }
        
          
             
  
        
               }}/> 
  
   </View>
    );
   }
  


const styles = StyleSheet.create({
    image:{
        width:'100%',
        height: 200,
    },
    header:{
    marginBottom: 30
   },
    item:{
    width: '100%',
    marginBottom:30,

   },
   title:{
    fontFamily:'Gt-med',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 5,
    color:'#474747'
   },
   anons:{
    fontFamily:'bellota',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color:'#474747'
   },
   searchBar:{
    backgroundColor:'#F7FCFF',
    fontSize:15,
    fontFamily:'Gt-med',
    padding:10  ,
    borderColor:'#E9E9E9',
    borderWidth:1,
    borderRadius:20
   }
});
