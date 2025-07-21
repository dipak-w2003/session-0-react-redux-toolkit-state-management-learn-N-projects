import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

const HomePage = lazy(() => import("./component/home-page/home-page"));
const Page_1_404 = lazy(() => import("./component/page-404/page-1-404"));
const StateManagementMainPage = lazy(
  () => import("./pages/state-management/state-managment-main")
);
const CounterPage = lazy(
  () => import("./pages/state-management/0-counter/counter-page")
);
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/state-management-main-react-redux-toolkit/",
    element: <StateManagementMainPage />,
  },
  {
    path: "/state-management-main-react-redux-toolkit/project",
    children: [{ path: "simple-counter", element: <CounterPage /> }],
  },
  {
    path: "*",
    element: <Page_1_404 />,
  },
]);
