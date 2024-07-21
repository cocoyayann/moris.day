import { readFileSync } from 'node:fs';

export async function load({params}) {
    const post = readFileSync(`/Users/moris/blog/src/lib/posts/${params.slug}.md`, 'utf8');

    return {"post":post};
}