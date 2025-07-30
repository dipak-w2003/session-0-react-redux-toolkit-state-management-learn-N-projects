// slugUtil.ts

/**
 * Converts a string (like a title) into a clean slug for URLs.
 * Example: "Hello World!" => "hello-world"
 */
export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with "-"
    .replace(/(^-|-$)/g, ""); // Trim leading/trailing "-"
}
