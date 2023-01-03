<script lang="ts">
	import { FormAutocomplete } from '@ubeac/svelte'

	async function load(query: string) {
		const url = 'https://api.github.com/search/users?q=' + query

		try {
			const res = await fetch(url)
			const response = await res.json()
			const users: any[] = response.items

			return users
		} catch (err) {
			return []
		}
	}

	let value: string
</script>

<FormAutocomplete
	{load}
	key="id"
	text="login"
	label="Github User:"
	placeholder="find github user by username"
	bind:value />

<span if={!!value}>{value}</span>
