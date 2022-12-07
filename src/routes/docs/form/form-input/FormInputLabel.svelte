<script lang="ts">
	import { FormInput } from '@ubeac/svelte'

	let value: string
</script>

<FormInput label="name:" placeholder="Enter your name..." bind:value />

<span if={!!value}>{value}</span>
