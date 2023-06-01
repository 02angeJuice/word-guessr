import Char from './Char'

const SpreadChars = ({ word }) => {
  const wordArr = Array.from(word)

  return (
    <div>
      <div className="flex gap-1">
        {wordArr.map((w, index) => {
          return <Char key={index} char={w} />
        })}
      </div>
    </div>
  )
}

export default SpreadChars
