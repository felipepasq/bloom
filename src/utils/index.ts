export const formatDate = (date: string) => {
  return date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3/$2/$1')
}

export const formatImageUrl = (url: string) => {
  return url.replace(/\\/g, '')
}

export const getCategoryFromURL = (url: string) => {
  return url.replace(/\/category\//, '')
}

export const generateRandomPrice = () => {
  return Math.floor(Math.random() * (50 - 15 + 1)) + 15
}
