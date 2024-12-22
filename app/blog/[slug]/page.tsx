import { notFound } from "next/navigation";
import prisma from "@/db";
import Link from "next/link";

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
      {/* Tombol Back */}
      <Link
        href="/blog"
        className="inline-flex items-center mb-4 text-gray-500 hover:underline"
      >
        ← Back
      </Link>

      {/* Judul Blog */}
      <h1 className="text-4xl font-bold text-accent mb-4">{blog.title}</h1>
      {/* Tanggal Blog */}
      <span className="text-gray-500 text-sm">
        {new Date(blog.date).toLocaleDateString()}
      </span>

      {/* Konten Blog */}
      <div
        className="prose mt-8"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
