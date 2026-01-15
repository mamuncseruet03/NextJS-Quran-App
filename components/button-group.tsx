import Link from "next/link";
import { Button } from "./ui/button";
import { ApiIcon } from "./my-icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ThemeToggle } from "./theme/theme-toggle";
import Settings from "./settings";
import { FileText, HeartPulseIcon, SquarePlay, Table } from "lucide-react";

export default function ButtonGroup() {
  return (
    <div className="flex gap-2 items-center">
      {/* <Button asChild size={"icon"} variant={"secondary"} className="size-8">
        <Link href={"https://alquran.cloud/api"} target="_blank">
          <ApiIcon className="size-4 fill-secondary-foreground" />
        </Link>
      </Button>

      <Button asChild size={"icon"} variant={"secondary"} className="size-8">
        <Link
          href={"https://github.com/HoshangDEV/NextJS-Quran-App"}
          target="_blank">
          <GitHubLogoIcon className="size-4" />
        </Link>
      </Button> */}

      <Button asChild size={"icon"}>
        <Link href={"/"}>
          <Table />
        </Link>
      </Button>
      <Button asChild size={"icon"}>
        <Link href={"/videos"}>
          <SquarePlay />
        </Link>
      </Button>
    </div>
  );
}
