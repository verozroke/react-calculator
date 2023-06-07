import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './views/home/Home';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<p>Page not found</p>} path='*' />
            </Routes>
        </BrowserRouter>
    )
}
