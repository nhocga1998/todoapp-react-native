import * as type from './actionTypes'

let nextId = 0;
export const addTodo = (text) =>({
    type: type.ADD_TODO,
    id: nextId++,
    text
})

export const toggleTodo = (id) =>({
    type: type.TOGGLE_TODO,
    id
})