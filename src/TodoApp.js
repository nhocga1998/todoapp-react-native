import React, { Component } from 'react'
import AddTodo from './container/AddTodo';
import { StyleSheet,View } from 'react-native';
import VisibleTodo from './container/VisibleTodo'
class TodoApp extends Component {
  state = {
    todo: [],
    visibilityFilter: 'SHOW_ALL_TODO'
  }
    render() {
        return (
            <View style={styles.container}>
            <AddTodo/>
            <View>
            <VisibleTodo/>
            </View>
          </View>
        )
    }
}

export default TodoApp


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:20
    },
  });
  