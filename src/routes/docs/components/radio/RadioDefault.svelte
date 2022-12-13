<script lang="ts">
	import { Radio } from '@ubeac/svelte'

	let selected = false
</script>

<Radio label="radio 1" bind:selected />
<hr />
Selected:{selected}
