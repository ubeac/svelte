<script>
	import { App, AppBody, AppFooter, AppHeader, AppSidebar, Button, Icon, Page } from '@ubeac/svelte'

	let leftSidebar = true
	let rightSidebar = true
</script>

<App headerMode="center">
	<AppHeader>
		<span on:click={() => (leftSidebar = !leftSidebar)}>
			<Icon class="m-2" name="menu" />
		</span>
		Header
		<span class="ms-auto" on:click={() => (rightSidebar = !rightSidebar)}>
			<Icon class="m-2" name="menu" />
		</span>
	</AppHeader>
	<AppFooter>Footer</AppFooter>
	<AppSidebar open={leftSidebar}>Left Sidebar (permanent)</AppSidebar>
	<AppSidebar right mode="temporary" open={rightSidebar}>
		<Button on:click={() => (rightSidebar = !rightSidebar)}>
			<Icon name="x" />
		</Button>
		<br />
		Right Sidebar (temporary)
	</AppSidebar>

	<AppBody>App Body</AppBody>
</App>

<style global>
	.u-app {
		background-color: #404040;
		color: white;
		height: 400px;
	}
	.u-app-sidebar {
		background-color: #605050;
	}
	.u-app-footer {
		background-color: #505060;
	}
	.u-app-header {
		background-color: #506050;
	}
</style>
