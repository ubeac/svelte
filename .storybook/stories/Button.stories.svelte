<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { COLORS } from '$lib/types'
	import { Button, Icon } from '$lib/components'

	// TODO: move below lines to types
	const SIZES = ['sm', 'md', 'lg']
	const SHAPES = [undefined, 'circle', 'link', 'round', 'tile']
</script>

<Meta
	title="Button"
	component={Button}
	parameters={{
		actions: {
			handles: ['click'],
		},
	}}
	argTypes={{
		color: {
			control: {
				type: 'select',
				options: COLORS,
			},
		},
		size: {
			defaultValue: 'md',
			control: {
				type: 'select',
				options: SIZES,
			},
		},
		shape: {
			defaultValue: undefined,
			control: {
				type: 'select',
				options: SHAPES,
			},
		},
	}} />

<Template let:args>
	<Button {...args}>Button</Button>
</Template>

<Story name="default" />

<Story name="Colors" let:args>
	<div class="btn-list">
		{#each COLORS as color}
			<Button {color}>{color}</Button>
		{/each}
	</div>
</Story>

<Story name="Disabled">
	<div class="btn-list">
		{#each COLORS as color}
			<Button disabled {color}>{color}</Button>
		{/each}
	</div>
</Story>

<Story name="Block">
	<Button block>Button</Button>
</Story>

<Story name="Ghost">
	<div class="btn-list">
		{#each COLORS as color}
			<Button ghost {color}>{color}</Button>
		{/each}
	</div>
</Story>

<Story name="Shapes">
	<!-- TODO: don't we need this as a feature/property in ButtonGroup component? -->
	<div class="btn-list">
		{#each SHAPES as shape}
			<Button {shape}>{shape}</Button>
		{/each}
	</div>
</Story>

<Story name="Outline">
	<div class="btn-list">
		{#each COLORS as color}
			<Button outline {color}>{color}</Button>
		{/each}
	</div>
</Story>

<Story name="Size">
	<Button size="sm" color="primary">Small button</Button>
	<Button size="sm">Small button</Button>
	<Button size="md" color="primary">Medium button</Button>
	<Button size="md">Medium button</Button>
	<Button size="lg" color="primary">Large button</Button>
	<Button size="lg">Large button</Button>
</Story>

<Story name="Buttons with icons">
	<div class="btn-list">
		<Button>
			<Icon name="send" />
			Send
		</Button>
		<Button color="warning">
			<Icon name="upload" />
			Upload
		</Button>
		<Button color="success">
			<Icon name="plus" />
			Add
		</Button>
		<Button color="primary">
			<Icon name="heart" />
			Like
		</Button>
		<Button color="red">
			<Icon name="link" />
			Link
		</Button>
		<Button color="info">
			<Icon name="edit" />
			Edit
		</Button>
	</div>
</Story>

<Story name="Socal buttons">
	<div class="btn-list">
		<Button href="#" class="btn-facebook">
			<Icon name="brand-facebook" />Facebook
		</Button>
		<Button href="#" class="btn-twitter">
			<Icon name="brand-twitter" />Twitter
		</Button>
		<Button href="#" class="btn-google">
			<Icon name="brand-google" />Google
		</Button>
		<Button href="#" class="btn-youtube">
			<Icon name="brand-youtube" />Youtube
		</Button>
		<Button href="#" class="btn-vimeo">
			<Icon name="brand-vimeo" />Vimeo
		</Button>
		<Button href="#" class="btn-dribbble">
			<Icon name="brand-dribbble" />Dribbble
		</Button>
		<Button href="#" class="btn-github">
			<Icon name="brand-github" />Github
		</Button>
		<Button href="#" class="btn-instagram">
			<Icon name="brand-instagram" />Instagram
		</Button>
		<Button href="#" class="btn-pinterest">
			<Icon name="brand-pinterest" />Pinterest
		</Button>
		<Button href="#" class="btn-vk">
			<Icon name="brand-vk" />VK
		</Button>
		<Button href="#" class="btn-rss">
			<Icon name="rss" />RSS
		</Button>
		<Button href="#" class="btn-flickr">
			<Icon name="brand-flickr" />flickr
		</Button>
		<Button href="#" class="btn-bitbucket">
			<Icon name="brand-bitbucket" />bitbucket
		</Button>
		<Button href="#" class="btn-tabler">
			<Icon name="brand-tabler" />tabler
		</Button>
	</div>
</Story>

<Story name="Icon buttons">
	<div class="btn-list mb-3">
		<Button>
			<Icon name="send" />
		</Button>
		<Button color="warning">
			<Icon name="upload" />
		</Button>
		<Button color="success">
			<Icon name="plus" />
		</Button>
		<Button color="primary">
			<Icon name="heart" />
		</Button>
		<Button color="red">
			<Icon name="link" />
		</Button>
		<Button color="info">
			<Icon name="edit" />
		</Button>
		<Button color="purple">
			<Icon name="activity" />
		</Button>
		<Button color="dark">
			<Icon name="brand-github" />
		</Button>
		<Button color="azure">
			<Icon name="bell" />
		</Button>
		<Button outline>
			<Icon name="send" />
		</Button>
		<Button outline color="warning">
			<Icon name="upload" />
		</Button>
		<Button outline color="success">
			<Icon name="plus" />
		</Button>
		<Button outline color="primary">
			<Icon name="heart" />
		</Button>
		<Button outline color="red">
			<Icon name="link" />
		</Button>
		<Button outline color="info">
			<Icon name="edit" />
		</Button>
		<Button outline color="purple">
			<Icon name="activity" />
		</Button>
		<Button outline color="dark">
			<Icon name="brand-github" />
		</Button>
		<Button outline color="azure">
			<Icon name="bell" />
		</Button>
	</div>
</Story>

<Story name="Loading">
	<Button loading color="primary">Submit</Button>
	<Button loading color="success">Loading button with loooong content</Button>
</Story>

<Story name="href">
	<!-- TODO: this is not working -->
	<Button href="https://www.google.com/" color="primary" shape="link">Google</Button>
</Story>

<!-- TODO: add Button with Avatar -->

<Story name="TODO">
	<b>
		These scenarios should be developed
		<br />
		--------------------Avatar
		<br />
		--------------------Avatar
		<br />
		--------------------Avatar
	</b>

	<div class="btn-list justify-content-center">
		<a href="#" class="btn">Save and continue</a>
		<a href="#" class="btn btn-primary">Save changes</a>
	</div>
	<div class="btn-list justify-content-end">
		<a href="#" class="btn">Save and continue</a>
		<a href="#" class="btn btn-primary">Save changes</a>
	</div>
</Story>
