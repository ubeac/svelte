<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Button, ButtonGroup, Icon } from '$lib/components'

	const SIZES = ['sm', 'md', 'lg']
</script>

<Meta title="ButtonGroup" component={ButtonGroup} argTypes={{}} />

<Story name="Default" let:args>
	<div class="example-buttons">
		<ButtonGroup {...args}>
			<Button>Button</Button>
			<Button>Button</Button>
			<Button>Button</Button>
		</ButtonGroup>
	</div>
</Story>

<Story name="Vertical" let:args>
	<div class="example-buttons">
		<ButtonGroup vertical {...args}>
			<Button>Button</Button>
			<Button>Button</Button>
			<Button>Button</Button>
		</ButtonGroup>
	</div>
</Story>

<Story name="Compact Vertical" let:args>
	<div class="example-buttons">
		<ButtonGroup compact {...args}>
			<Button>Button</Button>
			<Button>Button</Button>
			<Button>Button</Button>
		</ButtonGroup>
	</div>
</Story>

<Story name="Compact Horizontal" let:args>
	<div class="example-buttons">
		<ButtonGroup compact vertical {...args}>
			<Button>Button</Button>
			<Button>Button</Button>
			<Button>Button</Button>
		</ButtonGroup>
	</div>
</Story>

<Story name="Wrap" let:args>
	<div class="example-buttons">
		<ButtonGroup wrap {...args}>
			{#each Array(12) as _, i}
				<Button>Button {i + 1}</Button>
			{/each}
		</ButtonGroup>
	</div>
</Story>

<Story name="Toolbar" let:args>
	<div class="example-buttons">
		<ButtonGroup compact {...args}>
			<Button>
				<Icon name="align-left" />
			</Button>
			<Button>
				<Icon name="align-center" />
			</Button>
			<Button>
				<Icon name="align-right" />
			</Button>
		</ButtonGroup>
	</div>
</Story>
