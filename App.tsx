import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';


function App(): JSX.Element {

  const [color, setColor] = useState('#ffffff');
  const [circleColor, setCircleColor] = useState(Array(8).fill('#ffffff'));

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF'
    let color = "#"
    let circleColor = '#'
    for (let index = 0; index < 6; index++) {
      color += hexRange[Math.floor(Math.random() * 16)];
      circleColor += hexRange[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const handlePress = () => {
    setColor(generateColor());
    setCircleColor(circleColor.map(() => generateColor()))
  }

  return (
    <>
    <StatusBar backgroundColor={"#000000"}/>
    <View style = {[styles.container, {backgroundColor: color}]}>
      <View style = {styles.shapes}>
        {circleColor.slice(0,4).map((c, index) => (
          <View key = {index} style = {[styles.circle, {backgroundColor: c}]}/>
        ))}
      </View>
    <TouchableOpacity onPress={() => handlePress()} >
      <View style = {styles.actionBtn}>
        <Text style = {styles.text}>Press me</Text>
      </View>
    </TouchableOpacity>
    <View style = {styles.shapes}>
        {circleColor.slice(4,8).map((c, index) => (
          <View key = {index} style = {[styles.circle, {backgroundColor: c}]}/>
        ))}
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    color: 'white',
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 40
  },
  text:{
    color: 'white',
    fontWeight:'bold',
    textTransform:'capitalize'
  },
  circle:{
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'red',
    margin: 10
  },
  shapes:{
    flexDirection:'row'
  }
});

export default App;
