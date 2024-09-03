import category from '$lib/server/category'

export async function load() {
    return {"categorys": Object.keys(category()).sort()}
}