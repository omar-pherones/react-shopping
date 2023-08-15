import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Products from './pages/Products';
// import Cart from './pages/Cart';
// import NotFound from './pages/NotFound';
const App = () => {
    return (
        <BrowserRouter>
            <div className="app min-h-screen bg-gray-50 text-gray-700">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
