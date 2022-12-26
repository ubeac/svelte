<script lang="ts">
	import { El, FormRangeSlider } from '@ubeac/svelte'

	let value1: any
	let value2: any
</script>

<FormRangeSlider
	color="primary"
	bind:value={value1}
	startValue="40"
	min="10"
	max="100"
	step="10"
	connect="lower"
	label="Zoom(X)" />
<El>Value: {value1}</El>

<FormRangeSlider bind:value={value2} startValue="20,70" min="10" max="100" step="1" connect label="Distance Range" />
<El>Values: {value2}</El>
