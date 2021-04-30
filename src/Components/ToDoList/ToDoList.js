import React from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import ToDoItem from '../ToDoItem/ToDoItem'

function ToDoList(props) {

    const tasks = useSelector((state) => state.todosReducers.data)
    // const taskItems = props.data.map((task) => {
    //     return <ToDoItem task={task} />
    // })

    return (
        <>
            <hr></hr>
            {
                tasks.map((task) => (
                    <ToDoItem task={task} key={task.id} />
                ))
                //     props.data.map((task) => (
                // <ToDoItem task={task} key={task.id} />
                //     ))
            }
        </>
    )
}

const mapStateToProps = state => ({
    data: state.todosReducers.data
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)