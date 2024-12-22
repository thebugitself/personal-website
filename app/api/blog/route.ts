import { NextResponse } from "next/server";
import db from "@/db";

// GET: Mendapatkan semua blog
export async function GET() {
  const blogs = await db.blog.findMany();
  return NextResponse.json(
    blogs.map((blog) => ({
      ...blog,
      id: blog.id.toString(), // Convert ObjectId ke string
    }))
  );
}

// POST: Menambahkan blog baru
export async function POST(req: Request) {
  const newBlog = await req.json();
  const createdBlog = await db.blog.create({
    data: {
      title: newBlog.title,
      description: newBlog.description,
      slug: newBlog.slug,
      date: new Date(newBlog.date),
    },
  });
  return NextResponse.json({
    ...createdBlog,
    id: createdBlog.id.toString(), // Convert ObjectId ke string
  });
}

// PUT: Mengedit blog
export async function PUT(req: Request) {
  const updatedBlog = await req.json();
  const blog = await db.blog.update({
    where: { id: updatedBlog.id },
    data: {
      title: updatedBlog.title,
      description: updatedBlog.description,
      slug: updatedBlog.slug,
      date: new Date(updatedBlog.date),
    },
  });
  return NextResponse.json({
    ...blog,
    id: blog.id.toString(), // Convert ObjectId ke string
  });
}

// DELETE: Menghapus blog
export async function DELETE(req: Request) {
  const { id } = await req.json();
  await db.blog.delete({
    where: { id },
  });
  return NextResponse.json({ message: "Blog deleted" });
}
