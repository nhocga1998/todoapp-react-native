import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './src/TodoApp';
import store from './src/store';
import {Provider} from 'react-redux'
 class App extends Component {
   render(){
     
    return (
      <Provider store={store}>
        <TodoApp/>
      </Provider>
      
    );
   }

}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
