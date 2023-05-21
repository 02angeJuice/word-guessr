import { useState } from 'react'
import Char from './Char'

type Props = {
  word: string
}

const SpreadWord = ({ word }: Props) => {
  const wordArr: string[] = Array.from(word)

  return (
    <div>
      <div></div>

      <div className="flex gap-3">
        {wordArr.map((w, index) => {
          return <Char key={index} char={w} />
        })}
      </div>
    </div>
  )
}

export default SpreadWord
