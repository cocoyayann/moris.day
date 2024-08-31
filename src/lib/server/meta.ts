export default meta

import jsYaml from "js-yaml"
import { parse } from '@twemoji/parser';
import { error } from '@sveltejs/kit';

function meta(fm_list: string) {

    let fm = jsYaml.load(fm_list)

    let fm_json = (x: unknown) =>{
        if (typeof x === 'object' && x !== null){
            let title       = 'title' in x       && typeof x.title === 'string'      ? x.title : ''
            let description = 'description' in x && typeof x.description === 'string'? x.description : ''
            let thumbnail   = 'thumbnail' in x   && typeof x.thumbnail === 'string'  ? x.thumbnail : ''
            let emoji       = 'emoji' in x       && typeof x.emoji === 'string'      ? x.emoji : ''
            let date        = 'date' in x        && x.date instanceof Date           ? x.date : new Date()
            let category    = 'category' in x    && typeof x.category === 'string'   ? x.category : 'other'
            let tags        = 'tags' in x        && Array.isArray(x.tags)            ? x.tags : []

            thumbnail = thumbnail? `/img/${thumbnail}` : ''
            if (emoji){
                emoji = parse(emoji)[0]?.url ?? ""
            }

            return {title, description,thumbnail,emoji,date,category,tags}
        }
        error(500,{message:'Invalid frontmatter'})
    }

    return fm_json(fm)
}