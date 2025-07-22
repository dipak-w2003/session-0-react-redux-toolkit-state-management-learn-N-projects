import type React from "react";
import CounterPage from "../../pages/state-management/0-counter/counter-page";
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
  ];
