<script lang="ts">
	import { GridItem } from '$lib/components'
	import { classname } from '$lib/utils'

	$: classes = classname('form-group', undefined, $$props.class)

	$: col = $$props.col ?? '6'
</script>

<GridItem {col}>
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
						<div class={classname('form-group-focus', undefined, $$props.class)} />
					</div>
					<slot name="inner:end" />
				</div>
				<slot name="middle:end" />
			</div>
			<slot name="outer:end" />
		</div>
	</div>
</GridItem>
