<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { Container, Row, Col } from '$lib/components/gird'
	import { Card, CardBody } from '$lib/components/card'
	import { GRID_ALIGN_CONTENT, GRID_ALIGN_ITEMS } from '$lib/components/gird/grid.types'
</script>

<Meta title="Grid" />
<Story name="default" let:args>
	<Container>
		<Row align="center">
			<Card>
				<CardBody>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt libero nesciunt. Sed dignissimos
						laboriosam eaque non aliquid ipsam architecto facilis, delectus molestias. Laborum tempore aliquid, in quas
						amet reprehenderit.
					</p>
				</CardBody>
			</Card>
		</Row>
	</Container>
</Story>

<Story name="Align">
	{#each ['start', 'center', 'end'] as align}
		<Container class="container-example">
			<Row class="row-example" {align}>
				{#each [1, 2, 3] as item}
					<Col>
						<Card class="card-example">One of three columns</Card>
					</Col>
				{/each}
			</Row>
		</Container>
	{/each}
</Story>

<Story name="Align Self">
	<Container class="container-example">
		<Row class="row-example" noGutters>
			{#each ['start', 'center', 'end'] as align}
				<Col alignSelf={align}>
					<Card class="card-example">One of three columns</Card>
				</Col>
			{/each}
		</Row>
	</Container>
</Story>

<Story name="Breakpoint sizing">
	<Container class="container-example">
		<Row class="row-example" noGutters>
			<Col>
				<Card class="card-example">1 of 2</Card>
			</Col>
			<Col>
				<Card class="card-example">2 of 2</Card>
			</Col>
		</Row>
		<Row class="row-example" noGutters>
			<Col>
				<Card class="card-example">1 of 3</Card>
			</Col>
			<Col>
				<Card class="card-example">2 of 3</Card>
			</Col>
			<Col>
				<Card class="card-example">3 of 3</Card>
			</Col>
		</Row>
	</Container>
</Story>

<Story name="Justify">
	<Container class="container-example">
		{#each ['start', 'center', 'end', 'around', 'between'] as justify}
			<Row class="row-example" noGutters {justify}>
				<Col cols="4">
					<Card class="card-example">1 of 2</Card>
				</Col>
				<Col cols="4">
					<Card class="card-example">2 of 2</Card>
				</Col>
			</Row>
		{/each}
	</Container>
</Story>

<Story name="No gutters">
	<Container class="container-example">
		<Row class="row-example" noGutters>
			<Col cols="12" sm="6" md="8">
				<Card class="card-example">.col-12 .col-sm-6 .col-md-8</Card>
			</Col>
			<Col cols="6" md="4">
				<Card class="card-example">.col-6 .col-md-4</Card>
			</Col>
		</Row>
	</Container>
</Story>

<Story name="Offset">
	<Container class="container-example">
		<Row class="row-example" noGutters>
			<Col md="4">
				<Card class="card-example">.col-md-4</Card>
			</Col>
			<Col md="4" offsetMd="4">
				<Card class="card-example">.col-md-4 .offset-md-4</Card>
			</Col>
		</Row>
		<Row class="row-example" noGutters>
			<Col md="3" offsetMd="3">
				<Card class="card-example">.col-md-3 .offset-md-3</Card>
			</Col>
			<Col md="3" offsetMd="3">
				<Card class="card-example">.col-md-3 .offset-md-3</Card>
			</Col>
		</Row>
		<Row class="row-example" noGutters>
			<Col md="6" offsetMd="3">
				<Card class="card-example">.col-md-6 .offset-md-3</Card>
			</Col>
		</Row>
	</Container>
</Story>

<style global>
	.container-example {
		min-height: 150px;
		background: #fafafa;
		margin-bottom: 24px;
	}
	.row-example {
		min-height: 150px;
	}

	.card-example {
		padding: 8px;
	}
</style>
