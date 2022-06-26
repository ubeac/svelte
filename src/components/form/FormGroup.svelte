<script lang="ts">
	import { Grid } from '$lib/components'
	import { classname, condition } from '$lib/utils'

	$: classes = classname('form-group', null, $$props.class)

	$: col = $$props.col ?? '6'
</script>

{#if condition($$props)}
	<Grid.Item {col}>
		<div class={classes}>
			<slot name="label" />
			<div class="outer">
				<slot name="outer:start" />
				<div class="middle">
					<slot name="middle:start" />
					<div class="inner">
						<slot name="inner:start" />
						<div class="input">
							<slot />
							<div class="focus" />
						</div>
						<slot name="inner:end" />
					</div>
					<slot name="middle:end" />
				</div>
				<slot name="outer:end" />
			</div>
		</div>
	</Grid.Item>
{/if}
