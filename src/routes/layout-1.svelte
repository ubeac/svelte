<script>
	import { Avatar, Button, Card, CardBody, Grid, Icon, Layout } from '$lib/components'
	import GridItem from '$lib/components/grid/GridItem.svelte'
	import '../styles.css'

	let show = false
</script>

<Layout class="layout" header="center">
	<div slot="header:start">
		<Grid>
			<GridItem sm="hide-down">
				<div class="headers-start">
					<a class="brand" href="/">Header</a>
				</div>
			</GridItem>
		</Grid>
	</div>
	<div slot="header">
		<Grid justifyContent="between">
			<GridItem sm="hide-down">
				<div class="headers white">
					<Grid justifyContent="between">
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

			<GridItem md="hide-up">
				<div class="headers blue">
					<Grid justifyContent="end">
						<GridItem md="hide-up">
							<Button on:click={() => (show = !show)}>
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

		<Grid if={show}>
			<GridItem alignSelf="stretch">
				<div class="aside-items">
					<div class="aside-item">item</div>
					<div class="aside-item">item</div>
					<div class="aside-item">item</div>
					<div class="aside-item">item</div>
					<div class="aside-item">item</div>
					<div class="aside-item">item</div>
					<div class="aside-item">item</div>
				</div>
			</GridItem>
		</Grid>
	</div>
	<div class="aside-start" slot="aside:start">
		<Grid>
			<GridItem sm="hide-down">
				<div>
					<div class="aside-item">item</div>
					<div class="aside-item">item</div>
					<div class="aside-item">item</div>
					<div class="aside-item">item</div>
					<div class="aside-item">item</div>
					<div class="aside-item">item</div>
					<div class="aside-item">item</div>
				</div>
			</GridItem>
		</Grid>
	</div>
	<div class="main">
		<Card>
			<CardBody>
				<a href="https://preview.tabler.io/layout-combo.html">Reference layout</a>
			</CardBody>
			<CardBody>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda labore deserunt maiores adipisci earum vitae
				voluptatum, necessitatibus dolore dicta consequatur modi soluta voluptatem. Est vitae consequatur fugit dolor
				quam? Earum!
			</CardBody>
			<CardBody>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda labore deserunt maiores adipisci earum vitae
				voluptatum, necessitatibus dolore dicta consequatur modi soluta voluptatem. Est vitae consequatur fugit dolor
				quam? Earum!
			</CardBody>
		</Card>
	</div>
</Layout>

<style global>
	* {
		margin: 0;
	}

	.u-grid > div {
		width: 100%;
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

	.header-start {
		background-color: #32374d;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.headers-start {
		height: 100%;
		/* padding: 1rem; */
		width: 240px;
		font-weight: bold;
		background-color: #32374d;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.brand {
		padding-top: 1rem;
		font-size: 32px;
		color: white;
	}
	.brand-dark {
		padding-top: 1rem;
		font-size: 32px;
		color: #32374d;
	}
	.main {
		padding: 0.5rem;
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
		display: flex;
		flex-direction: column;
		background-color: #32374d;
	}
</style>
