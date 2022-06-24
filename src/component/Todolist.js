import React, { Component } from 'react';



const Todolist = ({todos, setTodos, setEditTodos}) => {
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleComplete = (todo) => {
        todos.map((item) => {
            if(item.id === todo.id){
                return{...item, completed: !item.completed};
            }
            return item;
        });
    };

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodos(findTodo);
    }
    return (
        <div>
            {todos.map((todo) => (
                <li className='list-item' key={todo.id}>

                    <input type="text" value = {todo.title} className = "list" onChange={(event) => event.preventDefault()}/>
                    
                    <div>
                        <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                            <i className='fa fa-check-circle'>Done</i>
                        </button>
                        <button className='button-complete task-button' onClick={() => handleEdit(todo)}>
                            <i className='fa fa-check-circle'>Update</i>
                        </button>
                        <button className='button-complete task-button' onClick={() => handleDelete(todo)}>
                            <i className='fa fa-check-circle'>X</i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default Todolist;