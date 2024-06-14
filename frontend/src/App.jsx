import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home, CreateBooks, EditBook, DeleteBook, ShowBook} from './component/index'

const App = () => {
  return (
    <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/books/create' element={<CreateBooks/>}/>
      <Route path = '/books/edit/:id' element={<EditBook/>}/>
      <Route path = '/books/delete/:id' element={<DeleteBook/>}/>
      <Route path = '/books/details/:id' element={<ShowBook/>}/>
    </Routes>
  )
}

export default App