import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { Home } from './components/Home'
import { About } from './components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Post } from './components/Post'
import { Redirect } from './components/Redirect'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/posts/:id' element={<Post />} />
      <Route path='/posts' element={<Post />} />
      <Route path='/redirect' element={<Redirect />} />
    </Routes>
  </BrowserRouter>
)
