import React from 'react';
import type { IProducts } from '../../../redux/state-slicers/2-e-commerce-cart/e-commerce-cart.type';
import { fetchProducts } from './fetchProducts';
import type { AppDispatch } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/state-slicers/2-e-commerce-cart/e-commerce-cart.slice';
import { Link } from 'react-router-dom';
import { createSlug } from '../../../utils/slug-util';
import { setProducts } from '../../../redux/state-slicers/2-e-commerce-cart/e-commerce-products-list-slice';

const ECommerceCartsUI = () => {
  //   const cartItemsLists = useSelector((state: RootState) => state.cartItem)
  // const productLists = useSelector((state: RootState) => state.productsList)
  const [products, setLocalProducts] = React.useState<IProducts[]>([]);
  const dispatch: AppDispatch = useDispatch()
  React.useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      if (data) {
        const updatedData: IProducts[] = data.map((product) => ({
          ...product,
          quantity: 0,
        }));

        setLocalProducts(updatedData); // update local state (optional)
        dispatch(setProducts(updatedData)); // dispatch directly
        console.log("Products fetched:", data);
      }
    };

    getProducts();
  }, []);

  return (
    <section className='flex flex-wrap w-full items-center justify-evenly'>
      {products.length > 0 ? products.map((item) => {
        return <div key={`${item.id}-${item.title}-${item.category}`} className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md max-w-xs w-[300px] m-4">
          <Link to={`product/${item.id}/${createSlug(item.title)}`}>
            <span className="relative mx-3 mt-3 flex h-40 overflow-hidden rounded-xl">
              <img
                src={item.image ?? "https://administracion.dlds.cl/1762/1762.jpg"}
                alt="Bong de vidrio 25cm"
                loading="lazy"
                className="object-contain w-full h-full"
              />
            </span>
          </Link>
          <div className="flex flex-col flex-grow mt-2 px-3 pb-3">
            <span className="block relative group">
              <h5 className="text-xs tracking-tight text-slate-900 font-bold flex items-center">
                {item.title}
                <span className="ml-1"></span>
              </h5>
            </span>
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
                <div className="flex items-center gap-1 mt-2 text-sm sm:text-base">
                  {[...Array(5)].map((_, index) => {
                    const filled = index < Math.round(item.rating?.rate ?? 0);
                    return (
                      <svg
                        key={index}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${filled ? "text-yellow-400" : "text-gray-300"} fill-current`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M10 15l-5.878 3.09L5.5 12.545.122 8.91l6.06-.909L10 2.5l3.818 5.501 6.06.909-5.378 3.636 1.378 5.545z" />
                      </svg>
                    );
                  })}
                  <span className="ml-1 text-gray-500 text-xs sm:text-sm">
                    ({item.rating?.count ?? 0})
                  </span>
                </div>


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
        :
        <h1>Product Fetched Error</h1>
      }
    </section>
  );
};

export default ECommerceCartsUI;
