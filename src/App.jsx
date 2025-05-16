import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Collection } from './composant/Collection'
import { Home } from './composant/Home'

function App() {

    return (
        <>
            <BrowserRouter basename='/React-Bookstore'>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/collection' element={<Collection/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
