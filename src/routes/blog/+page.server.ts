import {readdirSync} from 'node:fs';
import path from 'node:path';

export async function load(){
    const posts = readdirSync("/Users/moris/blog/src/lib/posts/");
    const postname = posts.map((post)=>path.parse(post).name);

    return {"posts":postname};
}