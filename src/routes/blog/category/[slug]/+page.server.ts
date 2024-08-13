import category from '$lib/server/category'

export async function load({params}) {  
    return {posts: category()[params.slug], id: params.slug}
}