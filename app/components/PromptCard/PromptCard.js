"use client";
import "./prompt-card.css";
import Image from "next/image";
import logo from "@/public/assets/images/logo.svg";
import copyIcon from "@/public/assets/icons/copy.svg";
import copiedIcon from "@/public/assets/icons/tick.svg";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function PromptCard({
  prompt,
  handleTagClick,
  handleEdit,
  handleDelete,
}) {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  function copyHandling() {
    setCopied(true);
    try {
      navigator.clipboard.writeText(prompt.prompt);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }

  return (
    <div className="prompt-card glassmorphism">
      <div className="prompt-header">
        <Image src={logo.src} width={30} height={30} alt="user image" />
        <div className="prompt-user">
          <h3>Guest</h3>
          <p>Guest123@gmail.com</p>
        </div>
        <div className="copy-btn" onClick={copyHandling}>
          <Image
            src={copied ? copiedIcon.src : copyIcon.src}
            width={14}
            height={14}
            alt="copy-icon"
            className="copy-icon"
          />
        </div>
      </div>
      <div className="prompt-body">
        <p>{prompt.prompt}</p>
        <p
          className="blue-gradient"
          onClick={() =>handleTagClick&& handleTagClick(prompt.tags)}
        >
          {prompt.tags}
        </p>
      </div>
      {pathname === "/profile" && (
        <div className="buttons">
          <p className="green-gradient" onClick={() => handleEdit(prompt.id)}>
            Edit
          </p>
          <p
            className="orange-gradient"
            onClick={() => handleDelete(prompt.id)}
          >
            delete
          </p>
        </div>
      )}
    </div>
  );
}
