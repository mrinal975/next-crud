import EditTopicForm from "@/components/EditTopicForm";
const getTopicById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-cache",
    });
    const resData = await response.json();

    if (!resData) {
      throw new Error("Failed to fetch data");
    }
    return resData.data;
  } catch (e) {
    console.log(e);
  }
};

async function EditTopic({ params }) {
  const { id } = params;
  const topic = await getTopicById(id);
  return (
    <EditTopicForm
      title={topic.title}
      description={topic.description}
      _id={id}
    />
  );
}

export default EditTopic;
