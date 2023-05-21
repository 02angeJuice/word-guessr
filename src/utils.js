const key = {
  // api: process.env.API_KEY,
  // engine_id: process.env.SEARCH_ENGINE_ID,
}

const genShuffle = (word) => {
  const chars = Array.from(word)

  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[chars[i], chars[j]] = [chars[j], chars[i]]
  }

  return chars.join('') === word ? genShuffle(word) : chars.join('')
}

const imageSearch = async (keyword) => {
  const url = `https://www.googleapis.com/customsearch/v1?key=${key.api}&cx=${
    key.engine_id
  }&searchType=image&q=${encodeURIComponent(keyword)}&num=${3}`

  const res = await fetch(url)
  const data = await res.json()

  // const parseJSON = JSON.stringify(data)
  return data
}

export { genShuffle, imageSearch }
