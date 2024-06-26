import Image from "next/image";
import React from "react";

import { STACKS } from "@/common/constant/stacks";
import { ProjectItem } from "@/common/types/projects";
import Tooltip from "@/common/components/elements/Tooltip";
import MDXComponent from "@/common/components/elements/MDXComponent";

import ProjectLink from "./ProjectLink";

export default function ProjectDetail({
  title,
  image,
  stacks,
  link_demo,
  link_github,
  content,
}: ProjectItem) {
  const stacksArray = JSON.parse(stacks);
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-between gap-5 sm:flex-row lg:flex-row lg:items-start">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mb-1 text-sm text-neutral-700 dark:text-neutral-300">
            Tech Stack :{" "}
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {stacksArray.map((stack: string, index: number) => (
              <div key={index}>
                <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
              </div>
            ))}
          </div>
        </div>
        <ProjectLink
          title={title}
          link_demo={link_demo || ""}
          link_github={link_github || ""}
        />
      </div>

      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={400}
          className="transition duration-500 hover:scale-[1.04]"
        />
      </div>

      {content ? (
        <div className="mt-5 space-y-6 leading-[1.8] dark:text-neutral-300">
          <MDXComponent>{content}</MDXComponent>
        </div>
      ) : null}
    </div>
  );
}
