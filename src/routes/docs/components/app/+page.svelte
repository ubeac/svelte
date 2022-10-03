<script>
	import { Preview } from '@ubeac/svelte'
	import AppDefault from './AppDefault.svelte'
	import AppLogin from './AppLogin.svelte'
</script>

<h1>App</h1>
<p>App is the main element of UI and you can create any types of User interfaces using these app components</p>
<ul>
	<li>App</li>
	<li>AppBody</li>
	<li>AppFooter</li>
	<li>AppHeader</li>
	<li>AppSidebar</li>
</ul>

<h2>Default</h2>
<p>Here is a common UI for dashboards.</p>
<Preview src="./AppDefault.svelte">
	<div class="example-app">
		<AppDefault />
	</div>
</Preview>

<h2>Centered content</h2>
<p>And here is a Login page example.</p>
<Preview src="./AppLogin.svelte">
	<div class="example-app">
		<AppLogin />
	</div>
</Preview>

<style global>
	.u-preview-body {
		padding: 0;
	}
	.example-app {
		position: relative;
		width: 100%;
		height: 400px;
	}
</style>
