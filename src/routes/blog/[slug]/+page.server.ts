import { readFileSync } from 'node:fs';
import markdownit from 'markdown-it';
import yaml from 'js-yaml';

function mdparser(file: string){
    let split = file.split("---\n",3);
    let front = split[1]
    let meta = yaml.load(front);
    let body  = split[2]

    type metadata = {
        title: string,
        description: string,
        thunbnail: string,
        category: string,
        tags: string[]
    }

    return {
        "metadata": meta as metadata,
        "body": body
    }
    
}

export async function load({params}) {
    const postfile = readFileSync(`/Users/moris/blog/src/lib/posts/${params.slug}.md`, 'utf8');

    const parsed = mdparser(postfile);
    const md = markdownit();
    const result = md.render(parsed.body);

    if (typeof parsed.metadata === 'object' && parsed.metadata != null){
        return {"metadata": parsed.metadata, "post": result};
    } else {
        throw 'err: cannot parse front matter'
    }
}