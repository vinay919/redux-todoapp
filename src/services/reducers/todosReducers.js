import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../Constant'
const initialState = {
    data: [],
}


const todosReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                data: [...state.data.filter((todo) => todo.id !== action.payload)]
            }
        case UPDATE_TODO:
            const task = action.payload
            console.warn('Rducer', task)
            const exitCartItem = state.data.find((x) => x.id === task.id)
            if (exitCartItem) {
                return {
                    ...state,
                    data: state.data.map((x) =>
                        x.id === exitCartItem.id ? task : x
                    ),
                };
            } else {
                return {
                    ...state,
                    data: [...state.data, action.payload]
                }
            }
        default:
            return state;
    }
}

export default todosReducers