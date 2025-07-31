import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { stateManagementUsagesCodesRoutesCollection } from "./constants/routes/0-state-management-usages-codes-routes";
import NavBar from "./component/nav-bar/nav-bar";
import Footer0 from "./component/footers/0-footer";
import ProductDetailPage from "./pages/state-management/2-e-commerce-cart/e-commerce-product-detail-page";

const HomePage = lazy(() => import("./component/home-page/home-page"));
const Page_1_404 = lazy(() => import("./component/page-404/page-1-404"));
const StateManagementMainPage = lazy(
  () => import("./pages/state-management/state-managment-main")
);

// Shared layout with NavBar + Footer
const Layout = () => (
  <>
    <NavBar />
    {/* 
    <Outlet /> renders the matched child route component here.
      Think of it as a placeholder for nested routes.
    */}
    <Outlet />
    <Footer0 />
  </>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 👈 shared layout
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "state-management-main-react-redux-toolkit",
        element: <StateManagementMainPage />,
      },
      {
        path: "state-management-main-react-redux-toolkit/project",
        children: stateManagementUsagesCodesRoutesCollection.map(
          ({ path, element: Element }) => ({
            path,
            element: <Element />,
          })
        ),
      },
      {
        index: true,
        path: "state-management-main-react-redux-toolkit/project/2-e-commerce-cart/product/:productId/:slug?",
        element: <ProductDetailPage />
      },
      {
        path: "*",
        element: <Page_1_404 />,
      },
    ],
  },
]);
