import React from 'react';
import type { ICarts } from '../../../redux/state-slicers/2-e-commerce-cart/e-commerce-cart.type';
import { fetchProducts } from './fetchProducts';
import type { AppDispatch, RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/state-slicers/2-e-commerce-cart/e-commerce-cart.slice';

const ECommerceCartsUI = () => {
    const cartItemsLists = useSelector((state: RootState) => state.cartItem)
    const [products, setProducts] = React.useState<ICarts[]>([]);
    const dispatch: AppDispatch = useDispatch()
    React.useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            if (data) {
                const updatedData = data.map(product => ({ ...product, quantity: 0 }));
                setProducts(updatedData);
                console.log('Products fetched:', data);
            }
        };
        getProducts();
    }, []);
    const isItemInCart = (title: string, id: number): boolean => {
        const filterItem = cartItemsLists.find(item => item.title === title && item.id === id)
        if (filterItem) return true;
        else return false;
    }
    const itemQuantity = (id: number): number => {
        const filterItem = cartItemsLists.find(item => item.id === id)
        if (filterItem) return filterItem.quantity;
        else return 0;
    }
    return (
        <section className='flex flex-wrap w-full items-center justify-evenly'>
            {products.length > 0 && products.map((item) => {
                return <div key={`${item.id}-${item.title}-${item.category}`} className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md max-w-xs w-[300px] m-4">
                    <a href="#" className="relative mx-3 mt-3 flex h-40 overflow-hidden rounded-xl">
                        <img
                            src={item.image ?? "https://administracion.dlds.cl/1762/1762.jpg"}
                            alt="Bong de vidrio 25cm"
                            loading="lazy"
                            className="object-contain w-full h-full"
                        />
                    </a>
                    <div className="flex flex-col flex-grow mt-2 px-3 pb-3">
                        <a href="/p/1/bong-vidrio-25cm" className="block relative group">
                            <h5 className="text-xs tracking-tight text-slate-900 font-bold flex items-center">
                                {item.title}
                                <span className="ml-1"></span>
                            </h5>
                        </a>
                        <div className="mt-auto">
                            <div className="flex flex-col items-start">
                                <span className="text-xl font-bold text-red-600">
                                    ${item.price}
                                </span>
                                <div className="flex items-center">
                                    <span className="text-lg text-gray-500 line-through">
                                        ${(Math.floor(Math.random() * 100) + +item.price).toFixed(2)}
                                    </span>

                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-3">

                                {isItemInCart(item.title, item.id) &&
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 focus:outline-none"
                                            disabled
                                        >-</button>
                                        <input
                                            type="number"
                                            min="1"
                                            value={itemQuantity(item.id)}
                                            className="w-14 text-center border rounded focus:outline-none"
                                            readOnly
                                        />
                                        <button
                                            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 focus:outline-none"
                                            disabled
                                        >+</button>
                                    </div>
                                }
                                <button
                                    onClick={() => dispatch(addToCart(item))}
                                    className="bg-[#0CAA91] cursor-pointer text-white p-3 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-[#078c6d] focus:outline-none"
                                    style={{ width: '50px', height: '50px' }}
                                >
                                    <img src="https://www.freeiconspng.com/uploads/cart-icon-16.png" alt="Carrito" className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            })
            }
        </section>
    );
};

export default ECommerceCartsUI;
