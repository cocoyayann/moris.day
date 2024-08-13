export default category

import posts from '$lib/server/posts'
import readmd from '$lib/server/readmd'

function category(){
    let catobj: {[key:string]: string[]} = {}

    posts().forEach((id)=>{
        let cat = readmd(id).metadata.category
        
        if(cat in catobj){
            catobj[cat].push(id)
        } else {
            catobj[cat] = [id]
        }
    })
    return catobj
}