export default meta

import jsYaml from "js-yaml"

function meta(fm_list: string) {

    interface metatype{
        title: string,
        description: string,
        thumbnail: string,
        date: Date,
        category: string,
        tags: string[]
    }

    let fm_json = jsYaml.load(fm_list) as metatype

    return fm_json
}