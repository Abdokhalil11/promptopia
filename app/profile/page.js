"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Profile } from "../components/Profile/Profile";
import Image from "next/image";
import loader from "@/public/assets/icons/loader.svg"
export default function ProfilePage() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function FetchData() {
      const res = await fetch(`/api/user/${1}/posts`);
      const data = await res.json();
      setData(data);
      setLoading(false);
    }
    FetchData();
    console.log(data);
  }, []);

  function handleEdit(id) {
    router.push(`/update-post/${id}`);
  }
  async function handleDelete(id) {
    const res = await fetch(`/api/prompt/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);
    router.push("/");
  }
  if (loading) {
    return (
      <Image src={loader.src} width={50} height={50} alt="loader spinner" />
    );
  }
  return (
    <Profile
      name="My"
      description="welcome To Personalize profile page"
      data={data}
      handleEdit={(id) => handleEdit(id)}
      handleDelete={(id) => handleDelete(id)}
    />
  );
}
