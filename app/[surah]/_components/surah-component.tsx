"use client";

import { currentFontAtom } from "@/atoms";
import ButtonGroup from "@/components/button-group";
import { Card, CardHeader } from "@/components/ui/card";
import { SurahType, TafseerListType } from "@/types";
import { useAtomValue } from "jotai";
import AudioPlayer from "./audio-player";
import AyahNumber from "./ayah-number";
import ScrollProgressBar from "./scroll-progress-bar";
import TafseerComponent from "./tafseer-component";
import { Separator } from "@/components/ui/separator";
import Verse from "@/types/Verse";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { useAudio } from "react-use";

export default function SurahComponent({
  surah,
  TafseerList,
}: {
  surah: Verse[];
  TafseerList: TafseerListType;
}) {
  const font = useAtomValue(currentFontAtom);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (url: string) => {
    // If clicking the same audio → toggle
    // if (currentUrl === url && isPlaying) {
    //   // audioRef.current!.pause();
    //   setIsPlaying(false);
    //   return;
    // }

    const audio = new Audio(url);
    audio.play();
    // Play new audio
    setCurrentUrl(url);
    setIsPlaying(true);
  };

  return (
    <>
      <ScrollProgressBar />
      <div className="w-full space-y-14">
        {/* <header className="flex justify-between items-center gap-4 sticky top-1 bg-background z-50 pb-2 pt-5">
          <h1
            className="text-3xl md:text-5xl text-center pb-6"
            style={{ fontFamily: `var(--font-${font})` }}
          >
            {surah[0].juzNumber}
          </h1>

          <ButtonGroup />
        </header> */}
        {surah &&
          surah.map((ayah) => (
            <div className=" flex ">
              {ayah.words.map((word) => (
                <div className=" flex justify-between items-center ">
                  <div
                    className="flex flex-col gap-2 items-start text-3xl rtl cursor-default p-4 "
                    key={word.numberInSurah}
                  >
                    <div className="flex flex-col gap-2">
                      <button
                        key={word.id}
                        onClick={() => handlePlay(word.audioUrl)}
                      >
                        <span
                          className=" hover:bg-yellow-50 transition-all duration-300 ease-in-out"
                          style={{ fontFamily: `var(--font-${font})` }}
                        >
                          {word.text}
                        </span>
                      </button>
                      <span
                        className="-mt-4 leading-[4rem] tracking-wide"
                        style={{ fontFamily: `var(--font-${font})` }}
                      >
                        {word.translationBn?.text}
                      </span>

                      {/* <span
                      className="-mt-4 leading-[4rem] tracking-wide"
                      style={{ fontFamily: `var(--font-${font})` }}
                    >
                      {word.translation?.text}
                    </span> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
}
