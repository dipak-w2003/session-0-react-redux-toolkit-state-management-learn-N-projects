import type React from "react";
import { lazy } from "react";
const CounterPage = lazy(
  () => import("../../pages/state-management/0-counter/counter-page")
);
const ThemeTogglerPage = lazy(
  () =>
    import("../../pages/state-management/1-theme-toggler/theme-toggler-page")
);
const ECommercePage = lazy(
  () => import("../../pages/state-management/2-e-commerce-cart/e-commerce-page")
);
export interface IStateManagementUsagesCodesRoutes {
  name: string;
  path: string;
  element: React.FC;
}
export const usagesConstantPath: string = `/state-management-main-react-redux-toolkit/project`;

export const stateManagementUsagesCodesRoutesCollection: IStateManagementUsagesCodesRoutes[] =
  [
    {
      name: "Counter",
      path: `${usagesConstantPath}/0-simple-counter`,
      element: CounterPage,
    },
    {
      name: "Theme Changer",
      path: `${usagesConstantPath}/1-theme-toggler`,
      element: ThemeTogglerPage,
    },
    {
      name: "E-Commerce Cart Page",
      path: `${usagesConstantPath}/2-e-commerce-cart`,
      element: ECommercePage,
    },
  ];
