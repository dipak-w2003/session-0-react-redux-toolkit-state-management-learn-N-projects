import React, { lazy, Suspense } from "react";
import ProjectDescription from "../../../component/project-description/project-description";
import type { IProjectDescription } from "../../../component/project-description/project-descrption.type";
import { grabbedThemeTogglerCodes } from "../../../component/syntax-highlighter/codes/page-&-react-redux-toolkit-state-management/0-counter/themetoggler.pagecodes";
import SyntaxHighlighterProvider from "../../../component/syntax-highlighter/syntax-highlighter-0";
const ThemeTogglerUI = lazy(() => import("./theme-toggler-ui"));
const ThemeTogglerPage: React.FC<{}> = () => {
  const themeTogglerProjectDescription: IProjectDescription = {
    projectName: "Theme Toggler",
    projectSummary: "Simple Theme Toggling of Day & Night react-redux and @redux/toolkit.",
    projectDate:
    {
      projectFinishDate: "2025 July 27th",
      projectStartedDate: "2025 July 29th",
    },
  };

  return (
    <main className="h-fit min-h-[fit]  w-full mx-auto flex flex-col items-center  gap-10  rounded ">
      <Suspense fallback={<h1>Loading........</h1>}>
        <ThemeTogglerUI />
        <ProjectDescription projectName={themeTogglerProjectDescription.projectName} projectDate={themeTogglerProjectDescription.projectDate} projectSummary={themeTogglerProjectDescription.projectSummary} />
        {grabbedThemeTogglerCodes &&
          grabbedThemeTogglerCodes.map((icode) => {
            return (
              <div className="wrapper-code-comments-blog w-3/4 ">
                <span className="text-lg font-bold">{icode.location}</span>
                <SyntaxHighlighterProvider
                  key={`${icode.id}-${icode.name}-${icode.location}-${icode.lang}`}
                  codeContainerWidth={100}
                  code={icode.code}
                  language={icode.lang}
                  showLineNumbers
                  wrapLines={true}
                />
                <span className="text-lg text-justify ">{icode.comments}</span>
              </div>
            );
          })}
      </Suspense >
    </main>
  );
};

export default ThemeTogglerPage;
