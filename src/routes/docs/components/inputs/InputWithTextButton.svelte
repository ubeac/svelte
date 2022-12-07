<script>
	import { Button, Input } from '@ubeac/svelte'
</script>

<Input>
	<Button slot="start">Button</Button>
</Input>

<Input placeholder="Recipient's username">
	<Button slot="end">Button</Button>
</Input>

<Input>
	<svelte:fragment slot="start">
		<Button>Button</Button>
		<Button>Button</Button>
	</svelte:fragment>
</Input>

<Input placeholder="Recipient's username">
	<svelte:fragment slot="start">
		<span>@</span>
		<Button>Button</Button>
	</svelte:fragment>
	<svelte:fragment slot="end">
		<Button>Button</Button>
		<span>@</span>
	</svelte:fragment>
</Input>
