import React, { useState } from 'react'

const CalculatorForm = ({ getResult, operators }) => {
  const [calculateForm, setCalculateForm] = useState({
    num1: 0,
    num2: 0,
    menu: 0,
  })

  const handleChangeInput = (e) => {
    setCalculateForm((curr) => {
      return {
        ...curr,
        [e.target.name]: Number(e.target.value),
      }
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    getResult(calculateForm)

    setCalculateForm({
      num1: 0,
      num2: 0,
      menu: 0,
    })
  }
  return (
    <div className="text-black">
      <form onSubmit={handleFormSubmit} action="">
        <div className="mb-3">
          <label htmlFor="num1">Number1: </label>
          <input
            className="ml-3 text-black border border-black rounded-sm pl-1"
            type="number"
            name="num1"
            id="num1"
            min="0"
            onChange={handleChangeInput}
            value={calculateForm.num1}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="num2">Number2: </label>
          <input
            className="ml-3 text-black border border-black rounded-sm pl-1"
            type="number"
            name="num2"
            id="num2"
            min="0"
            onChange={handleChangeInput}
            value={calculateForm.num2}
          />
        </div>

        <div className="mb-3">
          <p>Caluculator Menu:</p>
          <ol>
            {operators.map((item, i) => {
              return (
                <li key={i}>
                  {i + 1}. {item}
                </li>
              )
            })}
          </ol>
        </div>

        <div className="mb-3">
          <label htmlFor="menu">Choose Menu:</label>
          <input
            className="ml-3 text-black border border-black rounded-sm pl-1"
            type="number"
            name="menu"
            id="menu"
            min="1"
            max="5"
            onChange={handleChangeInput}
            value={calculateForm.menu}
          />
        </div>

        <div>
          <button className="bg-black px-4 py-2 rounded-lg text-white">
            Calculate
          </button>
        </div>
      </form>
    </div>
  )
}

export default CalculatorForm
