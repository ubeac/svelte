<script lang="ts">
	import { El, FormInput } from '@ubeac/svelte'

	let value: string
</script>

<FormInput label="Name" placeholder="Enter your name..." bind:value />
<FormInput label="Name (readonly)" readonly placeholder="Enter your name..." bind:value />
<FormInput label="Name (disabled)" disabled placeholder="Enter your name..." bind:value />
<FormInput label="Name (required)" required placeholder="Enter your name..." bind:value />
<El tag="i">You typed: {value ?? ''}</El>
