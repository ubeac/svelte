<script lang="ts">
	import { v4 as uuid } from 'uuid';
	import { Collapse, CollapseToggler } from '../collapse';
	/**
	 * TODO
	 */
	export let expanded: boolean = false;
	/**
	 * TODO
	 */
	export let id: string = uuid();
	/**
	 * TODO
	 */
	export let title: string = undefined;
</script>

<div class="u-accordion accordion-item">
	<div class="accordion-header">
		<CollapseToggler accordion {id}>
			{title}
		</CollapseToggler>
	</div>
	<Collapse accordion {id} open={expanded}>
		<slot />
	</Collapse>
</div>
