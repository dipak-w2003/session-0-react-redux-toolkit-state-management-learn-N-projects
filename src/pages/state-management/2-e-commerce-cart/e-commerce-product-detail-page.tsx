import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { RootState } from "../../../redux/store";

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  // convert persist based data into array from object
  const productsList = Object.values(useSelector((state: RootState) => state.productsList));
  const cartItems = useSelector((state: RootState) => state.cartItem);
  const product = productsList.find(
    (item) => item.id === Number(productId)
  );

  if (!product) return <h1>Page Not Found</h1>
  const getCartItemQty = cartItems.find(item => item.id == Number(productId))
  console.log(getCartItemQty);


  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <div className="h-[400px] sm:h-[460px] rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <img
                src={product?.image || "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"}
                alt={product?.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{product?.title}</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{product?.description}</p>

              {/* Price */}
              <div className="mb-4">
                <span className="font-bold text-gray-800 dark:text-gray-300">Price:</span>
                <span className="ml-2 text-lg text-green-600 font-semibold">${product?.price}</span>
              </div>

              {/* Rating */}
              <div className="mb-4 flex items-center gap-2">
                <span className="font-bold text-gray-800 dark:text-gray-300">Rating:</span>
                <span className="text-yellow-500 font-semibold">{product?.rating.rate.toFixed(1)} ★</span>
                <span className="text-sm text-gray-500">({product?.rating.count} reviews)</span>
              </div>

              {/* Quantity Controls (placeholder logic) */}
              <div className="mb-4 flex items-center gap-4">
                <span className="font-bold text-gray-800 dark:text-gray-300">Quantity:</span>
                <div className="flex items-center gap-2">
                  <button className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white px-3 py-1 rounded-full font-bold">–</button>
                  <span className="text-lg">{0}</span>
                  <button className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white px-3 py-1 rounded-full font-bold">+</button>
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <span className="font-bold text-gray-800 dark:text-gray-300">Select Size:</span>
                <div className="flex gap-2 mt-2">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-400 dark:hover:bg-gray-600"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button className="flex-1 bg-[#0CAA91] hover:bg-[#08967a] text-white py-3 rounded-full font-bold transition">
                Add to Cart
              </button>
              <button className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-3 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
