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
						<div class="spacer" />
						<slot name="inner:start" />
						<div class="input">
							<slot />
							<div class="focus" />
						</div>
						<slot name="inner:end" />
						<div class="spacer" />
					</div>
					<slot name="middle:end" />
				</div>
				<slot name="outer:end" />
			</div>
		</div>
	</Grid.Item>
{/if}

<style lang="scss" global>
	.outer,
	.middle,
	.inner {
		align-items: center;
		display: flex;
		flex-grow: 1;
		flex-wrap: nowrap;
	}

	.outer {
		column-gap: 10px;
	}

	.inner {
		background-color: #ffffff;
		border-radius: 4px;
		column-gap: 8px;
		position: relative;
	}

	.spacer {
		width: 2px;
	}

	.input {
		flex-grow: 1;

		& > *:not(.focus) {
			padding-right: 0;
			padding-left: 0;
		}

		& > *:not(.focus),
		& > *:not(.focus):focus {
			box-shadow: none;
			border-color: transparent;
		}

		& > *:not(.focus):focus ~ .focus {
			color: inherit;
			border-color: #90b5e2;
			outline: 0;
			box-shadow: 0 0 0 0.25rem rgb(32 107 196 / 25%);
		}
	}

	.focus {
		position: absolute;
		inset: 0;
		border: 1px solid #d9dbde;
		border-radius: 4px;
		transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		pointer-events: none;
	}
</style>
