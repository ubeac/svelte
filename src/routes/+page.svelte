<script>
	import { onMount } from 'svelte'
	import { Button, Icon, El } from '@ubeac/svelte'

	import './landing.css'

	let icon = 'copy'

	async function copy() {
		await navigator.clipboard.writeText('npm install @ubeac/svelte')
		icon = 'check'

		setTimeout(() => {
			icon = 'copy'
		}, 3000)
	}

	onMount(() => {
		document.body.classList.add('u-el-overflow-hidden')
	})
</script>

<svelte:head>
	<title>uBeac Svelte Components</title>
	<meta
		name="description"
		content="@ubeac/svlete is a UI component library and kit that speeds up the development process and makes it easier than ever! Built on the latest version of tabler, it helps you create templates based on fully customizable and ready-to-use UI components, which can be used by both simple websites and sophisticated systems." />
	<meta name="author" content="uBeac" />
</svelte:head>

<El
	textAlign="center"
	bgColor="secondary"
	bgGradient
	bgOpacity="10"
	display="flex"
	class="el-1 flex-column"
	alignItems="center"
	justifyContent="center"
	p="3"
	gap="4"
	h="100">
	<El mb="3" display="flex" alignItems="center" justifyContent="center">
		<El col="5">
			<El class="img img-ubeac" tag="img" alt="uBeac" src="/images/ubeac.png" />
		</El>
		<El class="plus" col="2">+</El>
		<El col="5">
			<El class="img img-svelte" tag="img" alt="uBeac" src="/images/svelte.png" />
		</El>
	</El>

	<El fontSize="4">
		<El tag="h1" class="large-text">uBeac Svelte components</El>
		<El mt="3" tag="h3" class="medium-text" textMuted>Opinionated Svelte component UI library by uBeac</El>
	</El>

	<El class="custom-container" row>
		<El p="1" col="12" colSm="6">
			<Button col="12" href="https://svelte.ubeac.io/docs" size="lg" color="primary">
				<Icon size="xl" name="book" />
				Get Started
			</Button>
		</El>

		<El p="1" col="12" colSm="6">
			<Button col="12" href="https://github.com/ubeac/svelte" size="lg" color="github">
				<Icon size="xl" name="brand-github" />
				Source Code
			</Button>
		</El>

		<El col="12" mt="3" px="1">
			<El
				col="12"
				class="text-terminal"
				border
				display="flex"
				justifyContent="between"
				gap="3"
				shadow="lg"
				textColor="light"
				p="3"
				mb="5"
				borderRoundSize="3"
				bgColor="github">
				<El>npm install @ubeac/svelte</El>
				<El class="clipboard-icon" display="flex" on:click={copy}>
					<Icon name={icon} />
				</El>
			</El>
		</El>
	</El>
</El>
