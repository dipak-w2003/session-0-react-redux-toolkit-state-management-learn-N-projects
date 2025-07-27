export type IThemeCheck = "night" | "day";

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
