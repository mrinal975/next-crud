"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

function RemoveBtn({ id }) {
  const route = useRouter();
  const removeTopic = async () => {
    const confirmation = confirm("Are you sure you want to delete this topic?");
    if (!confirmation) {
      return;
    }
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      alert("Topic deleted");
      route.refresh();
    } else {
      alert("Failed to delete topic");
    }
  };
  return (
    <button className="text-red-400 cursor-pointer" onClick={removeTopic}>
      <HiOutlineTrash size={24} />
    </button>
  );
}

export default RemoveBtn;
