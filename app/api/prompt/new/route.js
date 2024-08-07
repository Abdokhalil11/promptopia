import { prompts } from "@/app/db";

export async function POST(request) {
  try {
    const newRequest = await request.json();
    const id = prompts.length+1 || 1;
    const newPrompt = {
      id,
      ...newRequest,
    };
    prompts.push(newPrompt);
    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    return new Response("failed To fetch", {
      status: 500,
    });
  } finally {
    console.log("Done");
  }
}
