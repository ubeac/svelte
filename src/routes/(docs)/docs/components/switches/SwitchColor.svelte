<script>
	import { Switch } from '@ubeac/svelte'

	let checked = true
</script>

<Switch bind:checked text="primary" color="primary" />
<Switch bind:checked text="secondary" color="secondary" />
<Switch bind:checked text="success" color="success" />
<Switch bind:checked text="warning" color="warning" />
<br />
<Switch bind:checked text="pink" color="pink" />
<Switch bind:checked text="blue" color="blue" />
<Switch bind:checked text="yellow" color="yellow" />
<br />
<Switch bind:checked text="orange" color="orange" />
<Switch bind:checked text="github" color="github" />
<Switch bind:checked text="facebook" color="facebook" />
