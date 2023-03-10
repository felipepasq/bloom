import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useMemo
} from 'react'

type ViewContextProviderProps = {
  children: ReactNode
}

type ViewContextData = {
  viewType: 'list' | 'grid'
  setViewType: React.Dispatch<React.SetStateAction<'list' | 'grid'>>
}
export const ViewContext = createContext<ViewContextData>({} as ViewContextData)
export const ViewContextProvider = ({ children }: ViewContextProviderProps) => {
  const [viewType, setViewType] = useState<'list' | 'grid'>('list')

  const contextValue = useMemo(() => {
    return { viewType, setViewType }
  }, [viewType])

  return (
    <ViewContext.Provider value={contextValue}>{children}</ViewContext.Provider>
  )
}

export function useView(): ViewContextData {
  const context = useContext(ViewContext)

  return context
}
