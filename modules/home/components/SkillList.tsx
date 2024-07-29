"use client";

import { BiCodeAlt as SkillsIcon } from "react-icons/bi";
import { useTranslations } from "next-intl";

import cn from "@/common/libs/clsxm";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import useIsMobile from "@/hooks/useIsMobile";
import { STACKS } from "@/common/constant/stacks";

import Hexagon from "./Hexagon";
import { useEffect, useState } from "react";

const SkillList = () => {
  const t = useTranslations("HomePage");

  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(STACKS);

  const isMobile = useIsMobile();

  let maxNumber = isMobile ? 8 : 12;
  const results = [];

  for (let i = 0; i < stacksInArray.length; i += maxNumber) {
    const chunk = stacksInArray.slice(i, i + maxNumber);
    maxNumber--;
    i++;
    results.push(chunk);
  }

  const [randomIndex, setRandomIndex] = useState(0);

  const interval = (maxNumberIndex: number) => {
    setInterval(() => {
      setRandomIndex(Math.floor(Math.random() * maxNumberIndex));
    }, 3000);
  };

  useEffect(() => {
    console.log(randomIndex)
  }, [randomIndex]);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title={t("skills.title")} icon={<SkillsIcon />} />
        <SectionSubHeading>
          <p>{t("skills.sub_title")}</p>
        </SectionSubHeading>
      </div>

      <div className={cn("grid ", `grid-rows-${results.length}`)}>
        {results.map((indexStack, index) => {
          // console.log(indexStack.length);
          interval(indexStack.length);
          return (
            <div
              key={index}
              className={cn(
                "flex items-center justify-center gap-4",
                `row-span-${index + 1}`,
              )}
            >
              {indexStack.map(([name, icon], index) => {
                return (
                  <Hexagon
                    key={index}
                    name={name}
                    indexActive={randomIndex}
                    indexCurrent={index}
                  >
                    {icon}
                  </Hexagon>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillList;
