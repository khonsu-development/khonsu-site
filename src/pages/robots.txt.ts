export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://www.khonsu.eu/sitemap-index.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
