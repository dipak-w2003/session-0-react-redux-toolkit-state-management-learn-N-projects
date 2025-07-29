import React, { lazy, Suspense } from 'react'
const ECommerceCartsUI = lazy(() => import('./e-commerce-carts-ui'))

const ECommercePage = () => {
    return (
        <main>
            <Suspense fallback={<p>...loading items</p>}>
                <ECommerceCartsUI />
            </Suspense>
        </main>
    )
}

export default ECommercePage