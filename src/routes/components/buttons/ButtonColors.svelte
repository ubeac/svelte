<script lang="ts">
	import { Button } from '@ubeac/svelte'

	let colors: string[] = ['primary', 'secondary', 'success', 'warning', 'info', 'danger']
</script>

{#each colors as color}
	<Button {color}>Button {color}</Button>
{/each}
