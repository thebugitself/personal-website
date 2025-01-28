"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // Menambahkan state untuk loading
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true); // Set loading true saat login dimulai

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      setLoading(false); // Set loading false setelah respon diterima

      if (res.ok) {
        router.push("/dashboard"); // Redirect ke halaman dashboard
      } else {
        const data = await res.json();
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setLoading(false); // Set loading false jika terjadi error
      setError("An unexpected error occurred");
    }
  };

  // Menangani ketika tombol Enter ditekan
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin(e as React.FormEvent);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-primary">
      <div className="bg-primary p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold text-accent mb-6 text-center">
          Lu siapa kocak?
        </h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyPress} // Menambahkan event listener untuk tombol Enter
              className="w-full p-2 border rounded text-black"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyPress} // Menambahkan event listener untuk tombol Enter
              className="w-full p-2 border rounded text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-accent text-primary rounded-xl hover:bg-hover"
            disabled={loading} // Menonaktifkan tombol login saat loading
          >
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
