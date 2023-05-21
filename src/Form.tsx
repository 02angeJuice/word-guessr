import React, { useState } from 'react'
import SpreadWord from './SpreadWord'

type Props = {
  e: any
}

const Form = (props: Props) => {
  const [word, setWord] = useState('blabla')

  const onInputChange = (e: any) => {
    setWord(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div>
      <div className="m-4">
        <input
          id="word"
          onChange={onInputChange}
          className="text-3xl p-3 text-center"
          type="text"
          value={word}
          placeholder="typing word..."
        />
      </div>

      <div>
        <SpreadWord word={word} />
      </div>
    </div>
  )
}

export default Form
