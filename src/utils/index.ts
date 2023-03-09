import { Category } from '../types'

export const handlePagination = (
  items: Category[],
  currentPage: number,
  itemsPerPage: number
) => {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = items.slice(startIndex, endIndex)
  return currentItems
}

export const formatDate = (date: string) => {
  return date
    .replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3/$2/$1')
    .replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3')
}
