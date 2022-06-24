<script lang="ts">
	import { Checkbox } from '$lib/components'
	import { Button } from '$lib/components'

	let check1Value: boolean = false
	let check2Value: boolean = false
</script>

<Checkbox bind:value={check1Value} />
<Checkbox bind:value={check2Value} />
<Checkbox bind:value={check2Value} disabled />
<Checkbox bind:value={check1Value} disabled />
<Checkbox bind:value={check2Value} indeterminate />
<Checkbox bind:value={check1Value} indeterminate />

<div>
	<Button color="red">This is button</Button>
	<Button block>This is another button</Button>
	<Button color="primary" block elevation={0}>This is button 3</Button>
</div>
