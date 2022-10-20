import React from 'react'
import './TodoItem.css'

const TodoItem = () => {
  return (
    <div className='TodoItem'>
        <h3 className='TodoItemTime'>Time left</h3>
        <h3 className='TodoItemTitle'>Todo Item title</h3>
        <div className='TodoItemDifficulty'>diff</div>
        <div className='TodoItemDescription'>Things we need to do</div>
    </div>
  )
}

export default TodoItem