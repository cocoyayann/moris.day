import { readFileSync } from 'node:fs';
import markdownit from 'markdown-it';

export async function load({params}) {
    const postfile = readFileSync(`/Users/moris/blog/src/lib/posts/${params.slug}.md`, 'utf8');

    let split_file = postfile.split("---\n",3)
    let front_matter = split_file[1]
    let metalist = front_matter.split("\n").filter((data)=>data!="")
    let body_text    = split_file[2]

    const md = markdownit()
    const result = md.render(body_text);

    return {"metadata": metalist, "post": result};
}