<script>
	import El from '@ubeac/svelte/components/El/El.svelte'
	import Button from '@ubeac/svelte/components/Button/Button.svelte'
	import Icon from '@ubeac/svelte/components/Icon/Icon.svelte'

	import './landing.css'

	let icon = 'copy'

	async function copy() {
		await navigator.clipboard.writeText('npm install @ubeac/svelte')
		icon = 'check'

		setTimeout(() => {
			icon = 'copy'
		}, 3000)
	}
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
	d="flex"
	class="el-1 flex-column"
	alignItems="center"
	justifyContent="center"
	p="3"
	gap="4"
	h="100">
	<El mb="3" d="flex" alignItems="center" justifyContent="center">
		<El col="5">
			<El class="img img-ubeac" tag="img" width="180" height="180" alt="uBeac" src="/images/ubeac.webp" />
		</El>
		<El class="plus" col="2">+</El>
		<El col="5">
			<El class="img img-svelte" tag="img" width="180" height="180" alt="uBeac" src="/images/svelte.webp" />
		</El>
	</El>

	<El fontSize="4">
		<El tag="h1" class="large-text">uBeac Svelte components</El>
		<El mt="3" tag="h3" class="medium-text" textMuted>Opinionated Svelte component UI library by uBeac</El>
	</El>

	<El class="custom-container" row>
		<El p="1" col="12" colSm="6">
			<Button col="12" href="/docs" size="lg" color="primary">
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
				d="flex"
				justifyContent="between"
				gap="3"
				shadow="lg"
				textColor="light"
				p="3"
				mb="5"
				borderRoundSize="3"
				bgColor="github">
				<El>npm install @ubeac/svelte</El>
				<El class="clipboard-icon" d="flex" on:click={copy}>
					<Icon name={icon} />
				</El>
			</El>
		</El>
	</El>
</El>
