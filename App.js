import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  changeText(text) {
    this.setState({
      text: text
    });
    
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={ (text) => this.changeText(text)}
          placeholder={ 'Enter text here' }
          value={this.state.text}
        />
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={ () => alert(this.state.text)}
        ><Text>Press Me</Text>
      </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
