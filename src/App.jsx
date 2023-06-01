import { useState } from 'react'
import WordGuessr from './WordGuessr/WordGuessr'

function App() {
  return (
    <>
      <div className="p-16 mt-10 grid grid-cols-1 gap-8">
        <WordGuessr />
      </div>
    </>
  )
}

export default App
