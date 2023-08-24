import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Categories from '../components/Categories';
import Slider from '../components/Slider';
import Products from './Products';
const Home = ({ data, status }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <>
            <Slider />
            <Categories data={data} status={status} />
            <Products data={data} status={status} />
        </>
    );
};

export default Home;
