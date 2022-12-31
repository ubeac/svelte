<script>
	import { El, Textarea } from '@ubeac/svelte'

	let value = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `
</script>

<Textarea rows="8" placeholder="please write your bio ..." bind:value />
<El>value: {value ?? ''}</El>
