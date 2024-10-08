export default readmd;

import { readFileSync } from 'node:fs';
import meta from '$lib/server/meta'


function readmd(postid:string){
    const postfile = readFileSync(`${process.cwd()}/posts/${postid}.md`, 'utf8');

    let fm_line = postfile.split('\n')

    let line_no:number[] = []
    fm_line.forEach((i,n)=>{
        if(i=='---'){line_no.push(n)}
    })

    let md_text = fm_line.slice(line_no[1]+1).join('\n')
    let fm_list = fm_line.slice(line_no[0]+1, line_no[1]).join('\n')

    let metadata = meta(fm_list)

    return {"metadata": metadata, 'post': md_text}
}