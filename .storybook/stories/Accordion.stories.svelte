<script>
	import { Story, Meta } from '@storybook/addon-svelte-csf'
	import { Accordion, AccordionHeader, AccordionBody, Accordions } from '$lib'
</script>

<Meta title="Accordion" component={Accordion} />

<Story name="Default" let:args>
	<Accordions>
		<Accordion {...args}>
			<AccordionHeader slot="header">This is Accordion #1</AccordionHeader>
			<AccordionBody>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia nesciunt tempora quod maiores amet
				quisquam veniam quia labore minus beatae sequi, aperiam dolores, assumenda enim sit eaque corrupti magnam!
			</AccordionBody>
		</Accordion>
		<Accordion>
			<AccordionHeader slot="header">This is Accordion #2</AccordionHeader>
			<AccordionBody>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia nesciunt tempora quod maiores amet
				quisquam veniam quia labore minus beatae sequi, aperiam dolores, assumenda enim sit eaque corrupti magnam!
			</AccordionBody>
		</Accordion>
		<Accordion>
			<AccordionHeader slot="header">This is Accordion #3</AccordionHeader>
			<AccordionBody>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia nesciunt tempora quod maiores amet
				quisquam veniam quia labore minus beatae sequi, aperiam dolores, assumenda enim sit eaque corrupti magnam!
			</AccordionBody>
		</Accordion>
	</Accordions>
</Story>

<Story name="Open" let:args>
	<Accordion open title="This is open By default" {...args}>
		<AccordionBody>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus omnis quidem mollitia voluptatem culpa,
			veritatis tenetur eveniet. Voluptatem nihil autem perferendis dolorum eligendi sapiente nobis consequatur repellat
			voluptate. Explicabo, molestias.
		</AccordionBody>
	</Accordion>
</Story>

<Story name="Stay Open" let:args>
	<Accordions stayOpen>
		<Accordion {...args}>
			<AccordionHeader slot="header">This is Accordion #1</AccordionHeader>
			<AccordionBody>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia nesciunt tempora quod maiores amet
				quisquam veniam quia labore minus beatae sequi, aperiam dolores, assumenda enim sit eaque corrupti magnam!
			</AccordionBody>
		</Accordion>
		<Accordion>
			<AccordionHeader slot="header">This is Accordion #2</AccordionHeader>
			<AccordionBody>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia nesciunt tempora quod maiores amet
				quisquam veniam quia labore minus beatae sequi, aperiam dolores, assumenda enim sit eaque corrupti magnam!
			</AccordionBody>
		</Accordion>
		<Accordion>
			<AccordionHeader slot="header">This is Accordion #3</AccordionHeader>
			<AccordionBody>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia nesciunt tempora quod maiores amet
				quisquam veniam quia labore minus beatae sequi, aperiam dolores, assumenda enim sit eaque corrupti magnam!
			</AccordionBody>
		</Accordion>
	</Accordions>
</Story>

<Story name="Title" let:args>
	<Accordion title="This is title from prop" {...args}>
		<AccordionBody>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus omnis quidem mollitia voluptatem culpa,
			veritatis tenetur eveniet. Voluptatem nihil autem perferendis dolorum eligendi sapiente nobis consequatur repellat
			voluptate. Explicabo, molestias.
		</AccordionBody>
	</Accordion>
</Story>
