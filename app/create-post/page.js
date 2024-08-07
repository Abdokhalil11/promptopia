"use client";
import { useState } from "react";
import Form from "../components/Form/Form";
import { useRouter } from "next/navigation";

export default function CreatePostPage() {
  const router = useRouter();
  const [post, setPost] = useState({
    title: "",
    tags: "",
    prompt: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/prompt/new", {
        method: "POST",
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
      type="create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmitting={createPrompt}
    />
  );
}
