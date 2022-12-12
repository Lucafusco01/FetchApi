import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, Modal, SafeAreaView, Button, TextInput, Image } from 'react-native';


var MovieList = ({item})=>{
  return(
    <View style={styles.movies}>
      <Text style={styles.title}>{item.Title}</Text>
      <Text>{"\n"}</Text>
      <Image style={{width:350, height:600}} source={{uri: item.Poster}}></Image> 
      <Text>{"\n"}</Text>
      <Text style={styles.text}>Description: {item.Plot}</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.text}>IMDB Rating: {item.imdbRating} {item.Rated}</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.text}>Movie Genres: {item.Genre}</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.text}>Release Date: {item.Released}.  Runtime: {item.Runtime}</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.titletext}>Movie Critic reviews:</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.text}>Internet Movie Database: {item.Ratings[0].Value}</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.text}>Rotten Tomatoes: {item.Ratings[1].Value}</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.text}> Metacritic: {item.Ratings[2].Value}</Text>


    </View>
  )
}


export default function App() {
 const [movie, setMovie] = useState({})
 const [movieName, setMovieName] = useState('')
 const [visible, setVisible] = useState(false)

  const getMovie = ()=>{
    fetch("https://www.omdbapi.com/?t="+movieName+"&apikey=efbcea7a")
  .then((res) => res.json())
  .then((json)=>{console.log(json);  setVisible(true); setMovie([json])}) 
  }
  

  return (
  <SafeAreaView>
  <View style={styles.body}>
    <TextInput  style={styles.textinp} onChangeText={setMovieName} placeholder="Movie Name"></TextInput>
    <Button onPress={getMovie} title="Search"></Button>
   
   <Modal visible={visible} animationType="slide">
    <FlatList data={movie} renderItem={MovieList} ></FlatList>

    <Button onPress={()=>{setVisible(false)}} title="Go Back" />

   </Modal>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  movies: {
    flex: 10,
    margin: 10,
    padding: 5,
    backgroundColor: 'black',
    width: 400,
    height: 1200,
    borderWidth: StyleSheet.hairlineWidth * 12,
    borderColor: 'red',
    position: 'relative',
    alignContent: 'center',
    alignItems: 'center',
    shadowColor: 'red',
    shadowOpacity: 0.9,
    shadowRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'gold'

    
  },
  body: {
    backgroundColor: 'black'
  },
  text: {
    color: 'white',
    
  },
  textinp: {
    borderWidth: 5,
    borderColor: 'red',
    padding: 10,
    backgroundColor: 'white'
  },
  title:{
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
    shadowColor: 'white',
    shadowOpacity: 0.9,
    shadowRadius: 10,
   
  },
  titletext: {
    color: 'white',
    fontSize: 20,
    color: 'white',
    shadowColor: 'white',
    shadowOpacity: 0.9,
    shadowRadius: 10,
    textAlign: 'center'

  }
});
