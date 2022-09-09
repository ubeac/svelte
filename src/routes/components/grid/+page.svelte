<script>
	import { Preview } from '$lib/components'
	import { Container, Row, Col } from '$lib/components/gird'
	import { Card, CardBody } from '$lib/components/card'
</script>

<h2>default</h2>
<p>default</p>
<Preview>
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
</Preview>

<h2>Align</h2>
<p>Align</p>
<Preview>
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
</Preview>

<h2>Align Self</h2>
<p>Align Self</p>
<Preview>
	<Container class="container-example">
		<Row class="row-example" noGutters>
			{#each ['start', 'center', 'end'] as align}
				<Col alignSelf={align}>
					<Card class="card-example">One of three columns</Card>
				</Col>
			{/each}
		</Row>
	</Container>
</Preview>

<h2>Breakpoint sizing</h2>
<p>Breakpoint sizing</p>
<Preview>
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
</Preview>

<h2>Justify</h2>
<p>Justify</p>
<Preview>
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
</Preview>

<h2>No gutters</h2>
<p>No gutters</p>
<Preview>
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
</Preview>

<h2>Offset</h2>
<p>Offset</p>
<Preview>
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
</Preview>

<h2>Order</h2>
<p>Order</p>
<Preview>
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
</Preview>

<h2>Column wrapping</h2>
<p>Column wrapping</p>
<Preview>
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
</Preview>

<h2>Grow and Shrink</h2>
<p>Grow and Shrink</p>
<Preview>
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
</Preview>

<h2>Nested grid</h2>
<p>Nested grid</p>
<Preview>
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
</Preview>

<h2>One column width</h2>
<p>One column width</p>
<Preview>
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
</Preview>

<h2>Row and column breakpoints</h2>
<p>Row and column breakpoints</p>
<Preview>
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
</Preview>

<style global>
	h2 {
		margin-top: 2rem;
	}
	.u-preview-body {
		flex-direction: column;
	}
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
