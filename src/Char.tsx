import React from 'react'

type Props = {
  char: string
}

const Char = ({ char }: Props) => {
  return (
    <div className=" bg-red-200 text-gray-800 w-20 h-20 pt-2 m-2 text-5xl rounded-xl font-semibold">
      {char}
    </div>
  )
}

export default Char
