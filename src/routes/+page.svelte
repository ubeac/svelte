<script>
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

<div
	class="u-el-text-align-center u-el-bg-color-secondary u-el-bg-gradient u-el-bg-opacity-10 u-el-d-flex el-1 flex-column u-el-align-items-center u-el-justify-content-center u-el-p-3 u-el-gap-4 u-el-h-100">
	<div class="u-el-mb-3 u-el-d-flex u-el-align-items-center u-el-justify-content-center">
		<div class="u-el-col-5">
			<img class="img img-ubeac" width="180" height="180" alt="uBeac" src="/images/ubeac.webp" />
		</div>
		<div class="plus u-el-col-2">+</div>
		<div class="u-el-col-5">
			<img class="img img-svelte" width="180" height="180" alt="uBeac" src="/images/svelte.webp" />
		</div>
	</div>

	<div>
		<h1 class="large-text">uBeac Svelte components</h1>
		<h2 class="u-el-mt-3 u-el-text-muted medium-text">Opinionated Svelte component UI library by uBeac</h2>
	</div>

	<div class="custom-container u-el-row">
		<div class="u-el-p-1 u-el-col-12 u-el-col-sm-6">
			<a role="button" class="u-button u-el-col-12 u-button-size-lg u-button-color-primary" href="/docs">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="u-icon u-icon-size-xl iconify iconify--tabler"
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6v13m9-13v13m9-13v13" /></svg>
				Get Started
			</a>
		</div>

		<div class="u-el-p-1 u-el-col-12 u-el-col-sm-6">
			<a
				role="button"
				class="u-button u-el-col-12 u-button-size-lg u-button-color-github"
				href="https://github.com/ubeac/svelte">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="u-icon u-icon-size-xl iconify iconify--tabler"
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21" /></svg>
				Source Code
			</a>
		</div>

		<div class="u-el-col-12 u-el-mt-3 u-el-px-1">
			<div
				class="u-el-col-12 text-terminal u-el-border u-el-d-flex u-el-justify-content-between u-el-gap-3 u-el-shadow-lg u-el-text-color-light u-el-p-3 u-el-mb-5 u-el-border-round-size-3 u-el-bg-color-github">
				<div>npm install @ubeac/svelte</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="u-el-d-flex clipboard-icon" on:click={copy}>
					{#if icon === 'copy'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							class="u-icon iconify iconify--tabler"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								><rect width="12" height="12" x="8" y="8" rx="2" /><path
									d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></g
							></svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							class="u-icon iconify iconify--tabler"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							><path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m5 12l5 5L20 7" /></svg>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
