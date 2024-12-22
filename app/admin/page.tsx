"use client";

import { useState, useEffect } from "react";

const AdminPanel = () => {
  const [blogs, setBlogs] = useState([]); // Daftar blog
  const [form, setForm] = useState({
    id: null,
    title: "",
    description: "",
    date: "",
    slug: "", // Tambahkan slug untuk post baru
  }); // Form state
  const [error, setError] = useState<string | null>(null); // Error state
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch blogs dari API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError((err as Error).message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Submit Form (Tambah/Edit Blog)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = form.id ? "PUT" : "POST";

    try {
      const response = await fetch("/api/blog", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          slug: form.slug || form.title.toLowerCase().replace(/\s+/g, "-"), // Buat slug otomatis
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to submit blog");
      }

      // Reset form dan refresh data
      setForm({ id: null, title: "", description: "", date: "", slug: "" });
      const updatedBlogs = await fetch("/api/blog").then((res) => res.json());
      setBlogs(updatedBlogs);
    } catch (err) {
      setError((err as Error).message || "An error occurred");
    }
  };

  // Hapus Blog
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch("/api/blog", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      // Refresh data
      const updatedBlogs = await fetch("/api/blog").then((res) => res.json());
      setBlogs(updatedBlogs);
    } catch (err) {
      setError((err as Error).message || "An error occurred");
    }
  };

  // Mengisi form untuk Edit
  const handleEdit = (blog: any) => {
    setForm(blog);
  };

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-accent mb-6">Admin Panel</h1>

      {/* Form Tambah/Edit */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 border rounded text-black bg-white"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Description"
            className="w-full p-2 border rounded text-black bg-white"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <input
            type="date"
            className="w-full p-2 border rounded text-black bg-white"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {form.id ? "Update Blog" : "Add Blog"}
        </button>
      </form>

      {/* List Blog */}
      <div className="grid gap-6">
        {blogs.map((blog: any) => (
          <div key={blog.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p>{blog.description}</p>
            <span className="text-sm text-gray-500">
              {new Date(blog.date).toLocaleDateString()}
            </span>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleEdit(blog)}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
