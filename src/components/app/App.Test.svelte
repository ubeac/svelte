<script lang="ts">
	import { App, Autocomplete, Select } from '$lib/components'

	let footer: 'grow' | 'start' | 'end' | 'center' = 'grow'
	let header: 'grow' | 'start' | 'end' | 'center' = 'grow'

	let sticky: Array<
		'header-start' | 'header' | 'header-end' | 'aside-start' | 'aside-end' | 'footer-start' | 'footer' | 'footer-end'
	>
</script>

<App {header} {footer} {sticky}>
	<div slot="header-start">Header Start</div>
	<div slot="header">Header</div>
	<div slot="header-end">Header End</div>
	<div slot="aside-start">Aside Start</div>
	<div style="height: 1200px">
		<Select items={['grow', 'start', 'end', 'center']} bind:value={header} />
		<Select items={['grow', 'start', 'end', 'center']} bind:value={footer} />
		<Autocomplete
			multiple
			bind:value={sticky}
			items={[
				'header-start',
				'header',
				'header-end',
				'aside-start',
				'aside-end',
				'footer-start',
				'footer',
				'footer-end',
			]} />
	</div>
	<div slot="aside-end">Aside End</div>
	<div slot="footer-start">Footer Start</div>
	<div slot="footer">Footer</div>
	<div slot="footer-end">Footer End</div>
</App>

<style global>
	body {
		margin: 0;
	}

	div[slot] {
		padding: 12px;
		border-radius: 5px;
		border: solid 2px white;
		background-color: greenyellow;
	}
</style>
