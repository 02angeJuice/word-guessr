import { useState } from 'react'
import Char from './Char'

type Props = {
  word: string
}

const SpreadChars = ({ word }: Props) => {
  const wordArr: string[] = Array.from(word)

  return (
    <div>
      <div></div>

      <div className="flex gap-1">
        {wordArr.map((w, index) => {
          return <Char key={index} char={w} />
        })}
      </div>
    </div>
  )
}

export default SpreadChars
