<script lang="ts">
	import { Checkbox, Layout, Select } from '$lib/components'

	let header: any = 'grow'
	let footer: any = 'grow'

	let headerSticky: boolean
	let headerStartSticky: boolean
	let headerEndSticky: boolean
</script>

<Layout {header} {footer} {headerSticky} {headerStartSticky} {headerEndSticky}>
	<div class="header1 " slot="header">Header</div>
	<div class="header1" slot="header:start">Header Start</div>
	<div class="aside-start1" slot="aside:start">Aside Start</div>
	<div class="main1">
		<Checkbox bind:value={headerSticky} />
		<Checkbox bind:value={headerStartSticky} />
		<Checkbox bind:value={headerEndSticky} />
		<Select items={['grow', 'start', 'end', 'center', 'sticky']} bind:value={header} />
		<Select items={['grow', 'start', 'end', 'center', 'sticky']} bind:value={footer} />
	</div>
	<div class="aside-end1" slot="aside:end">Aside End</div>
	<div class="footer1" slot="footer">Footer</div>
</Layout>

<style global>
	body {
		margin: 0;
	}

	.u-layout {
		/* min-height: unset; */
	}
	.u-layout .header1,
	.u-layout .aside-start1,
	.u-layout .main1,
	.u-layout .aside-end1,
	.u-layout .footer1 {
		padding: 1rem;
		box-sizing: border-box;
		height: 100%;
	}
	.u-layout .header1 {
		background-color: red;
	}
	.u-layout .aside-start1 {
		background-color: yellowgreen;
	}
	.u-layout .main1 {
		background-color: #e0e0e0;
		height: 800px;
	}
	.u-layout .aside-end1 {
		background-color: blueviolet;
	}
	.u-layout .footer1 {
		background-color: darkorange;
	}
</style>
