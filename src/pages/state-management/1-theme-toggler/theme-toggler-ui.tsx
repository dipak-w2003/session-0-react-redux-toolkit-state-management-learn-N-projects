import React from "react";
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
              href={`#${label.toLocaleLowerCase()}`}
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
