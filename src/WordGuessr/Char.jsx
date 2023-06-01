import React from 'react'

const Char = ({ char }) => {
  const onMouseClick = () => {
    console.log(char)
  }

  return (
    <div
      onClick={onMouseClick}
      className={`bg-red-100 text-gray-800 w-16 h-16 pt-0 pl-3 m-1 mt-2 text-5xl rounded-xl font-semibold cursor-pointer hover:bg-orange-200 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-100 duration-75`}>
      {char}
    </div>
  )
}

export default Char
