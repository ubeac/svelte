<script lang="ts">
	import { onMount } from 'svelte'
	import type { SvelteComponent } from 'svelte'

	import { AppLoadingBar, Button, Card, CardBody, CardHeader, FormCheckbox, Select } from '$lib/components'
	import type { Colors } from '$lib/types'

	let el: SvelteComponent
	let color: Colors
	let indeterminate: boolean
	let fixed: boolean
	let showInCard: boolean = false

	onMount(() => {
		el.start()
	})

	function start() {
		color = 'primary'
		el.start()
	}

	function done() {
		el.done()
	}

	function push() {
		el.push()
	}

	function pop() {
		el.pop()
	}

	function success() {
		color = 'success'
		el.done()
	}
	function fail() {
		color = 'danger'
		el.done()
	}
</script>

<AppLoadingBar {fixed} {color} {indeterminate} bind:this={el} />

<Card outline class="m-4">
	{#if showInCard}
		<AppLoadingBar {color} {indeterminate} />
	{/if}
	<CardHeader>Controls</CardHeader>
	<CardBody>
		<FormCheckbox bind:value={indeterminate} label="Indeterminate" />
		<FormCheckbox bind:value={fixed} label="fixed" />
		<FormCheckbox bind:value={showInCard} label="Show inside card?" />
		<Select
			bind:value={color}
			items={['primary', 'secondary', 'success', 'danger', 'red', 'blue', 'warning', 'gray', 'purple']} />
		<Button on:click={start}>Start</Button>
		<Button on:click={done}>Done</Button>
		<Button on:click={fail}>Fail</Button>
		<Button on:click={success}>Success</Button>
		<Button on:click={push}>Push</Button>
		<Button on:click={pop}>Pop</Button>
	</CardBody>
</Card>
<div style="height: 100vh;" />
<div>hi</div>
<div style="height: 100vh;" />
<div>hi</div>
<div style="height: 100vh;" />
<div>hi</div>
<div style="height: 100vh;" />
<div>hi</div>
<div style="height: 100vh;" />
<div>hi</div>

