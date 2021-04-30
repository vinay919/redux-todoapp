import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../../services/actions/actions'
import cuid from 'cuid'
import { connect } from 'react-redux'

const AddToDo = (props) => {



    const [tasks, setTasks] = useState('')

    const dispatch = useDispatch();

    function handleInputChange(e) {
        setTasks(e.target.value);
        //console.warn('handleFormSubmit', tasks);
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        //dispatch(addToDo({ task: tasks, id: cuid() }))
        props.addTask({ task: tasks, id: cuid() })
        e.target.userInput.value = "";
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name='userInput' onChange={(e) => handleInputChange(e)} />
            <button type="submit">Add</button>
        </form>
    )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
    addTask: data => dispatch(addToDo(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo)