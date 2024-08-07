import { useState } from "react";
import { format } from "date-fns";

import Card from "@/common/components/elements/Card";
import { PersonalBestsTime } from "@/common/types/monkeytype";

interface OverviewItemProps {
  data?: {
    [time: string]: PersonalBestsTime[];
  };
  type?: string;
}

interface ItemProps {
  data: {
    time: string;
    maxWpm: PersonalBestsTime;
  };
  type?: string;
}

interface ItemHoveredProps {
  data: {
    time: string;
    maxWpm: PersonalBestsTime;
  };
  type?: string;
}

const Item = ({ data, type }: ItemProps) => (
  <div className="flex flex-col items-center gap-y-1">
    <span className="flex text-xs dark:text-neutral-500">{`${data?.time} ${type}`}</span>
    <span className="text-3xl dark:text-green-600">
      {Math.round(data?.maxWpm.wpm)}
    </span>
    <span className="text-lg dark:text-neutral-400">{`${Math.floor(data?.maxWpm.acc)}%`}</span>
  </div>
);

const ItemHovered = ({ data, type }: ItemHoveredProps) => (
  <div className="flex flex-col items-center gap-y-1 text-xs">
    <span className="flex dark:text-neutral-500">{`${data?.time} ${type}`}</span>
    <span className="dark:text-green-600">
      {`${Math.round(data?.maxWpm.wpm)} wpm`}
    </span>
    <span className="dark:text-green-600">{`${Math.floor(data?.maxWpm.raw)} raw`}</span>
    <span className="dark:text-green-600">{`${Math.floor(data?.maxWpm.acc)}% acc`}</span>
    <span className="dark:text-green-600">{`${Math.floor(data?.maxWpm.consistency)}% con`}</span>
    <span className="dark:text-neutral-500">{`${format(data?.maxWpm.timestamp, "dd MMM yyyy")}`}</span>
  </div>
);

const OverviewItem = ({ data, type }: OverviewItemProps) => {
  const [isHover, setIsHover] = useState("");

  const handleHover = (item: string) => {
    setIsHover(item);
  };

  if (data && typeof data === "object") {
    const datas = Object.keys(data).map((time) => {
      const items = data[time];
      const maxWpm = items.reduce((prev, current) =>
        prev.wpm > current.wpm ? prev : current,
      );
      return { time, maxWpm };
    });

    return (
      <Card className="grid grid-cols-4 items-center justify-center px-2 py-4">
        {datas.map((item) => {
          return (
            <div
              key={item.time}
              onMouseEnter={() => handleHover(item.time)}
              onMouseLeave={() => handleHover("")}
              className="flex h-28 items-center justify-center"
            >
              {isHover === item.time ? (
                <ItemHovered type={type} data={item} />
              ) : (
                <Item type={type} data={item} />
              )}
            </div>
          );
        })}
      </Card>
    );
  }
};

export default OverviewItem;
