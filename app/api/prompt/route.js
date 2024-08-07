import { prompts } from "@/app/db";

export async function GET(_request) {
  return Response.json(prompts);
}
