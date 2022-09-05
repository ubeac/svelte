<script>
	import { App, Avatar, Collapse, CollapseToggler, Icon } from '$lib/components'
	import '../styles.css'
import Nav from './_layout-components/Nav.svelte';
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
			<div class="container-xl">
				<slot />
			</div>
		</div>
	</div>
</div>

<!-- <App header="end">
	<Grid alignItems="center" justifyContent="center" class="header-grid h-full" slot="header-start">
		<GridItem sm="hide-down">
			<a class="brand" href="/">Header</a>
		</GridItem>
	</Grid>
	<Grid slot="header" vertical>
		<GridItem>
			<Grid justifyContent="between">
				<GridItem xs="grow" sm="hide-down">
					<div class="navbar navbar-light navbar-expand-md">
						<Grid gutter="sm" justifyContent="end">
							<GridItem sm="hide-down">
								<Button outline>
									<Icon name="moon" />
								</Button>
							</GridItem>
							<GridItem sm="hide-down">
								<Button>
									<Icon name="bell" />
								</Button>
							</GridItem>

							<GridItem sm="hide-down">
								<Avatar size="sm" shape="circle">PR</Avatar>
							</GridItem>
						</Grid>
					</div>
				</GridItem>

				<GridItem md="hide-up" xs="grow">
					<div class="headers navbar-dark">
						<Grid alignItems="center" justifyContent="between">
							<GridItem md="hide-up">
								<CollapseToggler class="navbar-toggler" id="main-navbar">
									<Icon name="menu-2" />
								</CollapseToggler>
							</GridItem>
							<GridItem md="hide-up">
								<a class="brand" href="/">Header</a>
							</GridItem>
							<GridItem md="hide-up">
								<Avatar size="sm" shape="circle">PR</Avatar>
							</GridItem>
						</Grid>
					</div>
				</GridItem>
			</Grid>
		</GridItem>

	</Grid>

	<Grid class="navbar navbar-expand navbar-dark nav-vertical h-full" slot="aside-start">
		<GridItem class="navbar-nav w-200px" sm="hide-down">
			<Sidebar />
		</GridItem>
	</Grid>
	<div class="p-3">
		<slot />
	</div>
</App> -->
<style lang="scss" global>
	@import '../styles.css';

	// .w-200px {
	// 	width: 200px;
	// }

	// .nav {
	// 	border-left-color: transparent !important;
	// }

	// * {
	// 	margin: 0;
	// }

	.header {
		font-weight: bold;
		background-color: #32374d;
		padding: 0.5rem;
	}

	// .layout {
	// 	background-color: #efefef;
	// }
	// .wrapper {
	// 	gap: 0;
	// }
	// .blue {
	// 	background-color: #32374d;
	// }
	// .aside-item {
	// 	min-width: 240px;
	// }
	// .brand {
	// 	font-size: 32px;
	// 	color: white;
	// }
	// .brand-dark {
	// 	font-size: 32px;
	// 	color: #32374d;
	// }

	// .h-full {
	// 	height: 100%;
	// }
	// .aside-items {
	// 	background-color: #32374d;
	// }

	// .headers {
	// 	padding: 1rem;
	// }
	// .white {
	// 	background-color: white;
	// }

	// .aside-start {
	// 	background-color: #32374d;
	// }
</style>
