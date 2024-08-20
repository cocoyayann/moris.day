

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  if (event.url.pathname === '/blog/rsss') {
    console.log(`parh: ${event.url.pathname}`)

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://example.com/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </url>
    </urlset>`;

    return new Response(rss, {
      headers: {
        'Content-Type': 'application/xml'
      }
    });
  }

  return resolve(event);
}

//({ event, resolve }) => resolve(event)