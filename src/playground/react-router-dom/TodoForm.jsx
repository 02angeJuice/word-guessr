import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [todoData, setTodoData] = useState('')

  const handleChange = (e) => {
    setTodoData(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodoData('')
    addTodo(todoData)
  }

  return (
    <>
      <form className="flex" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Todo: </label>
          <input
            className="mx-2"
            type="text"
            name="title"
            id="title"
            placeholder="Add todo"
            value={todoData}
            onChange={handleChange}
          />
        </div>

        <div>
          <button className="px-2 py-1 mx-2 border">Add</button>
        </div>
      </form>
    </>
  )
}

export default TodoForm
