import React from 'react'
import './App.css';
import Header from './components/Header';
import {Routes,Route,NavLink} from "react-router-dom"
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
         <Route path='/' element={<Cards/>}/>
         <Route path='/cart/:id' element={<CardsDetails/>}/>
         {/* <Route path='/*' element={React.createElement('h3',null,"Page Not Found")} /> */} 
         <Route path='/*' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default App

