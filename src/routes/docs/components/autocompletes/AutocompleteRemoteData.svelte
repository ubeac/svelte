<script lang="ts">
	import { Autocomplete, El } from '@ubeac/svelte'

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

<El mb="2">Search Github repositories</El>
<Autocomplete {load} key="id" text="full_name" bind:value />
{#if value}
	<i>id={value}</i>
{/if}
