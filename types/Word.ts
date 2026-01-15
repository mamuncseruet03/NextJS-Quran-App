import Translation from "./Translation";
import TranslationBn from "./TranslationBn";
import type VerseTiming from "./VerseTiming";

export enum CharType {
  Word = "word",
  End = "end",
  Pause = "pause",
  Sajdah = "sajdah",
  RubElHizb = "rub-el-hizb",
}
export interface WordVerse {
  verseNumber: number;
  verseKey: string;
  chapterId: number | string;
  timestamps?: VerseTiming;
  translationsLabel: string;
  translationsCount: number;
}

interface Word {
  verseKey?: string;
  charTypeName: CharType;
  codeV1?: string;
  codeV2?: string;
  pageNumber?: number;
  hizbNumber?: number;
  lineNumber?: number;
  position: number;
  location?: string;
  translation?: Translation;
  translationBn?: TranslationBn;
  id?: number;
  textUthmani?: string;
  textIndopak?: string;
  qpcUthmaniHafs?: string;
  highlight?: string | boolean;
  text?: string;
  audioUrl: $TsFixMe;
  verse?: WordVerse;
  [key: string]: $TsFixMe;
}

export default Word;
