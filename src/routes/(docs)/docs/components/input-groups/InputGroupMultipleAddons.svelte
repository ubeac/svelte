<script lang="ts">
	import { Input } from '@ubeac/svelte'
</script>

<Input>
	<svelte:fragment slot="start">
		<span>$</span>
		<span>0.00</span>
	</svelte:fragment>
</Input>

<Input>
	<svelte:fragment slot="end">
		<span>$</span>
		<span>0.00</span>
	</svelte:fragment>
</Input>
