import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className='collection-item'>
                    <span onClick={() => {deleteTodo(todo.id)}} >{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className='center'> You have no todo's left, Nice one! </p>
    )
    return (
        <div className='todos collection'>
            {todoList}
        </div>
    )
};

export default Todos