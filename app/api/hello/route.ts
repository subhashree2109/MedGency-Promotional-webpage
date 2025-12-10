// app/api/hello/route.ts (or .js)

export const dynamic = 'force-static';
export const revalidate = 0;

export async function GET() {
  return new Response("Hello, Next.js!", {
    headers: { "Content-Type": "text/plain" },
  });
}
