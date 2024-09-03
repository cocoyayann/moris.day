import tag from '$lib/server/tag'

export async function load({params}) {  
    return {taglist: tag()[params.slug], id: params.slug}
}