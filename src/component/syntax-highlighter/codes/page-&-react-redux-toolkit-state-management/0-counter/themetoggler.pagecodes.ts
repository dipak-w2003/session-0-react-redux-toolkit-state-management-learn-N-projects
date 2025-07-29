import type { ICodes } from "../../codes.type";

export const grabbedThemeTogglerCodes: ICodes[] = [
    {
        id: 0,
        name: "theme-toggler-page.tsx",
        lang: "typescript",
        location: "src/pages/state-management/1-theme-toggler/theme-toggler-page.tsx",
        code: `import React, { lazy } from "react";
import ProjectDescription from "../../../component/project-description/project-description";
import type { IProjectDescription } from "../../../component/project-description/project-descrption.type";
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
      <ProjectDescription projectName={themeTogglerProjectDescription.projectName} projectDate={themeTogglerProjectDescription.projectDate} projectSummary={themeTogglerProjectDescription.projectSummary} />
      <ThemeTogglerUI />
    </main>
  );
};

export default ThemeTogglerPage;
`,
        comments: `comments`
    },
    {
        id: 1,
        name: "theme-toggler-ui.tsx",
        lang: "typescript",
        location: "src/pages/state-management/1-theme-toggler/theme-toggler-ui.tsx",
        code: `import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import { getTheme } from "../../../redux/state-slicers/1-theme-toggler/theme-changer.type";
import { toggleTheme } from "../../../redux/state-slicers/1-theme-toggler/theme-changer.slice";

const ThemeTogglerUI: React.FC = () => {
  const { theme } = useSelector((state: RootState) => state.themeChoose);
  const dispatch: AppDispatch = useDispatch();

  const themeCheck = getTheme(theme);

  return (
    <div
      style={{
        backgroundColor: themeCheck.bgColor,
        color: themeCheck.textColor,
      }}
      className="min-h-screen w-full"
    >
      {/* Nav */}
      <header
        className="flex justify-between items-center px-6 py-4 border-b"
        style={{ borderColor: themeCheck.borderColor }}
      >
        <nav className="space-x-6 text-sm font-medium">
          {["Home", "About", "Contact"].map((label) => (
            <a
              key={label}
              style={{ color: themeCheck.linkColor }}
              className="hover:underline"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="px-4 py-2 rounded  cursor-pointer"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme !== "day" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </header>

      {/* Main content */}
      <main className="max-w-3xl mx-auto p-8 space-y-20">
        {/* Home */}
        <section id="home">
          <h1 className="text-4xl font-bold mb-4">Welcome to Toklati</h1>
          <p style={{ color: themeCheck.secondaryTextColor }}>
            Your special CTC tea experience starts here.
          </p>
          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 rounded border font-semibold transition"
            style={{
              backgroundColor: themeCheck.buttonBgColor,
              color: themeCheck.buttonTextColor,
              borderColor: themeCheck.buttonBorderColor,
            }}
          >
            Learn More
          </a>
        </section>

        {/* About */}
        <section id="about">
          <h2 className="text-3xl font-semibold mb-4">About Toklati</h2>
          <p style={{ color: themeCheck.secondaryTextColor }}>
            Toklati blends tradition and bold flavors into a special cup of
            black tea. Every sip is crafted from the finest CTC leaves.
          </p>
          <ul
            className="list-disc pl-5 mt-4"
            style={{ color: themeCheck.secondaryTextColor }}
          >
            <li>Premium Assam leaves</li>
            <li>Strong aroma and rich taste</li>
            <li>No added sugar</li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <form className="space-y-6 max-w-lg">
            <div>
              <label className="block mb-2 font-medium" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                style={{
                  backgroundColor: themeCheck.inputBgColor,
                  color: themeCheck.inputTextColor,
                  borderColor: themeCheck.inputBorderColor,
                  borderWidth: 1,
                }}
                className="w-full px-4 py-2 rounded outline-none placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message..."
                style={{
                  backgroundColor: themeCheck.inputBgColor,
                  color: themeCheck.inputTextColor,
                  borderColor: themeCheck.inputBorderColor,
                  borderWidth: 1,
                }}
                className="w-full px-4 py-2 rounded outline-none placeholder:text-gray-400"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 rounded border font-semibold"
              style={{
                backgroundColor: themeCheck.buttonBgColor,
                color: themeCheck.buttonTextColor,
                borderColor: themeCheck.buttonBorderColor,
              }}
            >
              Send
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ThemeTogglerUI;
`,
        comments: `comments`
    },
    {
        id: 2,
        name: "theme-changer.type.ts",
        lang: "typescript",
        location: "src/redux/state-slicers/1-theme-toggler/theme-changer.type.ts",
        code: `export type IThemeCheck = "night" | "day";

export interface ITheme {
  name: IThemeCheck;

  // Base colors
  bgColor: string;
  textColor: string;
  secondaryTextColor: string;

  // UI Elements
  borderColor: string;
  shadowColor: string;
  cardBgColor: string;

  // Buttons
  buttonBgColor: string;
  buttonTextColor: string;
  buttonHoverBgColor: string;
  buttonActiveBgColor: string;
  buttonBorderColor: string;

  // Inputs & Forms
  inputBgColor: string;
  inputTextColor: string;
  inputBorderColor: string;
  inputPlaceholderColor: string;
  inputFocusBorderColor: string;

  // Links
  linkColor: string;
  linkHoverColor: string;

  // Alerts
  successColor: string;
  warningColor: string;
  errorColor: string;
  infoColor: string;

  // Misc
  scrollbarThumb: string;
  scrollbarTrack: string;
  backdropColor: string;
  overlayColor: string;

  // Optional decorative or utility colors
  accentColor: string;
  mutedColor: string;
}

// Themes list
export const themes: ITheme[] = [
  {
    name: "night",

    bgColor: "#0f0f0f",
    textColor: "#f5f5f5",
    secondaryTextColor: "#a1a1aa",

    borderColor: "#2e2e2e",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    cardBgColor: "#1a1a1a",

    buttonBgColor: "#2a2a2a",
    buttonTextColor: "#ffffff",
    buttonHoverBgColor: "#333333",
    buttonActiveBgColor: "#3b3b3b",
    buttonBorderColor: "#444444",

    inputBgColor: "#1e1e1e",
    inputTextColor: "#ffffff",
    inputBorderColor: "#3a3a3a",
    inputPlaceholderColor: "#888888",
    inputFocusBorderColor: "#60a5fa",

    linkColor: "#8ab4f8",
    linkHoverColor: "#a1c2fa",

    successColor: "#22c55e",
    warningColor: "#eab308",
    errorColor: "#f87171",
    infoColor: "#60a5fa",

    scrollbarThumb: "#444444",
    scrollbarTrack: "#1a1a1a",

    backdropColor: "rgba(255, 255, 255, 0.1)",
    overlayColor: "rgba(255, 255, 255, 0.25)",

    accentColor: "#60a5fa",
    mutedColor: "#3f3f46",
  },
  {
    name: "day",

    bgColor: "#ffffff",
    textColor: "#111111",
    secondaryTextColor: "#4b5563",

    borderColor: "#e5e7eb",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    cardBgColor: "#f9fafb",

    buttonBgColor: "#f3f4f6",
    buttonTextColor: "#111111",
    buttonHoverBgColor: "#e5e7eb",
    buttonActiveBgColor: "#d1d5db",
    buttonBorderColor: "#d1d5db",

    inputBgColor: "#ffffff",
    inputTextColor: "#111111",
    inputBorderColor: "#d1d5db",
    inputPlaceholderColor: "#9ca3af",
    inputFocusBorderColor: "#2563eb",

    linkColor: "#2563eb",
    linkHoverColor: "#1d4ed8",

    successColor: "#10b981",
    warningColor: "#f59e0b",
    errorColor: "#ef4444",
    infoColor: "#3b82f6",

    scrollbarThumb: "#cbd5e1",
    scrollbarTrack: "#f1f5f9",

    backdropColor: "rgba(0, 0, 0, 0.1)",
    overlayColor: "rgba(0, 0, 0, 0.25)",

    accentColor: "#3b82f6",
    mutedColor: "#e5e7eb",
  },
];

// Optional: Find theme by name
export const getTheme = (theme: IThemeCheck): ITheme =>
  themes.find((t) => t.name === theme)!;
`,
        comments: `comments`

    },
    {
        id: 3,
        name: "theme-changer.slice.ts",
        lang: "typescript",
        location: "src/redux/state-slicers/1-theme-toggler/theme-changer.slice.ts",
        code: `import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IThemeCheck } from "./theme-changer.type";
interface IinitialState {
  theme: IThemeCheck;
}
const initialState: IinitialState = {
  theme: "night",
};
const themeChooseSlice = createSlice({
  name: "themeChoose",
  initialState: initialState,
  reducers: {
    setTheme(state, action: PayloadAction<IThemeCheck>) {
      state.theme = action.payload;
    },
    toggleTheme(state) {
      const toggledTheme = state.theme === "day" ? "night" : "day";
      state.theme = toggledTheme;
    },
    resetTheme(state) {
      state.theme = "day";
    },
  },
});

export const { setTheme, resetTheme, toggleTheme } = themeChooseSlice.actions;
export default themeChooseSlice.reducer;
`,
        comments: `comments`
    },
    {
        id: 4,
        name: "store.ts",
        lang: "typescript",
        location: "src/redux/store.ts",
        code: `import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./state-slicers/0-counter/counter.slice";
import themeChooseSlice from "./state-slicers/1-theme-toggler/theme-changer.slice";
const store = configureStore({
  reducer: {
    counter: counterSlice,
    themeChoose: themeChooseSlice,
  },
});

// Infer the 'Rootstate' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
`,
        comments: `comments`

    },

];
