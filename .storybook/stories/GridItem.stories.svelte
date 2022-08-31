<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Grid, GridItem } from '$lib/components'

	const ALIGN_SELFS = ['start', 'center', 'end', 'stretch', 'auto', undefined]
	const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
	const COL_NUMBERS = [...NUMBERS, 'grow', 'auto', 'hide', 'hide-down', 'hide-up']

	function control(type, options) {
		return {
			control: {
				type,
				options,
			},
		}
	}

	const argTypes = {
		alignSelf: control('select', ALIGN_SELFS),
		alignSelfXs: control('select', ALIGN_SELFS),
		alignSelfSm: control('select', ALIGN_SELFS),
		alignSelfMd: control('select', ALIGN_SELFS),
		alignSelfLg: control('select', ALIGN_SELFS),
		alignSelfXl: control('select', ALIGN_SELFS),
		alignSelfXxl: control('select', ALIGN_SELFS),
		col: control('select', COL_NUMBERS),
		xs: control('select', COL_NUMBERS),
		sm: control('select', COL_NUMBERS),
		md: control('select', COL_NUMBERS),
		lg: control('select', COL_NUMBERS),
		xl: control('select', COL_NUMBERS),
		xxl: control('select', COL_NUMBERS),

		offset: control('select', NUMBERS),
		offsetXs: control('select', NUMBERS),
		offsetSm: control('select', NUMBERS),
		offsetMd: control('select', NUMBERS),
		offsetLg: control('select', NUMBERS),
		offsetXl: control('select', NUMBERS),
		offsetXxl: control('select', NUMBERS),

		order: control('select', NUMBERS),
		orderXs: control('select', NUMBERS),
		orderSm: control('select', NUMBERS),
		orderMd: control('select', NUMBERS),
		orderLg: control('select', NUMBERS),
		orderXl: control('select', NUMBERS),
		orderXxl: control('select', NUMBERS),
	}
</script>

<Meta title="Grid System/GridItem" component={GridItem} {argTypes} />

<Template let:args>
	<Grid class="bg-gray h-5">
		<GridItem class="h-4 w-4 bg-red">1</GridItem>
		<GridItem class="h-4 w-4 bg-yellow">2</GridItem>
		<GridItem {...args} class="h-4 w-4 bg-green">3*</GridItem>
		<GridItem class="h-4 w-4 bg-blue">4</GridItem>
		<GridItem class="h-4 w-4 bg-red">5</GridItem>
		<GridItem class="h-4 w-4 bg-yellow">6</GridItem>
		<GridItem class="h-4 w-4 bg-green">7</GridItem>
		<GridItem class="h-4 w-4 bg-blue">8</GridItem>
		<GridItem class="h-4 w-4 bg-red">9</GridItem>
		<GridItem class="h-4 w-4 bg-yellow">10</GridItem>
		<GridItem class="h-4 w-4 bg-green">11</GridItem>
		<GridItem class="h-4 w-4 bg-blue">12</GridItem>
	</Grid>
</Template>

<Story name="default" />
<Story name="Align Self" args={{ alignSelf: 'start' }} />
<Story name="Align Self XS" args={{ alignSelfXs: 'start' }} />
<Story name="Align Self SM" args={{ alignSelfSm: 'start' }} />
<Story name="Align Self MD" args={{ alignSelfMd: 'start' }} />
<Story name="Align Self LG" args={{ alignSelfLg: 'start' }} />
<Story name="Align Self XL" args={{ alignSelfXl: 'start' }} />
<Story name="Align Self XXL" args={{ alignSelfXxl: 'start' }} />

<Story name="col" args={{ col: '3' }} />
<Story name="xs" args={{ xs: '3' }} />
<Story name="sm" args={{ sm: '3' }} />
<Story name="md" args={{ md: '3' }} />
<Story name="lg" args={{ lg: '3' }} />
<Story name="xl" args={{ xl: '3' }} />
<Story name="xxl" args={{ xxl: '3' }} />

<Story name="Hide" args={{ col: 'hide' }} />
<Story name="Hide xs" args={{ xs: 'hide' }} />
<Story name="Hide sm" args={{ sm: 'hide' }} />
<Story name="Hide md" args={{ md: 'hide' }} />
<Story name="Hide lg" args={{ lg: 'hide' }} />
<Story name="Hide xl" args={{ xl: 'hide' }} />
<Story name="Hide xxl" args={{ xxl: 'hide' }} />

<Story name="Hide sm Up" args={{ sm: 'hide-up' }} />
<Story name="Hide md Up" args={{ md: 'hide-up' }} />
<Story name="Hide lg Up" args={{ lg: 'hide-up' }} />
<Story name="Hide xl Up" args={{ xl: 'hide-up' }} />

<Story name="Hide sm Down" args={{ sm: 'hide-down' }} />
<Story name="Hide md Down" args={{ md: 'hide-down' }} />
<Story name="Hide lg Down" args={{ lg: 'hide-down' }} />
<Story name="Hide xl Down" args={{ xl: 'hide-down' }} />
<Story name="Hide xxl Down" args={{ xxl: 'hide-down' }} />

<Story name="Offset" args={{ offset: '2' }} />
<Story name="Offset XS" args={{ offsetXs: '2' }} />
<Story name="Offset SM" args={{ offsetSm: '2' }} />
<Story name="Offset MD" args={{ offsetMd: '2' }} />
<Story name="Offset LG" args={{ offsetLg: '2' }} />
<Story name="Offset XL" args={{ offsetXl: '2' }} />
<Story name="Offset XXL" args={{ offsetXxl: '2' }} />

<Story name="Order" args={{ order: '2' }} />
<Story name="Order XS" args={{ orderXs: '2' }} />
<Story name="Order SM" args={{ orderSm: '2' }} />
<Story name="Order MD" args={{ orderMd: '2' }} />
<Story name="Order LG" args={{ orderLg: '2' }} />
<Story name="Order XL" args={{ orderXl: '2' }} />
<Story name="Order XXL" args={{ orderXxl: '2' }} />
