<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { COLORS } from '$lib/types'
	import { BUTTON_SHAPES, BUTTON_SIZES, Avatar, Button, ButtonGroup, Icon, Grid, GridItem } from '$lib/components'
	const title = 'Button'
	const component = Button
	const source = `
<script>
	import { Button } from '$lib/components'
	let loading = false
	function onButtonClick() {
		loading = true
		setTimeout(() => {
			loading = false
		}, 2000)
	}
<\/script>

<div class="example-buttons">
	<Button loading color="primary">Button</Button>
	<Button {loading} color="primary" on:click={onButtonClick}>click to start loading!</Button>
</div>
`

	const parameters = {
		actions: {
			handles: ['click'],
		},
	}
	const argTypes = {
		color: {
			control: {
				type: 'select',
				options: COLORS,
			},
		},
		href: {
			control: {
				type: 'text',
			},
		},
		size: {
			control: {
				type: 'select',
				options: BUTTON_SIZES,
			},
		},
		shape: {
			control: {
				type: 'select',
				options: BUTTON_SHAPES,
			},
		},
	}
	let loading = false
	function onButtonClick() {
		loading = true
		setTimeout(() => {
			loading = false
		}, 2000)
	}
</script>

<Meta {title} {component} {argTypes} {parameters} />

<Story name="Default" let:args>
	<div class="example-buttons">
		<Button {...args}>Button</Button>
	</div>
</Story>

<Story name="Colors">
	<div class="example-buttons">
		<Button color="primary">primary</Button>
		<Button color="secondary">secondary</Button>
		<Button color="success">success</Button>
		<Button color="warning">warning</Button>
		<Button color="danger">danger</Button>
		<Button color="info">info</Button>
		<Button color="dark">dark</Button>
	</div>
</Story>

<Story name="Disabled">
	<div class="example-buttons">
		<Button disabled color="primary">primary</Button>
		<Button disabled color="secondary">secondary</Button>
		<Button disabled color="success">success</Button>
		<Button disabled color="warning">warning</Button>
		<Button disabled color="danger">danger</Button>
		<Button disabled color="info">info</Button>
		<Button disabled color="dark">dark</Button>
	</div>
</Story>

<Story name="Outline">
	<div class="example-buttons">
		<Button outline color="primary">primary</Button>
		<Button outline color="secondary">secondary</Button>
		<Button outline color="success">success</Button>
		<Button outline color="warning">warning</Button>
		<Button outline color="danger">danger</Button>
		<Button outline color="info">info</Button>
		<Button outline color="dark">dark</Button>
	</div>
	<div class="example-buttons">
		<Button disabled outline color="primary">primary</Button>
		<Button disabled outline color="secondary">secondary</Button>
		<Button disabled outline color="success">success</Button>
		<Button disabled outline color="warning">warning</Button>
		<Button disabled outline color="danger">danger</Button>
		<Button disabled outline color="info">info</Button>
		<Button disabled outline color="dark">dark</Button>
	</div>
</Story>

<Story name="Ghost">
	<div class="example-buttons">
		<Button ghost color="primary">primary</Button>
		<Button ghost color="secondary">secondary</Button>
		<Button ghost color="success">success</Button>
		<Button ghost color="warning">warning</Button>
		<Button ghost color="danger">danger</Button>
		<Button ghost color="info">info</Button>
		<Button ghost color="dark">dark</Button>
	</div>
	<div class="example-buttons">
		<Button disabled ghost color="primary">primary</Button>
		<Button disabled ghost color="secondary">secondary</Button>
		<Button disabled ghost color="success">success</Button>
		<Button disabled ghost color="warning">warning</Button>
		<Button disabled ghost color="danger">danger</Button>
		<Button disabled ghost color="info">info</Button>
		<Button disabled ghost color="dark">dark</Button>
	</div>
</Story>

<Story name="Shapes">
	<div class="example-buttons">
		<Button shape="tile" color="success">Tile shape</Button>
		<Button shape="default" color="primary">Default shape</Button>
		<Button shape="round" color="secondary">Round shape</Button>
		<Button shape="circle" color="warning"><Icon name="home" /></Button>
	</div>
	<div class="example-buttons">
		<Button disabled shape="tile" color="success">Tile shape</Button>
		<Button disabled shape="default" color="primary">Default shape</Button>
		<Button disabled shape="round" color="secondary">Round shape</Button>
		<Button disabled shape="circle" color="warning"><Icon name="home" /></Button>
	</div>
</Story>

<Story name="Size">
	<div class="example-buttons">
		<Button size="sm" color="primary">primary</Button>
		<Button size="sm" color="secondary">secondary</Button>
		<Button size="sm" color="success">success</Button>
		<Button size="sm" color="warning">warning</Button>
		<Button size="sm" color="danger">danger</Button>
		<Button size="sm" color="info">info</Button>
		<Button size="sm" color="dark">dark</Button>
	</div>
	<div class="example-buttons">
		<Button size="md" color="primary">primary</Button>
		<Button size="md" color="secondary">secondary</Button>
		<Button size="md" color="success">success</Button>
		<Button size="md" color="warning">warning</Button>
		<Button size="md" color="danger">danger</Button>
		<Button size="md" color="info">info</Button>
		<Button size="md" color="dark">dark</Button>
	</div>
	<div class="example-buttons">
		<Button size="lg" color="primary">primary</Button>
		<Button size="lg" color="secondary">secondary</Button>
		<Button size="lg" color="success">success</Button>
		<Button size="lg" color="warning">warning</Button>
		<Button size="lg" color="danger">danger</Button>
		<Button size="lg" color="info">info</Button>
		<Button size="lg" color="dark">dark</Button>
	</div>
</Story>

<Story name="Buttons With Icons start">
	<div class="example-buttons">
		<Button color="default"><Icon name="send" />Send</Button>
		<Button color="warning"><Icon name="upload" />Upload</Button>
		<Button color="success"><Icon name="plus" />Add</Button>
		<Button color="primary"><Icon name="heart" />Like</Button>
		<Button color="red"><Icon name="link" />Link</Button>
		<Button color="info"><Icon name="edit" />Edit</Button>
	</div>
</Story>

<Story name="Buttons With Icons end">
	<div class="example-buttons">
		<Button color="default">Send<Icon name="send" /></Button>
		<Button color="warning">Upload<Icon name="upload" /></Button>
		<Button color="success">Add<Icon name="plus" /></Button>
		<Button color="primary">Like<Icon name="heart" /></Button>
		<Button color="red">Link<Icon name="link" /></Button>
		<Button color="info">Edit<Icon name="edit" /></Button>
	</div>
</Story>

<Story name="Click Event">
	<Button on:click={() => console.log('Button clicked')}>Click Me and Check Console output</Button>
</Story>

<Story name="Social Buttons">
	<div class="example-buttons">
		<Button class="btn-facebook"><Icon name="brand-facebook" />Facebook</Button>
		<Button class="btn-twitter"><Icon name="brand-twitter" />Twitter</Button>
		<Button class="btn-google"><Icon name="brand-google" />Google</Button>
		<Button class="btn-youtube"><Icon name="brand-youtube" />Youtube</Button>
		<Button class="btn-vimeo"><Icon name="brand-vimeo" />Vimeo</Button>
		<Button class="btn-dribbble"><Icon name="brand-dribbble" />Dribbble</Button>
		<Button class="btn-github"><Icon name="brand-github" />Github</Button>
		<Button class="btn-instagram"><Icon name="brand-instagram" />Instagram</Button>
		<Button class="btn-pinterest"><Icon name="brand-pinterest" />Pinterest</Button>
		<Button class="btn-vk"><Icon name="brand-vk" />VK</Button>
		<Button class="btn-rss"><Icon name="rss" />RSS</Button>
		<Button class="btn-flickr"><Icon name="brand-flickr" />Flickr</Button>
		<Button class="btn-bitbucket"><Icon name="brand-bitbucket" />Bitbucket</Button>
		<Button class="btn-tabler"><Icon name="brand-tabler" />Tabler</Button>
	</div>
</Story>

<Story name="Loading" {source}>
	<div class="example-buttons">
		<Button loading color="primary">Button</Button>
		<Button {loading} color="primary" on:click={onButtonClick}>click to start loading!</Button>
	</div>
</Story>

<Story name="Block">
	<Button block>Button</Button>
</Story>

<Story name="Link">
	<div class="example-buttons">
		<Button href="https://www.google.com" shape="link" target="_blank" color="primary">primary</Button>
		<Button href="https://www.google.com" shape="link" target="_blank" color="secondary">secondary</Button>
		<Button href="https://www.google.com" shape="link" target="_blank" color="success">success</Button>
		<Button href="https://www.google.com" shape="link" target="_blank" color="warning">warning</Button>
		<Button href="https://www.google.com" shape="link" target="_blank" color="danger">danger</Button>
		<Button href="https://www.google.com" shape="link" target="_blank" color="info">info</Button>
		<Button href="https://www.google.com" shape="link" target="_blank" color="dark">dark</Button>
	</div>
</Story>

<!-- <Story name="TODO2">
	<div class="example-buttons">
		<Button>One</Button>
		<Button>Two</Button>
		<Button>Three</Button>
		<Button>Four</Button>
		<Button>Five</Button>
		<Button>Six</Button>
		<Button>Seven</Button>
		<Button>Eight</Button>
		<Button>Nine</Button>
		<Button>Ten</Button>
		<Button>Eleven</Button>
		<Button>Twelve</Button>
		<Button>Thirteen</Button>
		<Button>Fourteen</Button>
		<Button>Fifteen</Button>
		<Button>Sixteen</Button>
		<Button>Seventeen</Button>
		<Button>Eighteen</Button>
		<Button>Nineteen</Button>
	</div>
</Story> -->

<Story name="Button With Avatar">
	<div class="example-buttons">
		<Button>
			<Avatar>A</Avatar>
			Avatar
		</Button>
		<Button>
			<Avatar><img alt="" src="https://picsum.photos/id/1005/90/90" /></Avatar>
			Avatar
		</Button>
	</div>
</Story>

<Story name="Align Start">
	<Grid justifyContent="start">
		<GridItem>
			<ButtonGroup>
				<Button color="default">Save and continue</Button>
				<Button color="primary">Save changes</Button>
			</ButtonGroup>
		</GridItem>
	</Grid>
</Story>

<Story name="Align Center">
	<Grid justifyContent="center">
		<GridItem>
			<ButtonGroup>
				<Button color="default">Save and continue</Button>
				<Button color="primary">Save changes</Button>
			</ButtonGroup>
		</GridItem>
	</Grid>
</Story>

<Story name="Align End">
	<Grid justifyContent="end">
		<GridItem>
			<ButtonGroup>
				<Button color="default">Save and continue</Button>
				<Button color="primary">Save changes</Button>
			</ButtonGroup>
		</GridItem>
	</Grid>
</Story>

<Story name="Icon Buttons">
	<div class="example-buttons">
		<Button color="default"><Icon name="send" /></Button>
		<Button color="warning"><Icon name="upload" /></Button>
		<Button color="success"><Icon name="plus" /></Button>
		<Button color="primary"><Icon name="heart" /></Button>
		<Button color="red"><Icon name="link" /></Button>
		<Button color="info"><Icon name="edit" /></Button>
		<Button color="purple"><Icon name="activity" /></Button>
		<Button color="dark"><Icon name="brand-github" /></Button>
		<Button color="azure"><Icon name="bell" /></Button>
	</div>
</Story>

<Story name="Type">
	<div class="example-buttons">
		<Button type="button">Button</Button>
		<Button type="submit">Submit</Button>
		<Button type="reset">Reset</Button>
	</div>
</Story>

<Story name="Group">
	<ButtonGroup>
		<Button color="success">Save changes</Button>
		<Button color="default">Save and continue</Button>
		<Button color="danger">Cancel</Button>
	</ButtonGroup>
</Story>
