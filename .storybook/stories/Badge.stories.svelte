<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { COLORS } from '@app/types'
	import { Badge, Button } from '@app/components'
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
<Story name="href" args={{ href: 'https://www.google.com/' }} />
<Story name="outline" args={{ outline: true, color: COLORS[1] }} />
<Story name="round" args={{ round: true, color: COLORS[1] }} />
<Story name="tile" args={{ tile: true }} />

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
