"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

// **Skema Validasi Form**
const formSchema = z.object({
  title: z.string().min(2, { message: "Judul minimal 2 karakter." }),
  description: z
    .string()
    .min(10, { message: "Deskripsi minimal 10 karakter." }),
  date: z.string().min(10, { message: "Tanggal tidak valid." }),
  content: z.string().min(10, { message: "Konten minimal 10 karakter." }),
});

export default function EditForm() {
  const router = useRouter();
  const { slug } = useParams(); // Ambil slug dari URL
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState<any | null>(null);
  const { toast } = useToast();

  // **Setup Form Hook**
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      date: "",
      content: "",
    },
  });

  // **Ambil data berdasarkan slug**
  useEffect(() => {
    async function fetchBlogData() {
      if (!slug) return;

      try {
        const response = await fetch(`/api/blog?slug=${slug}`);
        if (!response.ok) throw new Error("Gagal mengambil data blog");

        const data = await response.json();
        setInitialData(data);

        // **Isi Form dengan Data Lama**
        form.reset({
          title: data.title,
          description: data.description,
          date: new Date(data.date).toISOString().split("T")[0], // Format ke YYYY-MM-DD
          content: data.content,
        });
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }

    fetchBlogData();
  }, [slug, form]);

  // **Handle Submit**
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    try {
      const updatedData = {
        slug, // Gunakan slug sebagai identifier
        title: values.title,
        description: values.description,
        date: values.date,
        content: values.content,
      };

      const response = await fetch(`/api/blog`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast({
          title: "Gagal",
          description: `Gagal memperbarui blog: ${errorData?.message}`,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Berhasil",
        description: "Blog sudah diperbarui.",
      });

      router.push("/dashboard/blog-article/list");
    } catch (error) {
      toast({
        title: "Gagal",
        description: "Terjadi kesalahan saat memperbarui blog.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  // **Tampilkan Skeleton Loading jika Data Belum Ada**
  if (!initialData) {
    return (
      <Card className="mx-auto w-full">
        <CardHeader>
          <Skeleton className="h-8 w-1/3" />
        </CardHeader>
        <CardContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="mt-6">
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-10 w-full mt-2" />
            </div>
          ))}
          <div className="flex justify-end mt-12">
            <Skeleton className="h-10 w-32" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle className="text-left text-2xl font-bold">
          Edit Blog
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Judul</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan judul blog"
                      {...field}
                      className="text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <FormLabel>Slug</FormLabel>
              <p className="text-gray-400">{slug}</p>
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deskripsi</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan deskripsi singkat"
                      {...field}
                      className="text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className="text-black" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Isi Konten</FormLabel>
                  <FormControl>
                    <ReactQuill value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end w-full">
              <Button type="submit" disabled={loading}>
                {loading ? "Mengupdate.." : "Update Blog"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
