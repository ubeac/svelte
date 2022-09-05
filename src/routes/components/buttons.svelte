<script>
	import { Button, Icon } from '$lib/components'
	import { onMount } from 'svelte'

	let counter = 0

	onMount(() => {
		setInterval(() => (counter += 1), 1000)
	})

	let colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
</script>

<h1>Buttons</h1>
{#each colors as color}
	<Button {color}>Button {color}</Button>
{/each}

<br /><br />
{#each colors as color}
	<Button {color}>Button {counter} {color}</Button>
{/each}

<br /><br />
{#each colors as color}
	<Button {color}>
		<Icon slot="start" name="user" />
		Button {counter}
		{color}
	</Button>
{/each}
<br /><br />
{#each colors as color}
	<Button {color}>
		Button {counter}
		{color}
		<Icon slot="end" name="user" />
	</Button>
{/each}

<br /><br />
{#each colors as color}
	<Button {color}>
		<Icon slot="start" name="user" />
	</Button>
{/each}

<style global>
	.u-button span + span {
		margin-left: 4px;
	}
</style>
