<script>
	import { Button } from '@ubeac/svelte'

	let show = false
	const toggle = () => (show = !show)
</script>

<Button on:click={toggle}>Toggle</Button>

<div class="examples">
	<div if={show}>this is content of div</div>
	<button if={show}>this is button</button>
	<p if={show}>this is p</p>
	<input if={show} placeholder="This is input" />
</div>

<style>
	.examples {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
