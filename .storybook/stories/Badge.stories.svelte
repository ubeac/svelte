<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

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
	}} />

<Template let:args>
	<Badge {...args}>Badge</Badge>
</Template>

<Story name="default" />
<Story name="color" let:args>
	{#each COLORS as color}
		&nbsp;
		<Badge {...args} {color}>Badge {color}</Badge>
	{/each}
</Story>
<Story name="dot" args={{ dot: true }} />
<Story name="ghost" args={{ ghost: true, color: COLORS[1] }} />
<Story name="outline" args={{ outline: true, color: COLORS[1] }} />
<Story name="shape" args={{ color: COLORS[1] }}>
	<Badge shape="round">Round</Badge>
	<Badge shape="tile">Tile</Badge>
	<Badge>default</Badge>
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
