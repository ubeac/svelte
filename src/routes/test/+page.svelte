<script lang="ts">
	import { FormCheckbox, FormRadioGroup, PageHeader, Switch } from '@ubeac/svelte/components'

	import App from './App.svelte'
	import AppFooter from './AppFooter.svelte'
	import AppHeader from './AppHeader.svelte'
	import Page from './Page.svelte'
	import PageBody from './PageBody.svelte'
	import PageFooter from './PageFooter.svelte'
	import Sidebar from './Sidebar.svelte'

	let header = true
	let footer = true

	let leftSidebar = true
	let rightSidebar = false

	let headerMode: any = 'center'
	let footerMode: any = 'grow'

	let leftOpen: boolean = false
	let leftMode: any = 'permanent'
</script>

<App {headerMode} {footerMode}>
	{#if header}
		<AppHeader>Header</AppHeader>
	{/if}

	{#if leftSidebar}
		<Sidebar mode={leftMode} open={leftOpen}>Left Sidebar</Sidebar>
	{/if}

	{#if rightSidebar}
		<Sidebar right>Right Sidebar</Sidebar>
	{/if}
	<Page>
		<PageHeader>Page Header</PageHeader>

		<PageBody>
			<Switch bind:value={header}>Header</Switch>
			<Switch bind:value={footer}>Footer</Switch>
			<Switch bind:value={leftSidebar}>Left Sidebar</Switch>
			<Switch bind:value={rightSidebar}>Right Sidebar</Switch>

			<FormRadioGroup label="Left Sidebar mode" bind:value={leftMode} items={['temporary', 'permanent']} />
			<FormCheckbox if={leftMode === 'temporary'} text="Left Sidebar Open" label="Left Open" bind:value={leftOpen} />
			<FormRadioGroup label="Header mode" bind:value={headerMode} items={['start', 'center', 'end', 'grow']} />
			<FormRadioGroup label="Footer mode" bind:value={footerMode} items={['start', 'center', 'end', 'grow']} />
		</PageBody>

		<PageFooter>PageFooter</PageFooter>
	</Page>
	{#if footer}
		<AppFooter>Footer</AppFooter>
	{/if}
</App>
