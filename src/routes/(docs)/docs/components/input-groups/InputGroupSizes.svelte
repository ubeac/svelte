<script lang="ts">
	import { Input } from '@ubeac/svelte'
</script>

<Input size="sm">
	<span slot="start">Small</span>
</Input>

<Input>
	<span slot="start">Default</span>
</Input>

<Input size="lg">
	<span slot="start">Large</span>
</Input>
