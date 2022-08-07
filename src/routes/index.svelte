<script lang="ts">
	import AppTest from '$lib/components/app/App.Test.svelte'
	import { Collapse } from '$lib/components/collapse'
	import CollapseToggler from '$lib/components/collapse/CollapseToggler.svelte'
	import FormCheckboxGroup from '$lib/components/form/FormCheckboxGroup.svelte'
</script>

<!-- <AppTest /> -->
<!-- <FormCheckboxGroup on:click={console.log} on:change={console.log} /> -->

<CollapseToggler id="abc">Toggle</CollapseToggler>
<CollapseToggler id="abcd">Toggle</CollapseToggler>
<CollapseToggler id="abce">Toggle</CollapseToggler>
<CollapseToggler id="abcf">Toggle</CollapseToggler>
<Collapse id="abc">this is inside collapse</Collapse>
<Collapse id="abcd">this is inside collapse</Collapse>
<Collapse id="abce">this is inside collapse</Collapse>
<Collapse id="abcf">this is inside collapse</Collapse>
