<script lang="ts">
	import { Grid } from '$lib/components'
	import { classname, condition } from '$lib/utils'

	$: classes = classname('form-group', null, $$props.class)

	$: col = $$props.col ?? '6'
</script>

{#if condition($$props)}
	<Grid.Item {...$$restProps} class={classes} {col}>
		<div>
			<slot />
		</div>
	</Grid.Item>
{/if}
