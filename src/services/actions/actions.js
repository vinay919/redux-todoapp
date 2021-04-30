import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../Constant'

export const addToDo = (message) => {
    return {
        type: ADD_TODO,
        payload: message,
    }
}

export const deleteToDo = (id) => {
    console.warn("ID : ", id)
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const updateToDo = (data) => {
    return {
        type: UPDATE_TODO,
        payload: data
    }
}
