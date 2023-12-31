import { FiLoader } from 'react-icons/fi';
import Product from '../components/Product';

const Products = ({ data, status, categoryName }) => {
    return (
        <div className="mt-20 container mx-auto">
            <h2 className="section-title uppercase text-center mb-10 text-3xl font-semibold tracking-widest">
                {categoryName ? `Browse ${categoryName}` : 'New Arrivals'}
            </h2>
            <div className="products-wrapper flex flex-wrap gap-10 justify-center">
                {status && (
                    <p className="col-span-full text-center">{status}</p>
                )}

                {data?.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
