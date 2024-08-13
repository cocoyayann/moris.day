export default posts;

import path from 'node:path';
import { readdirSync } from 'node:fs';

function posts(){
    const postPaths = readdirSync(`${process.cwd()}/src/lib/posts`)
    const postNames = postPaths.map((post)=>path.parse(post).name);

    return postNames;
}