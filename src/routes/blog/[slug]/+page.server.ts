// @ts-nocheck
import readmd from '$lib/server/readmd';
import { remark } from 'remark'

export async function load({params}) {

    let md = readmd(params.slug)

    let mdast = remark().parse(md.post)

    let header = mdast.children.filter((i) => i.type=='heading').map((i)=>{
        let title: string = i.children[0].value
        return {"depth": i.depth, "title": title}
    })

    return {
        id: params.slug,
        metadata: md.metadata,
        post: md.post,
        heading: header
    }
}