import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div 
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 style={{ userSelect: 'none' }}>
        {task.text} 
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)}/>
      </h3>
      <p style={{ userSelect: 'none' }}>{task.day}</p>
    </div>
  )
}

export default Task