import React, { lazy } from "react";
const ThemeTogglerUI = lazy(() => import("./theme-toggler-ui"));

const ThemeTogglerPage: React.FC<{}> = () => {
  return (
    <main className="h-fit min-h-[fit]  w-full mx-auto flex flex-col items-center  gap-10  rounded ">
      <ThemeTogglerUI />
    </main>
  );
};

export default ThemeTogglerPage;
