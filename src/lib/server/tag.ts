export default tag

import posts from '$lib/server/posts'
import readmd from '$lib/server/readmd'

function tag(){
    let tagobj: {[key:string]: string[]} = {}

    posts().forEach((id)=>{
        readmd(id).metadata.tags.forEach((tagname)=>{
            if(tagname in tagobj){
                tagobj[tagname].push(id)
            } else {
                tagobj[tagname] = [id]
            }
        })
    })
    return tagobj
}