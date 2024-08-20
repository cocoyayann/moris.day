export const prerender = true

import type { RequestHandler } from '@sveltejs/kit';
import posts from '$lib/server/posts'
import readmd from '$lib/server/readmd'

export const GET: RequestHandler = async () => {

    let items = ""

    posts().slice(0,15).map((id)=>{
        let meta = readmd(id).metadata

        items += `
        <item>
            <title>${meta.title}</title>
            <description>${meta.description}</description>
            <link>https://moris.day/blog${id}</link>
            <pubDate>${meta.date.toUTCString()}</pubDate>
        </item>`
    })

    let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
    <channel>
        <title>moris.day blog RSSfeed</title> 
        <description>工作とか化学とかプログラミングとか</description>
        <link>https://moris.day/blog</link>
        <pubDate>${(new Date()).toUTCString()}</pubDate>
        ${items}
    </channel>
</rss>`

    return new Response(rss);
};
