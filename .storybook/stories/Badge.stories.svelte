<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { COLORS } from '$lib/types'
	import { Badge, Button } from '$lib/components'

	// TODO: move below lines to types
	const SHAPES = [undefined, 'link', 'round', 'tile']
</script>

<!-- TODO: padding in all examples -->
<Meta
	title="Components/Badge"
	component={Badge}
	argTypes={{
		color: {
			control: {
				type: 'select',
				options: COLORS,
			},
		},
	}} />

<Template let:args>
	<Badge {...args}>Badge</Badge>
</Template>

<Story name="default" />
<Story name="Colors" let:args>
	{#each COLORS as color}
		<div style="display: inline-block; margin: 0.2em;">
			<Badge {...args} {color}>{color}</Badge>
		</div>
	{/each}
</Story>

<Story name="Outline badges" let:args>
	{#each COLORS as color}
		<div style="display: inline-block; margin: 0.2em;">
			<Badge {...args} {color} outline>{color}</Badge>
		</div>
	{/each}
</Story>

<Story name="Ghost" let:args>
	{#each COLORS as color}
		<div style="display: inline-block; margin: 0.2em;">
			<Badge {...args} {color} ghost>{color}</Badge>
		</div>
	{/each}
</Story>

<Story name="Headings" let:args>
	<h1>Example heading <Badge {...args}>New</Badge></h1>
	<h2>Example heading <Badge {...args}>New</Badge></h2>
	<h3>Example heading <Badge {...args}>New</Badge></h3>
	<h4>Example heading <Badge {...args}>New</Badge></h4>
	<h5>Example heading <Badge {...args}>New</Badge></h5>
	<h6>Example heading <Badge {...args}>New</Badge></h6>
</Story>

<Story name="Shapes" let:args>
	<div style="display: felx; text-align: center;">
		<Badge shape="tile" color="blue">Tile</Badge>
		<Badge shape="round" color="blue">Round</Badge>
		<Badge color="blue">default</Badge>
	</div>
</Story>

<Story name="Numbers" let:args>
	<div style="display: felx; text-align: center;">
		<Badge shape="round" color="blue">1</Badge>
		<Badge shape="round" color="azure">2</Badge>
		<Badge shape="round" color="indigo">3</Badge>
		<Badge shape="round" color="purple">4</Badge>
		<Badge shape="round" color="pink">5</Badge>
		<Badge shape="round" color="red">6</Badge>
		<Badge shape="round" color="orange">7</Badge>
		<Badge shape="round" color="yellow">8</Badge>
		<Badge shape="round" color="lime">9</Badge>
		<Badge shape="round" color="green">10</Badge>
		<Badge shape="round" color="teal">11</Badge>
		<Badge shape="round" color="cyan">12</Badge>
	</div>
</Story>

<Story name="Dot in badges" let:args>
	<div style="display: felx; text-align: center;">
		{#each COLORS as color}
			<Badge {...args} {color} dot />
		{/each}
	</div>
</Story>

<!-- TODO: href is not working -->
<Story name="href" let:args>
	<div style="display: felx; text-align: center;">
		<Badge color="blue" href="https://www.google.com">Google</Badge>
		<Badge color="azure">2</Badge>
		<Badge color="indigo">3</Badge>
		<Badge color="purple">4</Badge>
		<Badge color="pink">5</Badge>
		<Badge color="red">6</Badge>
		<Badge color="orange">7</Badge>
		<Badge color="yellow">8</Badge>
		<Badge color="lime">9</Badge>
		<Badge color="green">10</Badge>
		<Badge color="teal">11</Badge>
		<Badge color="cyan">12</Badge>
	</div>
</Story>

<Story name="Inside button" let:args>
	<Button>
		With Number
		<Badge {...args}>1</Badge>
	</Button>

	<Button>
		Empty
		<Badge {...args} />
	</Button>
</Story>
