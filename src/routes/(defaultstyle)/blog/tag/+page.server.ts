import tag from '$lib/server/tag'

export async function load() {
    return {"tags": Object.keys(tag()).sort()}
}