import { prompts } from "@/app/db";
export async function GET(_request, { params }) {
  const id = params.id;

  return Response.json(prompts);
}
