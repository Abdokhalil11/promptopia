import { prompts } from "@/app/db";

export async function GET(_request, { params }) {
  const postId = +params.promptId;
  const findPostId = prompts.find((el) => el.id === postId);
  return Response.json(findPostId);
}

export async function DELETE(_request, { params }) {
  const deleteId = +params.promptId;
  const findPostId = prompts.findIndex((el) => el.id === deleteId);
  prompts.splice(findPostId, 1);
  return new Response("deleted Post Success");
}

export async function PATCH(request, { params }) {
  const { prompt, tags } = await request.json();
  const updateId = +params.promptId;
  const findPostId = prompts.find((el) => el.id === updateId);
  findPostId.prompt = prompt;
  findPostId.tags = tags;
  return new Response("Updated Post Success");
}
