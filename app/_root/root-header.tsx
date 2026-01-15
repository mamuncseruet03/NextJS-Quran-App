"use client";

import { currentFontAtom } from "@/atoms";
import ButtonGroup from "@/components/button-group";
import Settings from "@/components/settings";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useAtomValue } from "jotai";

export default function RootHeader() {
  const font = useAtomValue(currentFontAtom);

  return (
    <div className="flex justify-between items-center gap-4 sticky top-0 bg-background z-50 pb-2 w-full px-4 md:px-8">
      {/* <ThemeToggle /> */}
      {/* <Settings />
      <h1
        className="text-3xl md:text-5xl text-center pb-6"
        style={{ fontFamily: `var(--font-${font})` }}
      >
        القرآن الكریم
      </h1> */}
      <h1
        className="text-3xl md:text-5xl text-center pb-6"
        style={{ fontFamily: `var(--font-${font})` }}
      >
        Quran App Developed By Mamun
      </h1>
      <ButtonGroup />
    </div>
  );
}
