import { FiLoader } from 'react-icons/fi';
import Product from '../components/Product';

const Products = ({ loading, error, data, categoryName }) => {
    return (
        <div className="mt-20 container mx-auto">
            {loading ? (
                <span className="loader text-center block text-xl">
                    <FiLoader className="inline-block animate-spin" />
                </span>
            ) : error ? (
                <p className="error-message text-center text-rose-500">
                    Something went wrong
                </p>
            ) : (
                <>
                    <h2 className="section-title uppercase text-center mb-10 text-3xl font-semibold tracking-widest">
                        {categoryName
                            ? `Browse ${categoryName}`
                            : 'New Arrivals'}
                    </h2>
                    <div className="products-wrapper flex flex-wrap gap-10 justify-center">
                        {data?.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Products;
