"use client";

import Link from "next/link";
import { BsGithub as GithubIcon } from "react-icons/bs";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { GITHUB_ACCOUNTS } from "@/common/constant/github";

import Overview from "./Overview";
import Calendar from "./Calendar";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";

type ContributionsProps = {
  endpoint: string;
};

export default function Contributions({ endpoint }: ContributionsProps) {
  const { data } = useSWR(endpoint, fetcher);
  const contributionCalendar =
    data?.contributionsCollection?.contributionCalendar;

  return (
    <section className="space-y-2">
      <SectionHeading title="Contributions" icon={<GithubIcon />} />
      <SectionSubHeading>
        <p>My contributions from last year on github.</p>
        <Link
          href={GITHUB_ACCOUNTS.github_url}
          target="_blank"
          className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-400"
        >
          @{GITHUB_ACCOUNTS.username}
        </Link>
      </SectionSubHeading>

      {data ? (
        <div className="space-y-3">
          <Overview data={contributionCalendar} />
          <Calendar data={contributionCalendar} />
        </div>
      ) : null}
    </section>
  );
}
