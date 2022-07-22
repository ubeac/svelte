<script>
	import { Avatar, Button, Card, CardBody, FormRadio, Grid, Icon, Layout } from '$lib/components'
	import GridItem from '$lib/components/grid/GridItem.svelte'
	import '../styles.css'

	let alignItems = 'center'
	let show = false
</script>

<Layout header="center">
	<Grid alignItems="center" justifyContent="center" class="header-grid" slot="header:start">
		<GridItem sm="hide-down">
			<a class="brand" href="/">Header</a>
		</GridItem>
	</Grid>
	<Grid slot="header" vertical>
		<GridItem>
			<Grid justifyContent="between">
				<GridItem xs="grow" sm="hide-down">
					<div class="headers white">
						<Grid gutter="sm" justifyContent="end">
							<GridItem sm="hide-down">
								<Button>
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
					<div class="headers blue">
						<Grid alignItems="center" justifyContent="between">
							<GridItem md="hide-up">
								<Button color="secondary" outline on:click={() => (show = !show)}>
									<Icon pack="la" name="bars" />
								</Button>
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

		<GridItem if={show} class="aside-items" xs="grow">
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
		</GridItem>
	</Grid>

	<Grid slot="aside:start">
		<GridItem sm="hide-down">
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
		</GridItem>
	</Grid>
	<Grid {alignItems} justifyContent="center" class="app-content">
		<GridItem>
			<Card class="app-body" outline>
				<CardBody>
					<a href="https://preview.tabler.io/layout-combo.html">Reference layout</a>
				</CardBody>
				<CardBody>
					AppContent:mode
					<FormRadio value="stretch" label="stretch" bind:group={alignItems} />
					<FormRadio value="center" label="center" bind:group={alignItems} />
					<FormRadio value="start" label="start" bind:group={alignItems} />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda labore deserunt maiores adipisci earum vitae
					voluptatum, necessitatibus dolore dicta consequatur modi soluta voluptatem. Est vitae consequatur fugit dolor quam?
					Earum!
				</CardBody>
				<CardBody>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda labore deserunt maiores adipisci earum
					vitae voluptatum, necessitatibus dolore dicta consequatur modi soluta voluptatem. Est vitae consequatur fugit
					dolor quam? Earum!
				</CardBody>
			</Card>
		</GridItem>
	</Grid>
</Layout>

<style global>
	* {
		margin: 0;
	}

	.header-grid {
		height: 100%;
	}
	.layout {
		background-color: #efefef;
	}
	.wrapper {
		gap: 0;
	}
	.blue {
		background-color: #32374d;
	}
	.aside-item {
		min-width: 240px;
	}
	.header-start {
		font-weight: bold;
		background-color: #32374d;
	}
	.brand {
		font-size: 32px;
		color: white;
	}
	.brand-dark {
		font-size: 32px;
		color: #32374d;
	}

	.main {
		height: 100%;
	}

	.app-content {
		height: 100%;
		padding: 1rem;
	}

	.app-body {
		height: 100%;
	}
	.aside-items {
		background-color: #32374d;
	}

	.aside-item {
		padding: 0.5rem;
		color: white;
		padding-left: 1rem;
	}
	.aside-item:hover {
		font-weight: bold;
		background-color: #efefef10;
	}

	.headers {
		padding: 1rem;
	}
	.white {
		background-color: white;
	}

	.aside-start {
		background-color: #32374d;
	}
</style>
