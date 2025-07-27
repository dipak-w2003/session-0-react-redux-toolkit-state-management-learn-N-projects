import React, { lazy } from "react";
import SyntaxHighlighterProvider from "../../../component/syntax-highlighter/syntax-highlighter-0";
import { grabbedCounterCodes } from "../../../component/syntax-highlighter/codes/page-&-react-redux-toolkit-state-management/0-counter/counter.pagecodes";
import ProjectDescription from "../../../component/project-description/project-description";
import { counterProjectDescription } from "./counter-project-description";

const CounterUI = lazy(() => import("./counter-ui-"));

const CounterPage: React.FC = () => {
  return (
    <main className="h-fit min-h-[fit]  w-fit mx-auto flex flex-col items-center py-4 gap-10  rounded px-4">
      <CounterUI />

      <ProjectDescription
        projectName={counterProjectDescription.projectName}
        projectSummary={counterProjectDescription.projectSummary}
        projectDate={counterProjectDescription.projectDate}
      />

      {grabbedCounterCodes &&
        grabbedCounterCodes.map((icode) => {
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
    </main>
  );
};

export default CounterPage;
