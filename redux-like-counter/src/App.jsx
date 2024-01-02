import React from 'react'
import './App.css'
import LikeCounter, { Store } from './components/LikeCounter'
import { Provider } from 'react-redux'

function App() {


  return (
    <Provider store={Store}>
      <LikeCounter />
    </Provider>
  )
}

export default App
