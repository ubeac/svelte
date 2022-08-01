<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'

	import { COLORS } from '$lib/types'
	import { Badge, Button } from '$lib/components'
</script>

<Meta
	title="Badge"
	component={Badge}
	argTypes={{
		color: {
			control: {
				type: 'select',
				options: COLORS,
			},
		},
		href: {
			control: {
				type: 'string',
			},
		},
	}} />

<Story name="default" let:args>
	<Badge {...args}>Badge</Badge>
</Story>

<Story name="Colors" let:args>
	<div class="example-badges">
		{#each COLORS as color}
			<Badge {...args} {color}>{color}</Badge>
		{/each}
	</div>
</Story>

<Story name="Outline" let:args>
	<div class="example-badges">
		{#each COLORS as color}
			<Badge {...args} {color} outline>{color}</Badge>
		{/each}
	</div>
</Story>

<Story name="Ghost" let:args>
	<div class="example-badges">
		{#each COLORS as color}
			<Badge {...args} {color} ghost>{color}</Badge>
		{/each}
	</div>
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
	<div class="example-badges">
		<Badge color="green">default</Badge>
		<Badge shape="round" color="azure">Round</Badge>
		<Badge shape="tile" color="blue">Tile</Badge>
	</div>
</Story>

<Story name="Numbers and shapes" let:args>
	<div>
		<div class="example-badges">
			<Badge color="blue">1</Badge>
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
	</div>
	<div>
		<div class="example-badges">
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
	</div>
	<div>
		<div class="example-badges">
			<Badge shape="tile" color="blue">1</Badge>
			<Badge shape="tile" color="azure">2</Badge>
			<Badge shape="tile" color="indigo">3</Badge>
			<Badge shape="tile" color="purple">4</Badge>
			<Badge shape="tile" color="pink">5</Badge>
			<Badge shape="tile" color="red">6</Badge>
			<Badge shape="tile" color="orange">7</Badge>
			<Badge shape="tile" color="yellow">8</Badge>
			<Badge shape="tile" color="lime">9</Badge>
			<Badge shape="tile" color="green">10</Badge>
			<Badge shape="tile" color="teal">11</Badge>
			<Badge shape="tile" color="cyan">12</Badge>
		</div>
	</div>
</Story>

<Story name="Dots" let:args>
	<div class="example-badges">
		{#each COLORS as color}
			<Badge {...args} {color} dot />
		{/each}
	</div>
</Story>

<Story name="Links" let:args>
	<div class="example-badges">
		<Badge href="#" color="blue">Blue</Badge>
		<Badge href="#" color="azure">Azure</Badge>
		<Badge href="#" color="indigo">Indigo</Badge>
		<Badge href="#" color="purple">Purple</Badge>
		<Badge href="#" color="pink">Pink</Badge>
		<Badge href="#" color="red">Red</Badge>
		<Badge href="#" color="orange">Orange</Badge>
		<Badge href="#" color="yellow">Yellow</Badge>
		<Badge href="#" color="lime">Lime</Badge>
		<Badge href="#" color="green">Green</Badge>
		<Badge href="#" color="teal">Teal</Badge>
		<Badge href="#" color="cyan">Cyan</Badge>
	</div>
</Story>

<Story name="Button with badge" let:args>
	<div class="example-badges">
		<Button>
			Notifications
			<Badge {...args} color="green">1</Badge>
		</Button>
		<Button>
			Notifications
			<Badge {...args} color="red">5</Badge>
		</Button>
	</div>
</Story>
