import React from 'react'
import { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { deleteToDo, updateToDo } from '../../services/actions/actions'

const ToDoItem = (props) => {
    console.warn(props)
    const [isUpdate, setIsUpdate] = useState(false)
    const { task } = props
    const textRef = useRef(null)

    function EditItemOnState(e) {
        e.preventDefault()
        //console.warn(textRef.current.value)
        props.UpdateToDo({ task: textRef.current.value, id: task.id })
        setIsUpdate(false)
        textRef.current = null
    }

    const renderForm = () => {
        return (
            <form onSubmit={EditItemOnState}>
                <input type="text" defaultValue={task.task} ref={textRef} />
                <button>Edit</button>
            </form>
        )
    }

    const renderItem = () => {
        return (
            <>
                {task.task}
                <button onClick={() => setIsUpdate(true)}>Edit</button>
                {/* <button onClick={props.dispatch(deleteToDo(task.id))}>Delete</button> */}
                <button onClick={() => props.DeleteToDo(task.id)}>Delete</button>
            </>
        )
    }

    return (
        <>
            {
                isUpdate ? renderForm() : renderItem()
            }
        </>
    )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
    DeleteToDo: data => dispatch(deleteToDo(data)),
    UpdateToDo: data => dispatch(updateToDo(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem)
