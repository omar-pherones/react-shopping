import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const { items: products, status } = useSelector((state) => state.products);

    return (
        <BrowserRouter>
            <div className="app  bg-gray-50 text-gray-700">
                <Navbar />
                <ToastContainer />
                <Routes>
                    <Route
                        path="/"
                        element={<Home data={products} status={status} />}
                    />
                    <Route
                        path="/shop"
                        element={<Products data={products} status={status} />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Newsletter />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
