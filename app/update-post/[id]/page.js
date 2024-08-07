"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@/app/components/Form/Form";
import { notFound } from "next/navigation";
import { prompts } from "@/app/db";
export default function UpdatePostPage({ params }) {
  const router = useRouter();
  const [post, setPost] = useState({
    title: "",
    tags: "",
    prompt: "",
  });
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    async function getCurrentDetails() {
      const res = await fetch(`/api/prompt/${params.id}`);
      const data = await res.json();
      setPost({ ...data });
      setLoading(false);
    }
    getCurrentDetails();
    console.log(post);
  }, [params.id]);

  const UpdatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`/api/prompt/${params.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tags: post.tags,
          prompt: post.prompt,
        }),
      });
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(true);
    }
  };

  const [submitting, setSubmitting] = useState(false);
  return (
    <Form
      type="Update"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmitting={UpdatePrompt}
      loading={loading}
    />
  );
}
