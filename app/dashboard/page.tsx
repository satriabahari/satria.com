import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Dashboard from "@/modules/dashboard/components/Dashboard";
import { METADATA } from "@/common/constant/metadata";

export const metadata: Metadata = {
  title: `Dashboard ${METADATA.exTitle}`,
  description: `My activity dashboard as software engineer`,
  alternates: {
    canonical: `${process.env.DOMAIN}/dashboard`,
  },
};

const PAGE_TITLE = "Dashboard";
const PAGE_DESCRIPTION =
  "This is my personal dashboard, built with Next.js API routes deployed as serverless functions.";

export default async function DashboardPage() {
  return (
    <Container data-aos="fade-up">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Dashboard />
    </Container>
  );
}
