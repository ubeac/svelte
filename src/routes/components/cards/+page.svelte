<script>
	import { Card, CardBody, CardHeader, CardTitle } from '$lib/components'
	import Example from '../../_layout-components/Example.svelte'
</script>

<h1>Cards</h1>
<p>
	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nihil obcaecati autem corrupti temporibus minus illum
	quas iste voluptatibus earum reprehenderit animi eos aut totam, delectus tempora, natus sed placeat!
</p>

<h2>Default</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sapiente quisquam non saepe perspiciatis molestias
	nihil odio! Provident nam neque possimus quam id dolores eius quo. Odit dicta ullam maxime.
</p>

<Example>
	<Card>
		<CardBody>This is card</CardBody>
	</Card>
</Example>

<h2>Card Title</h2>
<p>
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum quo aut, impedit dicta consequatur doloribus
	nesciunt autem sint aspernatur at, voluptatum eos. Dignissimos natus pariatur exercitationem, sequi eum magni debitis!
</p>

<Example>
	<Card>
		<CardHeader>
			<CardTitle>This is title</CardTitle>
		</CardHeader>
		<CardBody
			>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic maiores iusto fugit commodi, enim suscipit
			laborum placeat fugiat unde obcaecati similique quod distinctio corrupti neque quae dicta qui necessitatibus.
		</CardBody>
	</Card>
</Example>
