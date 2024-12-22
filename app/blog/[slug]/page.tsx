import { notFound } from "next/navigation";
import prisma from "@/db";

async function getBlogBySlug(slug: string) {
  // Fetch data dari Prisma berdasarkan slug
  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!blog) {
    return null;
  }

  return {
    ...blog,
    date: blog.date.toISOString(), // Convert DateTime ke string ISO untuk rendering
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound(); // Jika blog tidak ditemukan, tampilkan halaman 404
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-accent mb-4">{blog.title}</h1>
      <p className="text-gray-300 mb-6">{blog.description}</p>
      <span className="text-gray-500 text-sm">
        {new Date(blog.date).toLocaleDateString()}
      </span>
    </div>
  );
}
