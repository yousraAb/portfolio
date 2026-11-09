import type { Metadata } from "next";
import { projects } from "@/lib/projects";

type MetadataProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found | Yousra Abid",
    };
  }

  return {
    title: `${project.title} | Yousra Abid`,
    description: project.description,
  };
}

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}