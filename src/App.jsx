import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
// import Products from './pages/Products';
// import Cart from './pages/Cart';
// import NotFound from './pages/NotFound';
const App = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const getProductsFromApi = async () => {
        const res = await fetch(
            'https://eager-sable-airedale.glitch.me/products'
        );
        if (!res.ok) throw new error('Somthing went wrong');
        const data = await res.json();
        if (data?.result === 0) throw new error('Somthing went wrong');
        setProducts(data);
    };
    useEffect(() => {
        getProductsFromApi();
    }, []);
    return (
        <BrowserRouter>
            <div className="app  bg-gray-50 text-gray-700">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                data={products}
                                error={error}
                                loading={loading}
                            />
                        }
                    />
                    <Route
                        path="shop/"
                        element={
                            <Products
                                data={products}
                                loading={loading}
                                error={error}
                            />
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Newsletter />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
