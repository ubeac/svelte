<script>
	import { onMount } from 'svelte'
	import { Button, Icon, El } from '@ubeac/svelte'

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
			<El class="img img-ubeac" tag="img" src="/ubeac.png" />
		</El>
		<El class="plus" col="2">+</El>
		<El col="5">
			<El class="img img-svelte" tag="img" src="/svelte.png" />
		</El>
	</El>

	<El fontSize="4">
		<El tag="h1" class="large-text">uBeac Svelte components</El>
		<El mt="3" tag="h3" class="medium-text" textMuted>Opinionated Svelte component UI library by uBeac</El>
	</El>

	<El class="container-400" row>
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

		<El col="12" mt="3" px="2">
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

<style>
	:global(.large-text) {
		letter-spacing: -1px;
		line-height: 34px;
		font-size: 42px;
		font-weight: bold;
	}

	:global(.medium-text) {
		margin-top: 16px;
		line-height: 24px;
		font-size: 22px;
		font-weight: 300;
	}

	:global(.plus) {
		font-size: 52px;
		font-weight: bold;
	}

	:global(.text-terminal) {
		font-family: monospace;
		font-size: 18px;
	}

	:global(.container-400) {
		width: 450px;
	}

	:global(.img) {
		width: 180px;
	}

	:global(.img-ubeac) {
		filter: drop-shadow(0 0 3rem #376ccf90);
	}
	:global(.img-svelte) {
		scale: 0.7;
		filter: drop-shadow(0 0 3rem #fe3c0060);
	}

	:global(.clipboard-icon) {
		cursor: pointer;
	}

	@media (max-width: 500px) {
		:global(.img) {
			width: 130px;
		}

		:global(.main-buttons) {
			flex-direction: column;
		}
	}
</style>
