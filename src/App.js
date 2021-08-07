import React from 'react'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import './App.css';
const App = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  )
}

export default App
