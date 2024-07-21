import {readdirSync} from 'node:fs';

export async function load(){
    const posts = readdirSync("/Users/moris/blog/src/lib/posts/");
    return {"posts":posts};
}