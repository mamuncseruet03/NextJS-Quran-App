import SurahsComponent from "./_root/surahs-component";
import RootHeader from "./_root/root-header";
import { Separator } from "@/components/ui/separator";
import SomethingWentWrong from "@/components/something-went-wrong";
import { GetSurahs } from "@/action";
import surahsJSON from "../data/surahs.json";
import { SurahsType } from "@/types";

export default async function Page() {
  //const { error, data } = await GetSurahs();
  const data = surahsJSON.data as unknown as SurahsType["data"];
  // if (error || !data) return <SomethingWentWrong />;

  return <div className="space-y-14 py-8"></div>;
}
