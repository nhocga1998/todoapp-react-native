import React, { Component } from 'react';
import { TextInput,StyleSheet, TouchableOpacity,View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux';
import {addTodo} from '../actions'
class AddTodo extends Component {
  state = {
    text: ''
  }

  addTodo = (text) =>{
    //redux store
    this.props.dispatch(addTodo(text))
    this.setState({text:''})
  }

    render() {
        return (
            <View style={styles.container} >
                <TextInput placeholder="Create to do note" style={styles.textInput} value={this.state.text} onChangeText={(text) => {this.setState({text})}} />
                <TouchableOpacity onPress={() => this.addTodo(this.state.text)} >
                  <View style={styles.addTodo} >
                    <Ionicons name="md-add" size={30} style={{color:'#de9595', padding: 10}} />
                  </View>
                </TouchableOpacity>
          </View>
        );
    }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      marginHorizontal: 20,
    },
    textInput:{
      borderWidth: 1,
      borderColor: '#f2f2e1',
      height: 50,
      padding: 5,
      flex: 1,
      backgroundColor: '#eaeaea'
    },
    addTodo:{
      height:50,
      backgroundColor: '#eaeaea',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });