export default meta

import jsYaml from "js-yaml"
import { error } from '@sveltejs/kit';

function meta(fm_list: string) {

    let fm = jsYaml.load(fm_list)

    let fm_json = (x: unknown) =>{
        if (typeof x === 'object' && x !== null){
            let title       = 'title' in x       && typeof x.title === 'string'      ? x.title : ''
            let description = 'description' in x && typeof x.description === 'string'? x.description : ''
            let thumbnail   = 'thumbnail' in x   && typeof x.thumbnail === 'string'  ? x.thumbnail : ''
            let date        = 'date' in x        && x.date instanceof Date           ? x.date : new Date()
            let category    = 'category' in x    && typeof x.category === 'string'   ? x.category : 'other'
            let tags        = 'tags' in x        && Array.isArray(x.tags)            ? x.tags : []

            return {title, description,thumbnail,date,category,tags}
        }
        error(404)
    }

    return fm_json(fm)
}