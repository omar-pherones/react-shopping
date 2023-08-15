import Categories from '../components/Categories';
import Slider from '../components/Slider';
import Products from './Products';

const Home = ({ data, loading, error }) => {
    return (
        <>
            <Slider />
            <Categories data={data} loading={loading} error={error} />
            <Products data={data} loading={loading} error={error} />
        </>
    );
};

export default Home;
