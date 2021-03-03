import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      presses: 0,
      displayPresses: 0,
      img: require('./assets/a.jpeg'),
    }
  }

  increase=()=>{
    var presses = this.state.presses;
    var displayPresses = this.state.displayPresses;
    if(presses < 10){
      this.setState({presses: presses + 1, displayPresses: displayPresses + 1})
    }
    else if(presses == 10){
      this.setState({img: require('./assets/b.jpeg'), presses: presses + 1, displayPresses: 1})
    }
    else if(presses > 10 && presses < 20){
      this.setState({presses: presses + 1, displayPresses: displayPresses + 1})
    }
    else if(presses == 20){
      this.setState({img: require('./assets/c.jpeg'), presses: presses + 1, displayPresses: 1})
    }
    else if(presses > 20 && presses < 30){
      this.setState({presses: presses + 1, displayPresses: displayPresses + 1})
    }
    else if(presses == 30){
      this.setState({img: require('./assets/d.jpeg'), presses: presses + 1, displayPresses: 1})
    }
    else if(presses > 30 && presses < 40){
      this.setState({presses: presses + 1, displayPresses: displayPresses + 1})
    }
    else if(presses == 40){
      this.setState({img: require('./assets/e.png'), displayPresses: "Congratulations!"})
    }
  }

  render(){
    return (
      <View style={{height: '100%', justifyContent: 'center'}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Wake him up! Tap 10 times!</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.increase} delayPressIn={0}>
          <Image source={this.state.img} style={styles.img} />
        </TouchableOpacity>
        <Text style={styles.count}>{this.state.displayPresses}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    position: 'absolute',
    top: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'coral',
    paddingTop: 27,
    paddingBottom: 10,
  },
  headerText:{
    color: 'white',
    fontWeight: '600',
    fontSize: 23,
    textAlign: 'center',
  },
  img:{
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  button:{
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  count:{
    fontSize: 40,
    marginTop: 20,
    alignSelf: 'center',
    color: 'coral',
  }
});
