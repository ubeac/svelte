<script>
	import { Accordion, AccordionBody, AccordionHeader, Accordions, AccordionTitle } from '@ubeac/svelte/components'

	const items = [
		{
			title: 'title 1',
			body: 'dolor sit amet consectetur adipisicing eos aut in doloremqihil, eius magni nostrum.',
		},
		{
			title: 'title 2',
			body: '. Adipisci perferendis eos aut in doloremque quo optioorum velit corporis nam laborum nihil, eius magni nostrum.',
		},
		{
			title: 'title 3',
			body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci perferendis eos aut  veritatis culpa exercrporis nam laborum nihil, eius magni nostrum.',
		},
		{
			title: 'title 4',
			body: 'Lorem, i Adipisci perferendis eos aut in doloremque quo optio soluta voluptate veritatis culpa exercitatgni nostrum.',
		},
	]
</script>

<Accordions>
	<Accordion each={items} let:item={{ title, body }} let:index>
		<AccordionHeader>
			<AccordionTitle>
				{index} - {title}
			</AccordionTitle>
		</AccordionHeader>
		<AccordionBody>
			{body}
		</AccordionBody>
	</Accordion>
</Accordions>
