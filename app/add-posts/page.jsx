"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/page.module.css";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const {router} = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await res.json();
      console.log("Success:", result);
      router.refresh();
    } catch (error) {
      console.log('errror:', error);
    }
  };

  return (
    <div className={styles.main}>
      Add Post
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPost;
