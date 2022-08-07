<script lang="ts">
	import { Accordion, FormCheckbox } from '$lib/components'
	import Accordions from '$lib/components/accordion/Accordions.svelte'
	import AppTest from '$lib/components/app/App.Test.svelte'
	import { Collapse } from '$lib/components/collapse'
	import CollapseToggler from '$lib/components/collapse/CollapseToggler.svelte'
	import FormCheckboxGroup from '$lib/components/form/FormCheckboxGroup.svelte'

	let stayOpen = false
</script>

<FormCheckbox label="stayOpen" bind:value={stayOpen} />

<!-- <AppTest /> -->
<!-- <FormCheckboxGroup on:click={console.log} on:change={console.log} /> -->

<Accordions {stayOpen}>
	<Accordion title="item 1">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore magnam unde neque quos consequatur amet velit
		architecto reiciendis molestiae accusantium alias, ad illo voluptatibus, tenetur maxime atque sunt aspernatur eos.
	</Accordion>
	<Accordion title="item 2">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore magnam unde neque quos consequatur amet velit
		architecto reiciendis molestiae accusantium alias, ad illo voluptatibus, tenetur maxime atque sunt aspernatur eos.
	</Accordion>
	<Accordion title="item 3">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore magnam unde neque quos consequatur amet velit
		architecto reiciendis molestiae accusantium alias, ad illo voluptatibus, tenetur maxime atque sunt aspernatur eos.
	</Accordion>
	<Accordion title="item 4">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore magnam unde neque quos consequatur amet velit
		architecto reiciendis molestiae accusantium alias, ad illo voluptatibus, tenetur maxime atque sunt aspernatur eos.
	</Accordion>
</Accordions>

<div class="accordion" id="accordionExample">
	<div class="accordion-item">
		<h2 class="accordion-header" id="headingOne">
			<button
				class="accordion-button"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseOne"
				aria-expanded="true"
				aria-controls="collapseOne">
				Accordion Item #1
			</button>
		</h2>
		<div
			id="collapseOne"
			class="accordion-collapse collapse show"
			aria-labelledby="headingOne"
			data-bs-parent="#accordionExample">
			<div class="accordion-body">
				<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
				the appropriate classes that we use to style each element. These classes control the overall appearance, as well
				as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
				default variables. It's also worth noting that just about any HTML can go within the
				<code>.accordion-body</code>, though the transition does limit overflow.
			</div>
		</div>
	</div>
	<div class="accordion-item">
		<h2 class="accordion-header" id="headingTwo">
			<button
				class="accordion-button collapsed"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseTwo"
				aria-expanded="false"
				aria-controls="collapseTwo">
				Accordion Item #2
			</button>
		</h2>
		<div
			id="collapseTwo"
			class="accordion-collapse collapse"
			aria-labelledby="headingTwo"
			data-bs-parent="#accordionExample">
			<div class="accordion-body">
				<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin
				adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
				well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
				default variables. It's also worth noting that just about any HTML can go within the
				<code>.accordion-body</code>, though the transition does limit overflow.
			</div>
		</div>
	</div>
	<div class="accordion-item">
		<h2 class="accordion-header" id="headingThree">
			<button
				class="accordion-button collapsed"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseThree"
				aria-expanded="false"
				aria-controls="collapseThree">
				Accordion Item #3
			</button>
		</h2>
		<div
			id="collapseThree"
			class="accordion-collapse collapse"
			aria-labelledby="headingThree"
			data-bs-parent="#accordionExample">
			<div class="accordion-body">
				<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
				adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
				well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
				default variables. It's also worth noting that just about any HTML can go within the
				<code>.accordion-body</code>, though the transition does limit overflow.
			</div>
		</div>
	</div>
</div>
