<script lang="ts">
	import { Checkbox, FormCheckbox } from '$lib/components'

	let check1Value: boolean = false
	let check2Value: boolean = false
</script>

<Checkbox bind:value={check1Value} />
<Checkbox bind:value={check2Value} />
<Checkbox bind:value={check2Value} disabled />
<Checkbox bind:value={check1Value} disabled />
<Checkbox bind:value={check2Value} indeterminate />
<Checkbox bind:value={check1Value} indeterminate />

<br />

<FormCheckbox label="check 1" bind:value={check1Value} />
<FormCheckbox label="check 2" bind:value={check2Value} />

<style lang="scss" global>
	@import '../scss';
</style>
