import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { MONKEYTYPE_URL } from "@/common/constant/monkeytype";
import {
  MonkeytypeData,
  MonkeytypeLeaderboard,
} from "@/common/types/monkeytype";
import Link from "next/link";
import { SiMonkeytype as MonkeytypeIcon } from "react-icons/si";
import Overview from "./Overview";
import Info from "./info";

type MonkeytypeProps = {
  monkeytypeDataProfile: MonkeytypeData;
  monkeytypeDataLeaderboard: MonkeytypeLeaderboard;
};

export default function Monkeytype({
  monkeytypeDataProfile,
  monkeytypeDataLeaderboard,
}: MonkeytypeProps) {
  return (
    <section className="space-y-2">
      <SectionHeading
        title="Monkeytype Statistic"
        icon={
          <div className="h-5 w-5 overflow-hidden rounded-full">
            <MonkeytypeIcon />
          </div>
        }
      />
      <SectionSubHeading>
        <p>My statistic score on Monkeytype.</p>
        <Link
          href={MONKEYTYPE_URL}
          target="_blank"
          className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-400"
        >
          Monkeytype
        </Link>
      </SectionSubHeading>

      {monkeytypeDataProfile && (
        <div>
          <Overview
            dataProfile={monkeytypeDataProfile}
            dataLeaderboard={monkeytypeDataLeaderboard}
          />
          {/* <Info data={monkeytypeDataProfile} /> */}
        </div>
      )}
    </section>
  );
}