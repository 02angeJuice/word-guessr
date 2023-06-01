import SpreadChars from './SpreadChars'

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
