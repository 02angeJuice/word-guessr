import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    console.log('my effet call')
  }, [])

  const increment = () => {
    setCount(count + 1)
  }

  const handleChangeInput = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="text-white text-xl">
      name : {name}
      counter : {count}
      <button
        className="ml-3 px-4 rounded-lg text-black bg-slate-300"
        onClick={increment}>
        +1
      </button>
      <input
        className="text-black"
        type="text"
        value={name}
        onChange={handleChangeInput}
      />
    </div>
  )
}

export default Counter
