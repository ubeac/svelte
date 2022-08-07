<script lang="ts">
	import { Divider } from '$lib/components'
	import { Icon, Switch, Textarea } from '$lib/components/index'

	let value = 'test'
	let value2 = false
</script>

{value2}
<Divider />
<Switch bind:value={value2}>
	<span>switch <Icon name="home" size="sm" /></span>
</Switch>
<!-- <FormCheckboxGroup on:click={console.log} bind:value items={{ a: 1, b: 2, c: 3 }} /> -->
