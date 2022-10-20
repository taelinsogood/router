import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [input, setInput] = useState('');

  const submit = (e) => {
    e.preventDefault();
    addTodo(input);  //text로 보내ㅁ
    setInput('');
  }
  return (
    <>
    <form className='todo-form' onSubmit={submit}>
      <input
        className='todo-input'
        placeholder='Add Todo'
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />
      <button className='todo-button' type='submit'>Add Todo</button>
    </form>
    </>
  )
}

export default TodoForm;