import { Metadata } from "next";

import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import prisma from "@/common/libs/prisma";
import { ProjectItem } from "@/common/types/projects";
import { METADATA } from "@/common/constant/metadata";
import { loadMdxFiles } from "@/common/libs/mdx";

type ProjectDetailPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const project = await getProjectDetail(params?.slug);

  return {
    title: `${project.title} ${METADATA.exTitle}`,
    description: project.description,
    openGraph: {
      images: project.image,
      url: `${METADATA.openGraph.url}/${project.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: "article",
      authors: METADATA.creator,
    },
    keywords: project.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/projects/${params.slug}`,
    },
  };
}

const getProjectDetail = async (slug: string): Promise<ProjectItem> => {
  const projects = await prisma.projects.findUnique({
    where: {
      slug: String(slug),
    },
  });

  const contents = loadMdxFiles();
  const content = contents.find((item) => item.slug === slug);
  const response = { ...projects, content: content?.content };
  const data = JSON.parse(JSON.stringify(response));
  return data;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const data = await getProjectDetail(params?.slug);

  const PAGE_TITLE = data?.title;
  const PAGE_DESCRIPTION = data?.description;

  return (
    <Container data-aos="fade-up">
      <BackButton url="/projects" />
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProjectDetail {...data} />
    </Container>
  );
}
