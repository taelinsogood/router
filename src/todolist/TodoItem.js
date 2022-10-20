import React from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {BsCheck2Circle} from 'react-icons/bs'
import {CgDanger} from 'react-icons/cg'

const TodoItem = ({todo, remove, check, data, danger}) => {
  return (
    <>
    <div className={todo.line ? "todo-row line" : 'todo-row'}
          style={todo.important ? {background: "orange"} : {}}
    >
      {todo.text}
      <div className='iconsContainer'>       
        <span className='span'>{data}ㅤ</span>                  
        <RiDeleteBin5Line style={{marginRight: "8px"}} onClick={()=>remove(todo.id)}/>
        <BsCheck2Circle style={{marginRight: "8px"}} onClick={()=>check(todo.id)}/>
        <CgDanger onClick={()=>danger(todo.id)}/>  
      </div>
    </div>
    </>
  )
}

export default TodoItem;