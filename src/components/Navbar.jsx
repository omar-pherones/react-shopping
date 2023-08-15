import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    // sticky navbar
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <nav
                className={`nav border text-white border-black/[0.1] w-full ${
                    scrolled ? 'sticky-header' : ''
                }`}
            >
                <div className="container mx-auto flex items-center justify-between h-[50px] md:h-[70px]">
                    <ul className="left hidden md:flex gap-6 ">
                        <li>
                            <Link
                                to="/"
                                className="text-sm font-medium uppercase hover:opacity-[0.6]"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="text-sm font-medium uppercase hover:opacity-[0.6]">
                            <Link to="shop">Shop</Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="text-sm font-medium uppercase hover:opacity-[0.6]"
                            >
                                Categories
                            </Link>
                        </li>
                    </ul>
                    <div className="center text-xl font-bold uppercase md:text-3xl ">
                        <Link onClick={() => navigate('/')}>
                            Redux<span className="tronics">Store.</span>
                        </Link>
                    </div>
                    <div className="right flex gap-5 items-center md:gap-6">
                        <TbSearch className="text-xl cursor-pointer hover:opacity-[0.6] md:text-xl" />
                        <AiOutlineHeart className="text-xl cursor-pointer hover:opacity-[0.6] md:text-xl" />
                        <span className="cart-icon relative ">
                            <CgShoppingCart className=" text-xl cursor-pointer hover:opacity-[0.6] md:text-xl" />
                            <span className="cart-count absolute -top-2 -right-3 text-xs w-5 text-center">
                                5
                            </span>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
