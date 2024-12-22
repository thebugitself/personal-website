import { NextResponse } from "next/server";
import db from "@/db";

// GET: Mendapatkan semua blog
export async function GET() {
  try {
    console.log("Fetching blogs...");
    const blogs = await db.blog.findMany();
    console.log("Blogs fetched successfully:", blogs);
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Error fetching blogs" },
      { status: 500 }
    );
  }
}

// POST: Menambahkan blog baru
export async function POST(req: Request) {
  try {
    const newBlog = await req.json();
    console.log("Data diterima di API POST:", newBlog);

    const createdBlog = await db.blog.create({
      data: {
        title: newBlog.title,
        slug: newBlog.slug || newBlog.title.toLowerCase().replace(/\s+/g, "-"), // Buat slug otomatis jika tidak diberikan
        content: newBlog.content || "", // Pastikan content memiliki nilai default
        description: newBlog.description,
        date: new Date(newBlog.date),
      },
    });

    console.log("Blog berhasil dibuat:", createdBlog);
    return NextResponse.json(createdBlog, { status: 201 });
  } catch (error) {
    console.error("Error saat membuat blog:", error);
    return NextResponse.json(
      { message: "Error saat membuat blog", error: error.message },
      { status: 500 }
    );
  }
}

// PUT: Mengedit blog
export async function PUT(req: Request) {
  const updatedBlog = await req.json();
  const blog = await db.blog.update({
    where: { id: updatedBlog.id },
    data: {
      title: updatedBlog.title,
      slug: updatedBlog.slug,
      content: updatedBlog.content, // Mengupdate rich text content
      date: new Date(updatedBlog.date),
      description: updatedBlog.description,
    },
  });
  return NextResponse.json(blog);
}

// DELETE: Menghapus blog
export async function DELETE(req: Request) {
  const { id } = await req.json();
  await db.blog.delete({
    where: { id },
  });
  return NextResponse.json({ message: "Blog deleted" });
}
