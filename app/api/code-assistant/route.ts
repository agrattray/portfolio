import { processCodeRequest } from "@/utils/code-utils"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const requestData = await req.json()
    const result = await processCodeRequest(requestData)

    return new Response(JSON.stringify({ result }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error in code assistant API:", error)
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "An unexpected error occurred",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
