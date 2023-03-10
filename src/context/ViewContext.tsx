import React, { createContext, useState, ReactNode, useContext } from 'react'

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

  return (
    <ViewContext.Provider value={{ viewType, setViewType }}>
      {children}
    </ViewContext.Provider>
  )
}

export function useView(): ViewContextData {
  const context = useContext(ViewContext)

  return context
}
