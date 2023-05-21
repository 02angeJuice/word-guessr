import React from 'react'

type Props = {
  char: string
}

const Char = ({ char }: Props) => {
  const onMouseClick = () => {
    console.log(char)
  }

  return (
    <div
      onClick={onMouseClick}
      className={`bg-red-100 text-gray-800 w-16 h-16 pt- m-1 mt-2 text-5xl rounded-xl font-semibold cursor-pointer hover:bg-orange-200 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-100 duration-75`}>
      {char}
    </div>
  )
}

export default Char
