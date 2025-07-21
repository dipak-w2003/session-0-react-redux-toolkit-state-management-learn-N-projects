import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

export type Language =
  | "javascript"
  | "typescript"
  | "jsx"
  | "tsx"
  | "python"
  | "java"
  | "c"
  | "cpp"
  | "html"
  | "css";

type Props = {
  code: string;
  language?: Language;
  showLineNumbers?: boolean;
  wrapLines?: boolean;
  codeContainerWidth?: number;
};

const SyntaxHighlighterProvider: React.FC<Props> = ({
  code,
  language = "typescript",
  showLineNumbers = true,
  wrapLines = true,
  codeContainerWidth,
}) => {
  return (
    <SyntaxHighlighter
    wrapLongLines={true}
      language={language}
      style={nord}
      showLineNumbers={showLineNumbers}
      wrapLines={wrapLines}
      customStyle={{
        borderRadius: 8,
        padding: "0.5rem",
        width: `${codeContainerWidth ? codeContainerWidth + "%" : "fit"}`,
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default SyntaxHighlighterProvider;
