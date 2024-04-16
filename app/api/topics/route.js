import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";
async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic created" }, { status: 201 });
}

async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ data: topics }, { status: 200 });
}
async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}

export { POST, GET, DELETE };
