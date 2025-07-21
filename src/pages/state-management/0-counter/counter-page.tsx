import { lazy } from "react";
import SyntaxHighlighterProvider from "../../../component/syntax-highlighter/syntax-highlighter-0";
import { grabbedCounterCodes } from "../../../component/syntax-highlighter/codes/page-&-react-redux-toolkit-state-management/0-counter/counter.pagecodes";

const CounterUI = lazy(() => import("./counter-ui-"));

const CounterPage = () => {
  return (
    <main className="h-fit min-h-[fit]  w-fit mx-auto flex flex-col items-center py-4 gap-4  rounded px-4">
      <CounterUI />

      {grabbedCounterCodes &&
        grabbedCounterCodes.map((icode) => {
          return (
            <SyntaxHighlighterProvider
              codeContainerWidth={100}
              code={icode.code}
              language={icode.lang}
              showLineNumbers
              wrapLines={true}
            />
          );
        })}
    </main>
  );
};

export default CounterPage;
