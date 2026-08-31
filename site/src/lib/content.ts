import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import type { ReactElement } from "react";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "./mdx-components";

const contentDirectory = path.join(process.cwd(), "content", "work");

export interface ProjectFrontmatter {
  title: string;
  subtitle: string;
  description: string;
  company: string;
  year: string;
  role: string;
  team: string;
  timeline: string;
  heroImage: string;
  slug: string;
  imageText: string[];
  featured: boolean;
  order: number;
}

export interface Project {
  frontmatter: ProjectFrontmatter;
  content: string;
}

export interface ProjectListItem {
  frontmatter: ProjectFrontmatter;
}

export interface CompiledProject {
  frontmatter: ProjectFrontmatter;
  content: ReactElement;
}

function getMdxFiles(): string[] {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".mdx"));
}

export function getAllProjects(): ProjectListItem[] {
  const files = getMdxFiles();

  const projects = files.map((filename) => {
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    return {
      frontmatter: data as ProjectFrontmatter,
    };
  });

  return projects.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

export function getFeaturedProjects(): ProjectListItem[] {
  return getAllProjects().filter((p) => p.frontmatter.featured);
}

export function getProjectBySlug(slug: string): Project | null {
  const files = getMdxFiles();
  const filename = files.find((file) => {
    const filePath = path.join(contentDirectory, file);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);
    return data.slug === slug;
  });

  if (!filename) return null;

  const filePath = path.join(contentDirectory, filename);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as ProjectFrontmatter,
    content,
  };
}

/**
 * Returns compiled MDX as a React element ready for rendering in server
 * components. Uses gray-matter for frontmatter and next-mdx-remote/rsc
 * for MDX compilation with custom styled components.
 */
export async function getCompiledProject(
  slug: string
): Promise<CompiledProject | null> {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  const { content } = await compileMDX({
    source: project.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return {
    frontmatter: project.frontmatter,
    content,
  };
}

export function getAdjacentProjects(
  slug: string
): { prev: ProjectListItem | null; next: ProjectListItem | null } {
  const projects = getAllProjects();
  const currentIndex = projects.findIndex((p) => p.frontmatter.slug === slug);

  if (currentIndex === -1) return { prev: null, next: null };

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next:
      currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
}

export function getAllProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.frontmatter.slug);
}
