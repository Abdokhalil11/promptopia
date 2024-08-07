"use client";
import { useEffect, useState } from "react";
import "./feed.css";
import PromptCard from "../PromptCard/PromptCard";
import loader from "@/public/assets/icons/loader.svg";
import Image from "next/image";
function PromptCardList({ data, handleTagClick }) {
  return (
    <div className="promptCardList">
      {data.map((prompt) => (
        <PromptCard
          key={prompt.id}
          prompt={prompt}
          handleTagClick={(el) => {
            handleTagClick && handleTagClick(el);
          }}
        />
      ))}
    </div>
  );
}

export default function Feed() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [dataClone, setDataClone] = useState(data);
  const [loading, setLoading] = useState(true);
  function SearchHandling(e) {
    setSearchValue(e.target.value);
  }
  function handleTagClick(el) {
    setSearchValue(el);
  }

  useEffect(() => {
    async function FetchData() {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setData(data);
      setLoading(false);
      setDataClone(data);
    }
    FetchData();
  }, []);

  useEffect(() => {
    const searchFind = searchValue.startsWith("#");

    const filterDataBody = data.filter((el) => el.prompt.includes(searchValue));
    const filterDataTags = data.filter((el) => el.tags.includes(searchValue));
    searchValue.length !== "" && searchFind
      ? setDataClone(filterDataTags)
      : setDataClone(filterDataBody);
  }, [searchValue]);

  return (
    <section className="feed">
      <form>
        <input
          type="text"
          placeholder="Search for Tag or a username"
          value={searchValue}
          onChange={(e) => SearchHandling(e)}
          className="feed-search"
        />
      </form>
      {loading ? (
        <Image src={loader.src} width={100} height={100} alt="loader spinner" />
      ) : (
        <PromptCardList
          data={dataClone}
          handleTagClick={(el) => handleTagClick(el)}
        />
      )}
    </section>
  );
}
