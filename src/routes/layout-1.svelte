<script>
	import { App, Avatar, Button, Card, CardBody, FormRadio, Grid, Icon } from '$lib/components'
	import GridItem from '$lib/components/grid/GridItem.svelte'
	import '../styles.css'

	/** @type {import('../components/grid/Grid.types').GridAlignItems}*/
	let alignItems = 'center'
	let show = false
</script>

<App header="end">
	<Grid alignItems="center" justifyContent="center" class="header-grid h-full" slot="header-start">
		<GridItem sm="hide-down">
			<a class="brand" href="/">Header</a>
		</GridItem>
	</Grid>
	<Grid slot="header" vertical>
		<GridItem>
			<!-- TODO Grid should support responsive props for Class (or color) -->
			<!-- <Grid color="blue" colorMd="white"> -->
				<!-- or: -->
			<!-- <Grid class="blue" classMd="white"> -->
			
				<!-- Usage:  -->
			<!-- <Grid gutter="sm" class="blue" classMd="white" justifyContent="between" justifyContentMd="end">
				<GridItem md="hide-up">
					<Button color="secondary" outline on:click={() => (show = !show)}>
						<Icon pack="la" name="bars" />
					</Button>
				</GridItem>
				<GridItem md="hide-up">
					<a class="brand" href="/">Header</a>
				</GridItem>

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

				<GridItem>
					<Avatar size="sm" shape="circle">PR</Avatar>
				</GridItem>
			</Grid> -->
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

		<GridItem if={show} class="aside-items" xs="grow" md="hide-up">
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
			<div class="aside-item">item</div>
		</GridItem>
	</Grid>

	<Grid class="aside-items h-full" slot="aside-start">
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
	<Grid {alignItems} justifyContent="center" class="h-full p-3">
		<GridItem>
			<Card class="h-full" outline>
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
</App>

<style global>
	* {
		margin: 0;
	}

	.header-grid {
		font-weight: bold;
		background-color: #32374d;
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
	.brand {
		font-size: 32px;
		color: white;
	}
	.brand-dark {
		font-size: 32px;
		color: #32374d;
	}

	.h-full {
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
