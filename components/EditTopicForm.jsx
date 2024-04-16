"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function EditTopicForm({ title, description, _id }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const formSubmit = async (e) => {
    e.preventDefault();
    if (!newTitle || !newDescription) {
      alert("Please fill in all fields");
      return;
    }
    const res = await fetch(`http://localhost:3000/api/topics/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newTitle: newTitle,
        newDescription: newDescription,
      }),
    });
    if (res.ok) {
      router.push("/");
    } else {
      throw new Error("Failed to update topic");
    }
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={formSubmit}>
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
      />
      <button
        type="submit"
        className="
  bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Update Topic
      </button>
    </form>
  );
}

export default EditTopicForm;
