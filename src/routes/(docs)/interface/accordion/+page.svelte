<script lang="ts">
  import { Card, CardBody, Accordions, Accordion, AccordionBody } from '@ubeac/svelte'

  const description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui facere, explicabo hic eius veritatis\n" +
    "commodi quasi dignissimos quia odit obcaecati consectetur? Officiis nam earum tenetur unde, cum beatae minus?";
  const title = "Accordion Item #";
</script>
<h1>Accordion</h1>
<Card size="lg">
  <CardBody class="px-4 py-3">
    <Accordions>
      {#each Array(5) as _, index}
        <Accordion title="{title}{index +1}">
          <AccordionBody>{description}</AccordionBody>
        </Accordion>
      {/each}
    </Accordions>
  </CardBody>
</Card>
