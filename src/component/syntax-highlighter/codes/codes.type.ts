import type { Language } from "../syntax-highlighter-0";

export interface ICodes {
  id: number;
  name: string;
  lang: Language;
  code: string;
  location?: string;
}
