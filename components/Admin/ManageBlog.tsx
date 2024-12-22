"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    id: null,
    title: "",
    slug: "",
    description: "",
    date: "",
    content: "",
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // State untuk membedakan add/edit mode
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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

    if (!form.title || !form.description || !form.date || !form.content) {
      setError("All fields must be filled.");
      return;
    }

    const method = form.id ? "PUT" : "POST";
    try {
      const response = await fetch("/api/blog", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          slug: form.slug || form.title.toLowerCase().replace(/\s+/g, "-"),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit blog");
      }

      setPopupVisible(false);
      setForm({
        id: null,
        title: "",
        slug: "",
        description: "",
        date: "",
        content: "",
      });
      const updatedBlogs = await fetch("/api/blog").then((res) => res.json());
      setBlogs(updatedBlogs);
      setError(null);
      setIsEditing(false);
    } catch (error) {
      console.error("Error submitting blog:", error);
      setError((error as Error).message || "An error occurred");
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
      const updatedBlogs = await fetch("/api/blog").then((res) => res.json());
      setBlogs(updatedBlogs);
    } catch (err) {
      setError((err as Error).message || "An error occurred");
    }
  };

  // Edit Blog
  const handleEdit = (blog: any) => {
    setForm({
      id: blog.id,
      title: blog.title,
      slug: blog.slug,
      description: blog.description,
      date: blog.date.split("T")[0],
      content: blog.content,
    });
    setPopupVisible(true);
    setIsEditing(true);
  };

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Blogs</h2>
        <button
          onClick={() => {
            setPopupVisible(true);
            setIsEditing(false); // Set to add mode
            setForm({
              id: null,
              title: "",
              slug: "",
              description: "",
              date: "",
              content: "",
            });
          }}
          className="px-4 py-2 bg-accent text-primary rounded-2xl hover:bg-blue-600"
        >
          Add Blog
        </button>
      </div>

      {/* List Blog */}
      <div className="grid gap-6">
        {blogs.map((blog: any) => (
          <div
            key={blog.id}
            className="p-4 border rounded-xl border-accent flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-700">{blog.description}</p>
              <p className="text-xs text-gray-500">
                {new Date(blog.date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(blog)}
                className="px-4 py-2 bg-accent text-primary rounded-2xl hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Form */}
      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg max-h-screen overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">
              {isEditing ? "Edit Blog" : "Add Blog"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full p-2 border rounded text-black"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Description"
                  className="w-full p-2 border rounded text-black"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <input
                  type="date"
                  className="w-full p-2 border rounded text-black"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </div>
              <div className="mb-4 text-black">
                <ReactQuill
                  value={form.content}
                  onChange={(value) => setForm({ ...form, content: value })}
                  theme="snow"
                  modules={{
                    toolbar: [
                      ["bold", "italic", "underline"],
                      ["blockquote", "code-block"],
                      [{ list: "ordered" }, { list: "bullet" }],
                      ["link", "image"],
                    ],
                  }}
                  className="max-h-40 overflow-y-auto"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setPopupVisible(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {isEditing ? "Update Blog" : "Add Blog"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBlog;
