<script>
	import { Textarea } from '@ubeac/svelte'

	let value = ''
</script>

<Textarea cols={30} rows={10} resizable bind:value />

<p if={value.length > 0}>{value}</p>
