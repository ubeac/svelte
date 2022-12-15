<script>
	import { Checkbox } from '@ubeac/svelte'

	let value = false
</script>

<Checkbox bind:value text="this is text" description="this is description" />
<Checkbox bind:value text="this is text" description="this is description by danger color" />
