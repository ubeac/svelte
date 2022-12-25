<script lang="ts">
	import { RangeSlider } from '@ubeac/svelte'

	let value1: any
	let value2: any
</script>

<RangeSlider color="primary" bind:value={value1} min="0" max="100" step="10" startValue="40" tooltips />
<i>Value: {value1}</i>

<RangeSlider bind:value={value2} min="0" max="100" step="1" connect startValue="20,70" />
<i>Values: {value2}</i>
