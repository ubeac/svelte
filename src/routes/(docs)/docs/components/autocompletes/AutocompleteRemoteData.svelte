<script lang="ts">
	import { Autocomplete, El } from '@ubeac/svelte'

	function load(query: string) {
		const url = 'https://api.github.com/search/repositories?q=' + encodeURIComponent(query)
		return fetch(url)
			.then((response) => response.json())
			.then((json) => json.items)
			.catch(() => {
				return []
			})
	}

	let value = ''
</script>

<El mb="2">Search Github repositories</El>
<Autocomplete {load} itemKey="id" itemValue="full_name" bind:value />
{#if value}
	<i>id={value}</i>
{/if}
