import { useState } from 'react';
import Products from '../pages/Products';
const Categories = ({ data, status }) => {
    const [categoryName, setCategoryName] = useState('');
    const [categorised, setCategorised] = useState('');

    const handleCategory = (e) => {
        const findeCategory = e.target.dataset.category;
        const filteredData = data?.filter(
            (product) => product.category === findeCategory
        );
        setCategorised(filteredData);
        setCategoryName(findeCategory);
    };

    return (
        <>
            <div className="categories  grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:text-4xl text-2xl text-center font-medium text-gray-50">
                <div
                    className="camera h-48 sm:h-96 sm:row-span-2 sm:col-span-2 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
                    data-category="Camera"
                    onClick={handleCategory}
                >
                    Camera
                </div>
                <div
                    className="tv h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
                    data-category="TV"
                    onClick={handleCategory}
                >
                    TV
                </div>
                <div
                    className="console h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
                    data-category="Console"
                    onClick={handleCategory}
                >
                    Console
                </div>
                <div
                    className="headphones h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
                    data-category="Headphones"
                    onClick={handleCategory}
                >
                    Headphones
                </div>
                <div
                    className="smart-watches h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300"
                    data-category="Smart Watches"
                    onClick={handleCategory}
                >
                    Smart Watches
                </div>
            </div>
            {categorised && (
                <Products
                    categoryName={categoryName}
                    status={status}
                    data={categorised}
                />
            )}
        </>
    );
};

export default Categories;
