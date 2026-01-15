"use client";
import shape_1 from "@/assets/shape-1.png";
import { currentFontAtom } from "@/atoms";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SurahsType } from "@/types";
import { useAtomValue } from "jotai";
import { SearchIcon, XCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import surahsJSON from "../data/surahs.json";

export default function Sidebar() {
  //const { error, data } = await GetSurahs();
  const surahs = surahsJSON.data as unknown as SurahsType["data"];

  const [surahsData, setSurahsData] = useState<SurahsType["data"]>(surahs);
  const [search, setSearch] = useState<string>("");
  const font = useAtomValue(currentFontAtom);

  useEffect(() => {
    if (search) {
      setSurahsData(
        surahs.filter((surah) =>
          surah.name
            .replaceAll(/[\u064B-\u0652\u064E-\u0650\u0651\u0652\u06E1]/g, "")
            .replaceAll("ي", "ی")
            .replaceAll(/إ|أ|آ|ٱ/g, "ا")
            .includes(search)
        )
      );
    } else {
      setSurahsData(surahs);
    }
  }, [search, surahs]);

  return (
    <aside className="hidden md:block w-1/4 border-r bg-white">
      <nav className="p-4 space-y-1">
        <div className="flex flex-col gap-4">
          <div className="relative  md:max-w-lg">
            <Input
              type="text"
              placeholder="گەڕان..."
              className="pr-9 pl-4 py-2 rtl font-noto-kufi-arabic"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <Button
              className="absolute left-0 top-1/2 -translate-y-1/2 size-9 p-0"
              variant={"ghost"}
              onClick={() => setSearch("")}
            >
              <XCircleIcon
                className={` w-5 h-5 text-muted-foreground transition-opacity ${
                  search ? "opacity-100" : "opacity-0"
                }`}
              />
            </Button>
            <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 rtl">
            {surahsData &&
              surahsData.map((surah) => (
                <Link key={surah.number} href={`/${surah.number}`}>
                  <Card className="hover:shadow-lg hover:scale-105 transition-all relative h-[100px] overflow-hidden">
                    <CardHeader className="flex-row gap-2 items-center text-3xl rtl z-50">
                      <div className="flex gap-4 items-center text-2xl">
                        <Button
                          asChild
                          variant={"outline"}
                          size={"icon"}
                          className="rounded-xl"
                        >
                          <p>{surah.number}</p>
                        </Button>
                        {/* <p
                          className="mb-4"
                          style={{ fontFamily: `var(--font-${font})` }}
                        >
                          {surah.name}
                        </p> */}
                        <p
                          className="mb-4"
                          style={{ fontFamily: `var(--font-${font})` }}
                        >
                          {surah.banglaName}
                        </p>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}
