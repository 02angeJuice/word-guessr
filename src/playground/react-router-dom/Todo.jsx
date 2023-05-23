import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuid } from 'uuid'
import TodoList from './TodoList'
import './Todo.css'

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      _id: uuid(),
      title: 'Buy coffee',
      done: false,
    },
  ])

  const addTodo = (title) => {
    setTodos([...todos, { _id: uuid(), title: title, done: false }])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo._id !== id))
  }

  const editTodo = (target) => {
    console.log('🚀 ~ file: Todo.jsx:25 ~ editTodo ~ target:', target)

    setTodos(
      todos.map((todo) => {
        if (todo._id === target._id) {
          return {
            ...todo,
            ...target,
          }
        }
        return todo
      })
    )
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  )
}

export default Todo
