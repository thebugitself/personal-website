import { NextResponse } from "next/server";
import db from "@/db";

// GET: Fetch all blogs
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

// POST: Add a new blog
export async function POST(req: Request) {
  try {
    const newBlog = await req.json();

    if (!newBlog.title || !newBlog.description || !newBlog.date) {
      return NextResponse.json(
        { message: "Title, description, and date are required." },
        { status: 400 }
      );
    }

    console.log("Data received in POST API:", newBlog);

    const createdBlog = await db.blog.create({
      data: {
        title: newBlog.title,
        slug: newBlog.slug || newBlog.title.toLowerCase().replace(/\s+/g, "-"), // Generate slug if not provided
        content: newBlog.content || "", // Ensure content has a default value
        description: newBlog.description,
        date: new Date(newBlog.date),
      },
    });

    console.log("Blog successfully created:", createdBlog);
    return NextResponse.json(createdBlog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      {
        message: "Error creating blog",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// PUT: Update a blog
export async function PUT(req: Request) {
  try {
    const updatedBlog = await req.json();

    if (
      !updatedBlog.id ||
      !updatedBlog.title ||
      !updatedBlog.description ||
      !updatedBlog.date
    ) {
      return NextResponse.json(
        { message: "ID, title, description, and date are required." },
        { status: 400 }
      );
    }

    console.log("Data received in PUT API:", updatedBlog);

    const blog = await db.blog.update({
      where: { id: updatedBlog.id },
      data: {
        title: updatedBlog.title,
        slug:
          updatedBlog.slug ||
          updatedBlog.title.toLowerCase().replace(/\s+/g, "-"),
        content: updatedBlog.content || "", // Update rich text content
        date: new Date(updatedBlog.date),
        description: updatedBlog.description,
      },
    });

    console.log("Blog successfully updated:", blog);
    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      {
        message: "Error updating blog",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// DELETE: Delete a blog
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "Blog ID is required." },
        { status: 400 }
      );
    }

    console.log("Deleting blog with ID:", id);

    await db.blog.delete({
      where: { id },
    });

    console.log("Blog successfully deleted.");
    return NextResponse.json({ message: "Blog deleted successfully." });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      {
        message: "Error deleting blog",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
