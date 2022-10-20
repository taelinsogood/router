import React, { useState } from 'react'
import 'css/todo.css';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoMain = () => {
  const data = new Date().toLocaleTimeString('ko-kr');
  const [todos, setTodo] = useState([]);

  let id = 1;
  if (todos.length > 0) {
    id = todos[0].id + 1;
  }  //밖으로 빼도 됨
  
  const addTodo = (text) => {
    //----------------------
    let todo = { id: id, text: text, line: false, important: false}
    let newTodo = [todo, ...todos]  //"input", [...배열]  중요!
    setTodo(newTodo)
    console.log(newTodo)
  }
  const remove = (id) => {
    setTodo(todos.filter(todo => todo.id !== id));   // 새로운 배열에 넣겠다 -> 기존에 있던 것 중 filter 값이 !== 하면 걸러짐. [todo, setTodo] = ([]) 와 object 필요!!
  }
  const check = (id) => {  //id를 받았다!!
    let update = todos.map((todo)=>{   
      if (todo.id === id){    // id가 같으면 line 처리를 하겠다
        todo.line = !todo.line
      }
      return todo
    })
    setTodo(update);
  }
  const danger = (id) => {
    let updateTodos = todos.map((todo)=>{
      if (todo.id === id){
        todo.important = !todo.important
      }
      return todo
    })
    setTodo(updateTodos); 
  }
  
  return (
    <>
      <div className='todo-main'>
        <h1 className='h1'>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <hr className='seperator'></hr>
        {todos.map((todo, idx) => {              //todo로 text를 보냄
          return <TodoItem data={data} key={idx} todo={todo} remove={remove} check={check} danger={danger}/>
        })}
      </div>
    </>
  )
}

export default TodoMain;