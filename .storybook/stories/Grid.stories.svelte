<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { Container, Row, Col, Spacer } from '$lib/components/gird'
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

<Story name="Order">
	<Container class="container-example">
		<Row class="row-example" noGutters>
			<Col>
				<Card class="card-example">First, but unordered</Card>
			</Col>
			<Col order="5">
				<Card class="card-example">Second, but last</Card>
			</Col>
			<Col order="1">
				<Card class="card-example">Third, but first</Card>
			</Col>
		</Row>
	</Container>
	<Container class="container-example">
		<Row class="row-example" noGutters>
			<Col order="last">
				<Card class="card-example">First, but last</Card>
			</Col>
			<Col>
				<Card class="card-example">Second, but unordered</Card>
			</Col>
			<Col order="first">
				<Card class="card-example">Third, but first</Card>
			</Col>
		</Row>
	</Container>
</Story>

<Story name="Column wrapping">
	<Container class="container-example">
		<Row noGutters>
			<Col cols="9">
				<Card class="card-example">.col-9</Card>
			</Col>
			<Col cols="4">
				<Card class="card-example">
					.col-4<br />Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous
					unit.
				</Card>
			</Col>
			<Col cols="6">
				<Card class="card-example">.col-6<br />Subsequent columns continue along the new line.</Card>
			</Col>
		</Row>
	</Container>
</Story>

<Story name="Grow and Shrink">
	<Container class="container-example">
		<Row noGutters>
			{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] as col}
				<Col>
					<Card class="card-example">col</Card>
				</Col>
			{/each}
		</Row>
		<Row noGutters>
			<Col cols="8">
				<Card class="card-example">col-8</Card>
			</Col>
			<Col cols="4">
				<Card class="card-example">col-4</Card>
			</Col>
		</Row>
		<Row noGutters>
			{#each [1, 2, 3, 4] as col}
				<Col>
					<Card class="card-example">col</Card>
				</Col>
			{/each}
		</Row>
	</Container>
</Story>

<Story name="Nested grid">
	<Container class="container-example">
		<Row noGutters>
			<Col cols="9">
				<Card class="card-example">Level 1: .col-sm-9</Card>
				<Row noGutters>
					<Col cols="8">
						<Card style="background-color: lightgrey;" class="card-example">Level 2: .col-8</Card>
					</Col>
					<Col cols="4">
						<Card style="background-color: lightgrey;" class="card-example">Level 2: .col-4</Card>
					</Col>
				</Row>
			</Col>
		</Row>
	</Container>
</Story>

<Story name="One column width">
	<Container class="container-example">
		<Row noGutters>
			{#each [1, 2, 3] as col}
				<Col cols={col == 2 ? 6 : undefined}>
					<Card class="card-example">{col} of 3 {col == 2 ? '(wider)' : ''}</Card>
				</Col>
			{/each}
		</Row>
		<Row noGutters>
			{#each [1, 2, 3] as col}
				<Col cols={col == 2 ? 5 : undefined}>
					<Card class="card-example">{col} of 3 {col == 2 ? '(wider)' : ''}</Card>
				</Col>
			{/each}
		</Row>
	</Container>
</Story>

<Story name="Row and column breakpoints">
	<Container class="container-example">
		<Row noGutters>
			{#each [1, 2] as col}
				<Col :lg="cols[n - 1]" :md="6" :sm="cols[n - 1]">
					<Card class="card-example">{col} of 3 {col == 2 ? '(wider)' : ''}</Card>
				</Col>
			{/each}
		</Row>
		<Row noGutters>
			{#each [1, 2, 3] as col}
				<Col cols="sm">
					<Card class="card-example">col</Card>
				</Col>
			{/each}
		</Row>
	</Container>
</Story>

<!-- <Story name="Row and column breakpoints">
	<Container class="container-example">
		<Row class="row-example" noGutters>
			<Col cols="1">
				<Card class="card-example">col</Card>
			</Col>
			<Spacer />
			<Col cols="1">
				<Card class="card-example">col</Card>
			</Col>
		</Row>
	</Container>
</Story> -->
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
