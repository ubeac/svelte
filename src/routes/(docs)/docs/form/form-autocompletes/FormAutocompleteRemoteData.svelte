<script lang="ts">
	import { El, FormAutocomplete } from '@ubeac/svelte'

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

<FormAutocomplete label="Search Github repositories" {load} key="id" text="full_name" bind:value hint="id = {value}" />
