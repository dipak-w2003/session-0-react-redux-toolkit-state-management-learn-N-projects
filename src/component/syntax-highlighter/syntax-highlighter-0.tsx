import React, { useState, type MouseEventHandler } from "react";
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
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard: MouseEventHandler<HTMLButtonElement> = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className="relative"
      style={{ width: codeContainerWidth ? `${codeContainerWidth}%` : "auto" }}
    >
      <button
        onClick={copyToClipboard}
        aria-label="Copy code to clipboard"
        className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded 
          transition-colors duration-300
          ${
            copied
              ? "bg-green-600 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
        `}
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      <SyntaxHighlighter
        wrapLongLines={true}
        language={language}
        style={nord}
        showLineNumbers={showLineNumbers}
        wrapLines={wrapLines}
        customStyle={{
          borderRadius: 8,
          padding: "0.5rem",
          overflow: "auto",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default SyntaxHighlighterProvider;
