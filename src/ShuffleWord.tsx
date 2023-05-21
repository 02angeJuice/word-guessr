import React, { useState } from 'react'
import SpreadChars from './SpreadChars'

type Props = {}

const ShuffleWord = ({ vocab }) => {
  return (
    <div>
      {vocab?.map((v) => {
        return <SpreadChars key={v._id} word={v.shuffle} />
      })}
    </div>
  )
}

export default ShuffleWord
