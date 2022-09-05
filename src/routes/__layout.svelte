<script>
	import { App, Avatar, Collapse, CollapseToggler, Icon } from '$lib/components'
	import '../styles.css'
	import Nav from './_layout-components/Nav.svelte'
	import Sidebar from './_layout-components/Sidebar.svelte'

	let alignItems = 'center'
	let show = false
</script>

<div class="page">
	<div class="navbar navbar-vertical navbar-expand-lg navbar-dark">
		<div class="container-fluid">
			<CollapseToggler class="navbar-toggler" id="main-navbar">
				<Icon name="menu-2" />
			</CollapseToggler>

			<h1 class="navbar-brand navbar-brand-autodark">
				<img
					class="navbar-brand-image"
					width="110"
					height="32"
					src="https://preview.tabler.io/static/logo-white.svg"
					alt="logo" />
			</h1>

			<div class="navbar-nav flex-row d-lg-none">
				<Avatar>PR</Avatar>
			</div>

			<Collapse class="navbar-collapse" id="main-navbar">
				<div class="navbar-nav pt-lg-3">
					<ul class="navbar-nav">
						<Nav>
							<Sidebar />
						</Nav>
					</ul>
				</div>
			</Collapse>
		</div>
	</div>
	<header class="navbar navbar-expand-md navbar-light d-none d-lg-flex">
		<div class="container-fluid">
			<div />
			<Avatar>PR</Avatar>
		</div>
	</header>

	<div class="page-wrapper">
		<div class="page-body">
			<div class="container-lg px-4">
				<slot />
			</div>
		</div>
	</div>
</div>

<style lang="scss" global>
	@import '../styles.css';

	.example-box {
		padding: 2rem;
		display: flex;
		flex-direction: row;
		gap: 4px;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		margin-bottom: 2rem;
	}
</style>
