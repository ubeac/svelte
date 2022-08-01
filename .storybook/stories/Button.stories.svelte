<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'

	import { COLORS } from '$lib/types'
	import { BUTTON_SHAPES, BUTTON_SIZES, Avatar, Button, ButtonGroup, Icon, Grid, GridItem } from '$lib/components'
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
		href: {
			control: {
				type: 'string',
			},
		},
		size: {
			defaultValue: 'md',
			control: {
				type: 'select',
				options: BUTTON_SIZES,
			},
		},
		shape: {
			defaultValue: undefined,
			control: {
				type: 'select',
				options: BUTTON_SHAPES,
			},
		},
	}} />

<Story name="Default" let:args>
	<Button {...args}>Button</Button>
</Story>

<Story name="Colors" let:args>
	<div class="example-buttons">
		{#each COLORS as color}
			<Button {color} {...args} elevation="0">{color}</Button>
		{/each}
	</div>
</Story>

<Story name="Disabled" let:args>
	<div class="example-buttons">
		{#each COLORS as color}
			<Button {color} disabled {...args}>{color}</Button>
		{/each}
	</div>
</Story>

<Story name="Outline" let:args>
	<div class="example-buttons">
		{#each COLORS as color}
			<Button {color} outline {...args}>{color}</Button>
		{/each}
	</div>
</Story>

<Story name="Ghost" let:args>
	<div class="example-buttons">
		{#each COLORS as color}
			<Button {color} ghost {...args}>{color}</Button>
		{/each}
	</div>
</Story>

<Story name="Shapes" let:args>
	<div class="example-buttons">
		{#each BUTTON_SHAPES as shape, index}
			<Button size="lg" {shape} {...args} title={shape}>{index}</Button>
		{/each}
	</div>
</Story>

<Story name="Size" let:args>
	<div class="example-buttons">
		{#each BUTTON_SIZES as size}
			<Button {size} {...args}>{size}</Button>
		{/each}
	</div>
</Story>

<Story name="Buttons with icons" let:args>
	<div class="example-buttons">
		<Button color="default" {...args}>
			<Icon name="send" />
			Send
		</Button>
		<Button color="warning" {...args}>
			<Icon name="upload" />
			Upload
		</Button>
		<Button color="success" {...args}>
			<Icon name="plus" />
			Add
		</Button>
		<Button color="primary" {...args}>
			<Icon name="heart" />
			Like
		</Button>
		<Button color="red" {...args}>
			<Icon name="link" />
			Link
		</Button>
		<Button color="info" {...args}>
			<Icon name="edit" />
			Edit
		</Button>

		<Button color="default" {...args}>
			Send
			<Icon name="send" />
		</Button>
		<Button color="warning" {...args}>
			Upload
			<Icon name="upload" />
		</Button>
		<Button color="success" {...args}>
			Add
			<Icon name="plus" />
		</Button>
		<Button color="primary" {...args}>
			Like
			<Icon name="heart" />
		</Button>
		<Button color="red" {...args}>
			Link
			<Icon name="link" />
		</Button>
		<Button color="info" {...args}>
			Edit
			<Icon name="edit" />
		</Button>
	</div>
</Story>

<Story name="Social Buttons" let:args>
	<Button class="btn-facebook" {...args}>
		<Icon name="brand-facebook" />
		Facebook
	</Button>
	<Button class="btn-twitter" {...args}>
		<Icon name="brand-twitter" />
		Twitter
	</Button>
	<Button class="btn-google" {...args}>
		<Icon name="brand-google" />
		Google
	</Button>
	<Button class="btn-youtube" {...args}>
		<Icon name="brand-youtube" />
		Youtube
	</Button>
	<Button class="btn-vimeo" {...args}>
		<Icon name="brand-vimeo" />
		Vimeo
	</Button>
	<Button class="btn-dribbble" {...args}>
		<Icon name="brand-dribbble" />
		Dribbble
	</Button>
	<Button class="btn-github" {...args}>
		<Icon name="brand-github" />
		Github
	</Button>
	<Button class="btn-instagram" {...args}>
		<Icon name="brand-instagram" />
		Instagram
	</Button>
	<Button class="btn-pinterest" {...args}>
		<Icon name="brand-pinterest" />
		Pinterest
	</Button>
	<Button class="btn-vk" {...args}>
		<Icon name="brand-vk" />
		VK
	</Button>
	<Button class="btn-rss" {...args}>
		<Icon name="rss" />
		RSS
	</Button>
	<Button class="btn-flickr" {...args}>
		<Icon name="brand-flickr" />
		Flickr
	</Button>
	<Button class="btn-bitbucket" {...args}>
		<Icon name="brand-bitbucket" />
		Bitbucket
	</Button>
	<Button class="btn-tabler" {...args}>
		<Icon name="brand-tabler" />
		Tabler
	</Button>
</Story>

<Story name="Loading" let:args>
	<Grid justifyContent="center">
		<GridItem>
			<Button loading color="primary" {...args}>Button</Button>
			<Button loading color="primary" {...args}>Loading button with loooong content</Button>
		</GridItem>
	</Grid>
</Story>

<Story name="Block" let:args>
	<Button block {...args}>Button</Button>
</Story>

<Story name="Link" let:args>
	{#each COLORS as color}
		<Button {color} href="https://www.google.com" shape="link" target="_blank" {...args}>Google</Button>
	{/each}
</Story>

<Story name="TODO1" let:args>
	<Grid justifyContent="center">
		<GridItem>
			<ButtonGroup>
				<Button color="success" {...args}>Save changes</Button>
				<Button color="default" {...args}>Save and continue</Button>
				<Button color="danger" {...args}>Cancel</Button>
			</ButtonGroup>
		</GridItem>
	</Grid>
</Story>

<Story name="TODO2" let:args>
	<ButtonGroup wrap>
		<Button {...args}>One</Button>
		<Button {...args}>Two</Button>
		<Button {...args}>Three</Button>
		<Button {...args}>Four</Button>
		<Button {...args}>Five</Button>
		<Button {...args}>Six</Button>
		<Button {...args}>Seven</Button>
		<Button {...args}>Eight</Button>
		<Button {...args}>Nine</Button>
		<Button {...args}>Ten</Button>
		<Button {...args}>Eleven</Button>
		<Button {...args}>Twelve</Button>
		<Button {...args}>Thirteen</Button>
		<Button {...args}>Fourteen</Button>
		<Button {...args}>Fifteen</Button>
		<Button {...args}>Sixteen</Button>
		<Button {...args}>Seventeen</Button>
		<Button {...args}>Eighteen</Button>
		<Button {...args}>Nineteen</Button>
	</ButtonGroup>
</Story>

<Story name="Align Start" let:args>
	<Grid justifyContent="start">
		<GridItem>
			<ButtonGroup>
				<Button color="default" {...args}>Save and continue</Button>
				<Button color="primary" {...args}>Save changes</Button>
			</ButtonGroup>
		</GridItem>
	</Grid>
</Story>

<Story name="Align Center" let:args>
	<Grid justifyContent="center">
		<GridItem>
			<ButtonGroup>
				<Button color="default" {...args}>Save and continue</Button>
				<Button color="primary" {...args}>Save changes</Button>
			</ButtonGroup>
		</GridItem>
	</Grid>
</Story>

<Story name="Align End" let:args>
	<Grid justifyContent="end">
		<GridItem>
			<ButtonGroup>
				<Button color="default" {...args}>Save and continue</Button>
				<Button color="primary" {...args}>Save changes</Button>
			</ButtonGroup>
		</GridItem>
	</Grid>
</Story>

<Story name="Button With Avatar" let:args>
	<Grid justifyContent="center">
		<GridItem>
			<ButtonGroup>
				<Button {...args}>
					<Avatar>A</Avatar>
					Avatar
				</Button>
				<Button {...args}>
					<Avatar>
						<img alt="" src="https://picsum.photos/id/1005/90/90" />
					</Avatar>
					Avatar
				</Button>
			</ButtonGroup>
		</GridItem>
	</Grid>
</Story>

<Story name="Icon Buttons" let:args>
	<Grid justifyContent="center">
		<GridItem>
			<ButtonGroup>
				<Button color="default" {...args}>
					<Icon name="send" />
				</Button>
				<Button color="warning" {...args}>
					<Icon name="upload" />
				</Button>
				<Button color="success" {...args}>
					<Icon name="plus" />
				</Button>
				<Button color="primary" {...args}>
					<Icon name="heart" />
				</Button>
				<Button color="red" {...args}>
					<Icon name="link" />
				</Button>
				<Button color="info" {...args}>
					<Icon name="edit" />
				</Button>
				<Button color="purple" {...args}>
					<Icon name="activity" />
				</Button>
				<Button color="dark" {...args}>
					<Icon name="brand-github" />
				</Button>
				<Button color="azure" {...args}>
					<Icon name="bell" />
				</Button>
			</ButtonGroup>
			<br />
			<br />
			<ButtonGroup>
				<Button outline color="default" {...args}>
					<Icon name="send" />
				</Button>
				<Button outline color="warning" {...args}>
					<Icon name="upload" />
				</Button>
				<Button outline color="success" {...args}>
					<Icon name="plus" />
				</Button>
				<Button outline color="primary" {...args}>
					<Icon name="heart" />
				</Button>
				<Button outline color="red" {...args}>
					<Icon name="link" />
				</Button>
				<Button outline color="info" {...args}>
					<Icon name="edit" />
				</Button>
				<Button outline color="purple" {...args}>
					<Icon name="activity" />
				</Button>
				<Button outline color="dark" {...args}>
					<Icon name="brand-github" />
				</Button>
				<Button outline color="azure" {...args}>
					<Icon name="bell" />
				</Button>
			</ButtonGroup>
		</GridItem>
	</Grid>
</Story>

<Story name="Type" let:args>
	<Grid justifyContent="center">
		<GridItem>
			<ButtonGroup compact>
				<Button type="button" {...args}>Button</Button>
				<Button type="submit" {...args}>Submit</Button>
				<Button type="reset" {...args}>Reset</Button>
			</ButtonGroup>
		</GridItem>
	</Grid>
</Story>

<Story name="Toolbar" let:args>
	<Grid justifyContent="center">
		<GridItem>
			<ButtonGroup compact>
				<Button {...args}>
					<Icon name="align-left" />
				</Button>
				<Button {...args}>
					<Icon name="align-center" />
				</Button>
				<Button {...args}>
					<Icon name="align-right" />
				</Button>
			</ButtonGroup>
		</GridItem>
	</Grid>
</Story>
