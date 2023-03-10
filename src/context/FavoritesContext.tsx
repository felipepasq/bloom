import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useMemo
} from 'react'
import { toast } from 'react-toastify'
import { Book } from '../types'

type FavoritesContextProviderProps = {
  children: ReactNode
}

type FavoritesContextData = {
  favorites: Book[]
  setFavorites: React.Dispatch<React.SetStateAction<Book[]>>
  showFavoritesBar: boolean
  setShowFavoritesBar: React.Dispatch<React.SetStateAction<boolean>>
  addToFavorites: (book: Book) => void
  removeFavorite: (bookTitle: string) => void
}
export const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
)
export const FavoritesContextProvider = ({
  children
}: FavoritesContextProviderProps) => {
  const [favorites, setFavorites] = useState<Book[]>(() => {
    const storagedFavorites = localStorage.getItem('@BloomBooks:favorites')
    if (storagedFavorites) {
      return JSON.parse(storagedFavorites)
    }
    return []
  })
  const [showFavoritesBar, setShowFavoritesBar] = useState(false)

  const addToFavorites = (book: Book) => {
    if (favorites.length === 10) {
      toast('❌ Limite de favoritos atingido')
    } else {
      localStorage.setItem(
        '@BloomBooks:favorites',
        JSON.stringify([...favorites, book])
      )
      setFavorites([...favorites, book])
    }
  }

  const removeFavorite = (bookTitle: string) => {
    const updatedFavorites = favorites

    const filteredFavorites = updatedFavorites.filter(
      (favorite) => favorite.title !== bookTitle
    )

    localStorage.setItem(
      '@BloomBooks:favorites',
      JSON.stringify(filteredFavorites)
    )

    setFavorites(filteredFavorites)
  }

  const contextValue = useMemo(() => {
    return {
      favorites,
      setFavorites,
      showFavoritesBar,
      setShowFavoritesBar,
      addToFavorites,
      removeFavorite
    }
  }, [favorites, showFavoritesBar])

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites(): FavoritesContextData {
  const context = useContext(FavoritesContext)

  return context
}
