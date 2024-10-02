import React from 'react'

const NxtWaveWatchContext = React.createContext({
  isDarkTheme: '',
  activeTab: 'Home',
  toggleTheme: () => {},
  changeTab: () => {},
  savedVideosList: [],
  addSaveVideo: () => {},
})

export default NxtWaveWatchContext