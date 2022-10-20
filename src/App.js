import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Celebrity from './pages/Celebrity';
import Home from './pages/Home';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Tv from './pages/Tv';
import Header from './components/Header';
import './css/page.css';
import MovieDetail from './pages/MovieDetail';
import Login from './pages/Login';
import TodoMain from './todolist/TodoMain';

const App = () => {
  return (
    <div className='root-wrap'>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/movie/:title" element={<MovieDetail />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/list" element={<TodoMain />} />
            <Route path="/not" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;