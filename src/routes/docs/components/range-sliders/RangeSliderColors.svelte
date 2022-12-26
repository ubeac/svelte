<script lang="ts">
	import { RangeSlider } from '@ubeac/svelte'

	let value: any
</script>

<RangeSlider color="primary" bind:value startValue="70" min="10" max="100" step="1" connect="lower" />
<RangeSlider color="warning" bind:value startValue="40" min="10" max="100" step="1" connect="upper" />
<RangeSlider color="success" bind:value startValue="70" min="10" max="100" step="1" connect="lower" />
<RangeSlider color="danger" bind:value startValue="40" min="10" max="100" step="1" connect="upper" />
<RangeSlider color="purple" bind:value startValue="70" min="10" max="100" step="1" connect="lower" />
<RangeSlider color="azure" bind:value startValue="40" min="10" max="100" step="1" connect="upper" />
