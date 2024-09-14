import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import GenreListPage from './pages/GenreListPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'filmes',
        element: <MovieListPage/>
      },
      {
        path: 'genero',
        element: <GenreListPage/>
      },
      {
        path: 'genero/:id',
        element: <GenreListPage/>
      },
      {
        path: 'filmes/:id',
        element: <GenreListPage/>
      },
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
