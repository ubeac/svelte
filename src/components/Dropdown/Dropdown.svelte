<script lang="ts">
	import { Button, type DropdownButtonProps, El } from '$lib/components'

	type $$Props = DropdownButtonProps

	/**
	 * Set Css Prefix for the Divider
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'dropdown-button'

	/**
	 * Set color of Divider
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * Set color of Divider
	 */
	export let items: $$Props['items'] = undefined

	/**
	 * Set color of Divider
	 */
	export let split: $$Props['split'] = false

	// /**
	//  * Set alignment of Divider
	//  */
	// export let alignment: $$Props['alignment'] = undefined

	let show = false
	const toggle = () => {
		console.log(items)
		show = !show
		console.log(show)
	}

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			color,
			show,
		}
		otherProps = {
			cssPrefix,
			split,
			items,
		}
	}
</script>

<!-- <El {...$$restProps} {...otherProps}>
	
	<El
		tag="button"
		cssPrefix={cssPrefix + '-button'}
		{cssProps}
		type="button"
		aria-expanded={show}
		on:click={toggle}
		class="btn btn-secondary dropdown-toggle">
		<slot />
	</El>
	{#if show && items !== undefined}
		<El cssPrefix={cssPrefix + '-items'} class="dropdown-menu">
			{#each items as item}
				<El cssPrefix={cssPrefix + '-item'}><a href={item.href}>{item.title}</a></El>
			{/each}
		</El>
	{/if}
</El> -->

<El {...$$restProps} {...otherProps} {cssProps} on:click={toggle} aria-expanded={show}>
	<slot />
</El>

<!-- <ButtonGroup>
	<Button></Button>
	<DropDown type="button">
		<DropdownBody></DropdownBody>
	</DropDown>
</ButtonGroup>


<DropDown type="dropdown">
	<DropdownBody></DropdownBody>
</DropDown> -->
