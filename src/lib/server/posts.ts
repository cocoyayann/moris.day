export default posts;

import path from 'node:path';
import { readdirSync } from 'node:fs';
import readmd from './readmd';

function posts(){
    const postPaths = readdirSync(`${process.cwd()}/posts`);
    const postNames = postPaths.map((post)=>path.parse(post).name).sort((a,b)=>{
        return readmd(b).metadata.date.getTime() - readmd(a).metadata.date.getTime()
    })

    return postNames;
}