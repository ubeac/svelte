<script>
	import { Button, Icon, Preview } from '$lib/components'
	import { onMount } from 'svelte'
	import Example from '../../_layout-components/Example.svelte'
	import ButtonColors from './ButtonColors.svelte'

	let counter = 0

	onMount(() => {
		setInterval(() => (counter += 1), 1000)
	})

	let colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
</script>

<h1>Buttons</h1>

<h2>Default</h2>
<p>
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eligendi quaerat eveniet minus et explicabo doloribus
	dolorem dolor, tenetur voluptatibus? Accusantium, quam porro? Culpa amet sint illo sequi labore cum.
</p>
<Example>
	<Button>Default Button</Button>
</Example>

<h2>Colors</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eos deserunt eveniet obcaecati natus voluptatum
	inventore mollitia quam harum facilis? Repellendus explicabo maxime exercitationem recusandae quo dolorem itaque at
	dignissimos.
</p>
<Preview vertical src="./ButtonColors.svelte">
	<ButtonColors />
</Preview>

<h2>Outline Buttons</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non illum tenetur explicabo, earum, in vel accusantium
	dolorem ex beatae corporis odio dignissimos! Voluptatibus fugiat repellat aspernatur harum nam facere.
</p>
<Example>
	{#each colors as color}
		<Button outline {color}>{color}</Button>
	{/each}
</Example>

<h2>Button With Icon</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perferendis adipisci, inventore saepe dolor laudantium
	delectus in, ratione laborum voluptate at corrupti. Facere omnis, quis qui nam debitis et adipisci.
</p>
<Example>
	{#each colors as color}
		<Button {color}>
			<Icon name="user" />
			{color}
		</Button>
	{/each}
	<br />
	{#each colors as color}
		<Button {color}>
			{color}
			<Icon name="user" />
		</Button>
	{/each}
</Example>

<h2>Button with Href</h2>
<Example>
	{#each colors as color}
		<Button href="/components/buttons" {color}>
			{color}
			<Icon slot="end" name="user" />
		</Button>
	{/each}
</Example>
