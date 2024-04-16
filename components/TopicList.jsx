import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

async function getTopics() {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-cache",
    });
    const resData = await res.json();

    if (!resData) {
      throw new Error("Failed to fetch data");
    }
    return resData.data;
  } catch (exception) {
    console.error("error", exception);
  }
}
async function TopicList() {
  const topics = await getTopics();
  console.log("---");
  return (
    <>
      {topics.map((topic) => (
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn />
            <Link href="/editTopic/1">
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default TopicList;
