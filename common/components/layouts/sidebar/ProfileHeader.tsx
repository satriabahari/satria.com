import Link from "next/link";

import { MdVerified as VerifiedIcon } from "react-icons/md";
import Image from "next/image";
import clsx from "clsx";
import Tooltip from "../../elements/Tooltip";

type ProfileHeaderProps = {
  expandMenu: boolean;
  imageSize: number;
};

export default function ProfileHeader({
  expandMenu,
  imageSize,
}: ProfileHeaderProps) {
  return (
    <div
      className={clsx(
        "flex w-full flex-grow items-center gap-4 lg:flex-col lg:items-start lg:gap-0.5",
        expandMenu && "flex-col !items-start",
      )}
    >
      <Image
        src={"/images/satria.jpg"}
        width={expandMenu ? 80 : imageSize}
        height={expandMenu ? 80 : imageSize}
        alt="Satria Bahari"
        // rounded="rounded-full"
        className="rotate-3 rounded-full border-2 border-neutral-400 dark:border-neutral-600 lg:hover:scale-105"
      />

      <div className="mt-1 flex items-center gap-2 lg:mt-4">
        <Link href="/">
          <h2 className="flex-grow text-lg font-medium lg:text-xl">
            Satria Bahari
          </h2>
        </Link>

        <Tooltip title="Verified">
          <VerifiedIcon size={18} className="text-blue-400" />
        </Tooltip>
      </div>
      <div className="hidden text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex">
        @satriabaharii_
      </div>
    </div>
  );
}
