let nextId = 0;
const todos = (state = [], action) => {
    switch(action.type){
        case "ADD_TODO":
            console.log("add tod")
            return [
                ...state, {
                id:nextId++,
                text:action.text,
                completed:false
            }
            
        ]
        case "TOGGLE_TODO":
            console.log("toggle")
        return state.map(todo =>(
            todo.id === action.id
        )? {...todo,completed: !todo.completed} : todo)
        default: return state
    }
    
}
export default todos