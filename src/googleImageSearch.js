import axios from 'axios'

const API_KEY = ''
const SEARCH_ENGINE_ID = ''

// const keyword = 'motorcycle'

const imageSearch = async (keyword) => {
  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&searchType=image&q=${encodeURIComponent(
    keyword
  )}&num=${3}`

  try {
    const response = await axios.get(url)
    const images = response.data.items?.map((item) => item.link)

    return images
  } catch (error) {
    console.error('Error searching for images:', error.message)
    return []
  }
}

export default imageSearch
