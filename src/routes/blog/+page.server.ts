import posts from '$lib/server/posts'
import readmd from '$lib/server/readmd'

export async function load(){
    let postlist = posts().map((id)=>{
        let metadata = readmd(id)['metadata']
        return {'id':id, 'meta':metadata}
    })

    return {'posts':postlist}
}