import Categories from '../components/Categories';
import Slider from '../components/Slider';
import Products from './Products';

const Home = ({ data, status }) => {
    return (
        <>
            <Slider />
            <Categories data={data} status={status} />
            <Products data={data} status={status} />
        </>
    );
};

export default Home;
