import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY
const api = {
  getAllCategories: () =>
    axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${apiKey}`
    )
}

export { api }
