"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch(`/api/create-post`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });
    const res = await data.json();
    if (res.message) {
      console.log("error");
      console.log(res.message);
    }
    router.refresh();
  }
  return (
    <form onSubmit={submit} className="flex flex-col gap-3 my-4">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Title"
        className="text-black"
      />
      <input
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        placeholder="Post content"
        className="text-black"
      />
      <button
        className="bg-white px-4 py-2 text-black font-bold rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default CreatePostForm;
