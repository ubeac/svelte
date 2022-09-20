<script>
	import { Switch } from '@ubeac/svelte/components'
	import * as Layout from '..'
	import Content from './Content.svelte'

	let rightOpen = false
</script>

<Layout.App>
	<Layout.AppHeader>App Header</Layout.AppHeader>

	<Layout.Sidebar>Sidebar</Layout.Sidebar>

	<Layout.Sidebar right mode="temporary" bind:open={rightOpen}>Temporary Sidebar</Layout.Sidebar>

	<Layout.Page>
		<Layout.PageHeader>Page Header</Layout.PageHeader>
		<Layout.PageBody>
			Page Body

			<Switch bind:value={rightOpen}>Right Sidebar</Switch>
			<Content />
		</Layout.PageBody>
		<Layout.PageFooter>Page Footer</Layout.PageFooter>
	</Layout.Page>
</Layout.App>
