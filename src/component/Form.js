import React from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) =>{
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
        );
    };
    
    const onInputChange = (event) => {
        setInput(event.target.value);
    };



    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id:uuidv4(), title:input, completed:false}]);
            setInput('');
        }else{
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    };

    return(
    <form onSubmit={onFormSubmit}>
        <input 
        type="text" 
        placeholder ="Masukan daftar To Do" 
        className="task-input"
        defaultValue={input}
        required
        onChange={onInputChange}
        />
        <button className="button-add" onClick={onFormSubmit} type="submit">Tambah</button>
    </form>
    );  
};

export default Form;