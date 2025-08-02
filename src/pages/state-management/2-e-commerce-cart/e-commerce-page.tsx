import { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../redux/store'
import NavigateButton from '../../../component/Button/navigate-button'

const ECommerceCartsUI = lazy(() => import('./e-commerce-carts-ui'))
const ECommercePage = () => {
  const cartItems = useSelector((state: RootState) => state.cartItem)
  return (
    <main className='relative'>
      <Suspense fallback={<p>...loading items</p>}>
        <ECommerceCartsUI />

        {/* Navigate cart dashboard
          Idea drop

        */}
        {
          cartItems && cartItems.length > 0 &&
          <span
            className='curosor-pointer fixed bottom-2 right-2 h-18 w-18 flex items-center justify-center rounded-full bg-orange-400 overflow-hidden'>
            <NavigateButton tailwindCSSProps={false} btnName='' navigateWhere={"/state-management-main-react-redux-toolkit/project/2-e-commerce-cart/dashboard"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
            </NavigateButton>
          </span>

        }
      </Suspense>
    </main>
  )
}

export default ECommercePage
