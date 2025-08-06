import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../../redux/store"
import { increaseItemQuantity, decreaseItemQuantity, removeFromCart } from "../../../redux/state-slicers/2-e-commerce-cart/e-commerce-cart.slice"

export default function ECommerceCartDashboard() {
  const cartItems = useSelector((state: RootState) => state.cartItem)
  const dispatch: AppDispatch = useDispatch()

  console.log("updating ", cartItems);

  return <main className="flex flex-col w-full min-h-[100vh] items-center bg-gray-800">

    <header className="text-5xl my-[5vh]">{cartItems.length > 0 ? 'Cart Items' : 'No Items Added'}</header>

    <section className="flex flex-col h-full w-full items-center gap-2.5">
      {
        cartItems && cartItems.map((item, _) => {
          return (
            <div key={`${item.id}-${item.title}-${item.quantity}`} className="h-[100px] rounded w-3/4 bg-black text-white flex items-center gap-2 overflow-hidden relative">
              {/*Heading*/}
              <span className="h-full w-[150px] bg-green-600 *:h-full *:w-full">
                <img src={item.image ?? "https://somelocalImage"} alt={"Product-Image"} />
              </span>

              {/*Item Detail*/}
              <div className=" h-full flex flex-col gap-2 justify-center">
                <header> {item.title}</header>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-gray-800 dark:text-gray-300">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => dispatch(decreaseItemQuantity({ id: +item.id }))} className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white px-3 py-1 rounded-full font-bold">–</button>
                    <span className="text-lg">{item?.quantity ?? 0}</span>
                    <button onClick={() => dispatch(increaseItemQuantity({ id: +item.id }))} className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white px-3 py-1 rounded-full font-bold">+</button>
                  </div>
                </div>
              </div>


              {/*Order Action*/}

              <div className="flex items-center gap-2 flex-col absolute right-2 *:cursor-pointer" >
                <button onClick={() => dispatch(removeFromCart({ id: item.id }))} className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white px-3 py-1 rounded-full font-bold">Remove</button>
                {+item.quantity > 0 ? <button className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white px-3 py-1 rounded-full font-bold">Order. </button> : " "}
              </div>

            </div>



          )
        })
      }



    </section>

  </main >
}

