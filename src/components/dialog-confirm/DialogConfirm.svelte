<svelte:options accessors />

<script lang="ts">
	import { Button, Dialog, DialogBody, DialogContent } from '$lib/components'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let description: string | undefined = undefined

	/**
	 * TODO
	 */
	export let open: boolean = false

	/**
	 * TODO
	 */
	export let title: string | undefined = undefined

	/**
	 * TODO
	 */
	export let type: 'error' | 'info' | 'question' | 'success' | 'warning' | undefined = undefined

	$: icon = (() => {
		switch (type) {
			case 'error':
				return 'x'
			case 'info':
				return 'i'
			case 'question':
				return '?'
			case 'success':
				return '✓'
			case 'warning':
				return '!'
		}
	})()
</script>

{#if condition($$props)}
	<Dialog bind:open size="sm" persistent>
		<DialogContent>
			<DialogBody>
				<div class={classname('dialog-confirm-body')}>
					{#if icon}
						<div class={classname('dialog-confirm-icon', { type })}>
							<div>{icon}</div>
						</div>
					{/if}
					<slot name="title">
						{#if title}
							<h2>
								{title}
							</h2>
						{/if}
					</slot>
					<slot name="description">
						{#if description}
							<p>
								{description}
							</p>
						{/if}
					</slot>
				</div>
				<div class={classname('dialog-confirm-actions')}>
					<slot>
						<Button color="primary" on:click={() => (open = !open)}>OK</Button>
					</slot>
				</div>
			</DialogBody>
		</DialogContent>
	</Dialog>
{/if}
