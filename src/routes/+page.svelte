<script>
    import { onMount } from "svelte";

    onMount(
        async function () {
            let res = await fetch(
                'https://mi.moris.day/api/notes/show',
                {
                    method: "POST",
                    body: '{"noteId":"9wjoqnygmciw00qk"}',
                    headers: {"Content-Type": "application/json"}
                }
            )

            console.log(await res.json())
        }
    )
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<a href="/blog">blog</a><span>👈</span>
