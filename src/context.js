import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value='hero'>{children}</AppContext.Provider>
}

//hook

export const useGlobalContext = () => {
  return useContext(AppContext)
}
