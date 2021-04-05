import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TodoList =({todos, toggleTodo}) =>{
   console.log(todos)
        return (
            
           <View style={{padding:20}} >
               {todos.map(todo =>
               <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                   <Text style={{fontSize:24,
      textDecorationLine: todo.completed ? 'line-through' : 'none'}}> {todo.text} </Text>
               </TouchableOpacity>
                   
               )}
               {/* {todos.map(todo =>
                   <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)} >
                       <Text style={{fontSize:24,
      textDecorationLine: todo.completed ? 'line-through' : 'none'}}>
                           {todo.Text}
                       </Text>
                   </TouchableOpacity>
               )} */}
           </View>
        );
}

export default TodoList;

const styles = StyleSheet.create({
    todoItem: {
      fontSize:24,
      
    },
  });
  