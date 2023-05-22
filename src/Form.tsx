import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import SpreadChars from './SpreadChars'
import ShuffleWord from './ShuffleWord'
import { genShuffle } from './utils'

const Form = () => {
  const [word, setWord] = useState('')
  const [vocab, setVocab] = useState([])

  const handleInputChange = (event: React.FormEvent) => {
    const inputWord = event.target.value

    setWord(inputWord.trim())
  }

  const onButtonClick = (e: React.FormEvent) => {
    e.preventDefault()

    if (word !== '') {
      setVocab([
        ...vocab,
        { _id: uuid(), word: word, shuffle: genShuffle(word) },
      ])
      setWord('')
    }
  }

  return (
    <div>
      <div>
        <SpreadChars word={word} />
      </div>
      <form onSubmit={onButtonClick} className="m-4">
        <input
          onChange={handleInputChange}
          className="text-3xl p-3 text-center"
          type="text"
          value={word}
          placeholder="typing word..."
          maxLength={13}
          required
        />
        <button
          className="m-4 text-2xl font-bold bg-red-200 p-4 rounded-xl hover:bg-red-300 !outline-none"
          onClick={onButtonClick}>
          Add <span className="">🧡</span>
        </button>
      </form>

      <div>
        <ShuffleWord vocab={vocab} />
      </div>
    </div>
  )
}

export default Form
