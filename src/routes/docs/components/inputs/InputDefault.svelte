<script lang="ts">
	import { El, Input } from '@ubeac/svelte'

	let value: any
</script>

<Input bind:value placeholder="Try to type something..." />
<El>You typed: {value ?? ''}</El>
