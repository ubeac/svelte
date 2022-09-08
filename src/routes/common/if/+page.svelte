<script>
	import Example from '../../_layout-components/Example.svelte'

	import { Alert, Badge, Button, Card } from '$lib/components'

	let show = false
	let show2 = false
	let show3 = false
</script>

<h1>If prop</h1>
<Alert>
	<p>Please check source code to see example code</p>
</Alert>

<h2>Test 1</h2>
<p>
	you can use if={'{'}expression{'}'} prop for all HTML elements and Svelte components and if expression is false the component
	or element will not render
</p>

<Example>
	<Button on:click={() => (show = !show)}>Toggle</Button>

	<Card if={show}>This is Card</Card>
</Example>

<h2>Test 2</h2>
You can also use with native HTML elements

<Example>
	<Button on:click={() => (show2 = !show2)}>Toggle</Button>
	<h1 if={show2}>this is h1</h1>
</Example>

<h2>Test 2</h2>
Multi line props

<Example>
	<Button on:click={() => (show3 = !show3)}>Toggle</Button>
	<Badge
		shape="tile"
		color="secondary"
		href="/components/badges"
		class="customized-badge-class-for-test long class name"
		if={show3}>badge</Badge>
</Example>
