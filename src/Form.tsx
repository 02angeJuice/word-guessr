import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import SpreadChars from './SpreadChars'
import ShuffleWord from './ShuffleWord'
import { genShuffle } from './utils'

type Props = {}

const Form = (props: Props) => {
  const [word, setWord] = useState('')
  const [vocab, setVocab] = useState([])

  const handleInputChange = (event) => {
    const inputWord = event.target.value
    setWord(inputWord)
  }

  const onButtonClick = () => {
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
      <div className="m-4">
        <input
          id="word"
          onChange={handleInputChange}
          className="text-3xl p-3 text-center"
          type="text"
          value={word}
          placeholder="typing word..."
          required
        />
        <button className="m-4 text-2xl !outline-none" onClick={onButtonClick}>
          Submit
        </button>
      </div>

      <div>
        <ShuffleWord vocab={vocab} />
      </div>
    </div>
  )
}

export default Form
