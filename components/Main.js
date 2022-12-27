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
        {name: 'First', anons:'First', full: 'First describe', key:'1',category:'Сердце', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg'},
        {name: 'Second', anons:'Second', full: 'First describe',key: '1',category:'Сердце', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg' },
        {name: 'Third', anons:'third', full: 'First describe', key: '3',category:'Сердце', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2Hiv1487y--V7Ynefyrp9XyIAofKN2P34Pvislvg5U7Lz6zNRzAxbuHKT9i3pDpYeZw&usqp=CAU'},
       
       
        //Легкие
        {name: 'Болезнь легких', anons:'First', full: 'First describe', key:'4', category:'Легкие',img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg'},
        {name: 'Вторая болезнь', anons:'Second', full: 'First describe',key: '5',category:'Легкие', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg' },
        {name: 'Третья болезнь', anons:'third', full: 'First describe', key: '6',category:'Легкие', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2Hiv1487y--V7Ynefyrp9XyIAofKN2P34Pvislvg5U7Lz6zNRzAxbuHKT9i3pDpYeZw&usqp=CAU'},


        
         //Желудок
         {name: 'First', anons:'First', full: 'First describe', key:'7',category:'Желудок', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg'},
         {name: 'Second', anons:'Second', full: 'First describe',key: '8',category:'Желудок', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg' },
         {name: 'Third', anons:'third', full: 'First describe', key: '9',category:'Желудок', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2Hiv1487y--V7Ynefyrp9XyIAofKN2P34Pvislvg5U7Lz6zNRzAxbuHKT9i3pDpYeZw&usqp=CAU'},
        
        
         //Мозг
         {name: 'First', anons:'First', full: 'First describe', key:'10',category:'Мозг', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg'},
         {name: 'Second', anons:'Second', full: 'First describe',key: '11',category:'Мозг', img:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3137-6134-4036-a635-636332613339__9660.jpg' },
         {name: 'Third', anons:'third', full: 'First describe', key: '12',category:'Мозг', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2Hiv1487y--V7Ynefyrp9XyIAofKN2P34Pvislvg5U7Lz6zNRzAxbuHKT9i3pDpYeZw&usqp=CAU'},
 
    

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
    //const b  =  news.filter(item => item.name.toLowerCase().includes(inputOne.toLowerCase()))
     
    
   // console.log(news);
    //const [input, setInput] = useState("");
   // console.log(b);
    console.log(input);
    return ( 
           
     <View style={ gStyle.main }> 
        <TextInput 
       value={input}
       onChangeText={(text) => setInput(text)}
       style={styles.searchBar}
       placeholder='Что вы ищете?'
       />
     
       <StatusBar backgroundColor="#00876C" />
       <SearchFilter data={navigation} input={input} setInput={setInput} style={styles.searchBar} />
      
        <Text style={styles.title}> {a.name}</Text>
            <Text style={styles.anons}> {a.anons}</Text>
   
   
       <Text style={ [gStyle.title, styles.header] }> Главная страница</Text>
       
       <FlatList data={a} renderItem={({item}) => (
         <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo',item   ) }>
            <Image style={ styles.image } source={{
                uri: route.params.img
            }}/>

            <Text style={styles.title}> {route.params.anons}</Text>
            <Text style={styles.anons}> {route.params.descript}</Text>
           
           
      

         </TouchableOpacity>
               )}/> 
  
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
    padding:5,
    borderColor:'#E9E9E9',
    borderWidth:1,
    borderRadius:20
   }
});
