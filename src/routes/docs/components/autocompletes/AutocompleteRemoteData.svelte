<script lang="ts">
	import { Autocomplete } from '@ubeac/svelte'

	function load(query: string) {
		const url = 'https://api.github.com/search/repositories?q=' + encodeURIComponent(query)
		return fetch(url)
			.then((res) => res.json())
			.then((json) => json.items)
			.catch(() => {
				return []
			})
	}

	let value = ''
</script>

<p>Search Github repositories</p>
<Autocomplete {load} key="id" text="full_name" bind:value />

<div if={!!value}>id={value}</div>
