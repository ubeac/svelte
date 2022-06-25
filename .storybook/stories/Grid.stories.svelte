<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Grid } from '$lib/components'

	const ALIGN_CONTENTS = ['start', 'center', 'end', 'stretch', 'between', 'around', 'evenly', undefined]
	const ALIGN_ITEMS = ['start', 'center', 'end', 'stretch', undefined]
	const GUTTERS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', undefined]
	const JUSTIFY_CONTENTS = ['start', 'center', 'end', 'between', 'around', 'evenly', undefined]

	function control(type, options) {
		return {
			control: {
				type,
				options,
			},
		}
	}

	const argTypes = {
		alignContent: control('select', ALIGN_CONTENTS),
		alignContentXs: control('select', ALIGN_CONTENTS),
		alignContentSm: control('select', ALIGN_CONTENTS),
		alignContentMd: control('select', ALIGN_CONTENTS),
		alignContentLg: control('select', ALIGN_CONTENTS),
		alignContentXl: control('select', ALIGN_CONTENTS),
		alignContentXxl: control('select', ALIGN_CONTENTS),

		alignItems: control('select', ALIGN_ITEMS),
		alignItemsXs: control('select', ALIGN_ITEMS),
		alignItemsSm: control('select', ALIGN_ITEMS),
		alignItemsMd: control('select', ALIGN_ITEMS),
		alignItemsLg: control('select', ALIGN_ITEMS),
		alignItemsXl: control('select', ALIGN_ITEMS),
		alignItemsXxl: control('select', ALIGN_ITEMS),

		justifyContent: control('select', JUSTIFY_CONTENTS),
		justifyContentXs: control('select', JUSTIFY_CONTENTS),
		justifyContentSm: control('select', JUSTIFY_CONTENTS),
		justifyContentMd: control('select', JUSTIFY_CONTENTS),
		justifyContentLg: control('select', JUSTIFY_CONTENTS),
		justifyContentXl: control('select', JUSTIFY_CONTENTS),
		justifyContentXxl: control('select', JUSTIFY_CONTENTS),

		gutter: control('select', GUTTERS),
		gutterX: control('select', GUTTERS),
		gutterY: control('select', GUTTERS),
		reverse: control('boolean'),
		vertical: control('boolean'),
		wrap: control('check', [false, true, 'reverse']),
		wrapXs: control('check', [false, true, 'reverse']),
		wrapSm: control('check', [false, true, 'reverse']),
		wrapMd: control('check', [false, true, 'reverse']),
		wrapLg: control('check', [false, true, 'reverse']),
		wrapXl: control('check', [false, true, 'reverse']),
		wrapXxl: control('check', [false, true, 'reverse']),
	}
</script>

<Meta title="Grid" component={Grid} {argTypes} />

<Template let:args>
	<Grid class="h-5" {...args}>
		<Grid.Item class="h-4 w-4 d-flex justify-content-center align-items-center bg-red">1</Grid.Item>
		<Grid.Item class="h-4 w-4 d-flex justify-content-center align-items-center bg-yellow">2</Grid.Item>
		<Grid.Item class="h-4 w-4 d-flex justify-content-center align-items-center bg-green">3</Grid.Item>
		<Grid.Item class="h-4 w-4 d-flex justify-content-center align-items-center bg-blue">4</Grid.Item>
	</Grid>
</Template>

<Story name="default" />
<Story name="Align Content" args={{ alignContent: 'start' }} />
<Story name="Align Content XS" args={{ alignContentXs: 'start' }} />
<Story name="Align Content SM" args={{ alignContentSm: 'start' }} />
<Story name="Align Content MD" args={{ alignContentMd: 'start' }} />
<Story name="Align Content LG" args={{ alignContentLg: 'start' }} />
<Story name="Align Content XL" args={{ alignContentXl: 'start' }} />
<Story name="Align Content XXL" args={{ alignContentXxl: 'start' }} />

<Story name="Justify Content" args={{ justifyContent: 'start' }} />
<Story name="Justify Content XS" args={{ justifyContentXs: 'start' }} />
<Story name="Justify Content SM" args={{ justifyContentSm: 'start' }} />
<Story name="Justify Content MD" args={{ justifyContentMd: 'start' }} />
<Story name="Justify Content LG" args={{ justifyContentLg: 'start' }} />
<Story name="Justify Content XL" args={{ justifyContentXl: 'start' }} />
<Story name="Justify Content XXL" args={{ justifyContentXxl: 'start' }} />

<Story name="Justify Items" args={{ justifyItems: 'start' }} />
<Story name="Justify Items XS" args={{ justifyItemsXs: 'start' }} />
<Story name="Justify Items SM" args={{ justifyItemsSm: 'start' }} />
<Story name="Justify Items MD" args={{ justifyItemsMd: 'start' }} />
<Story name="Justify Items LG" args={{ justifyItemsLg: 'start' }} />
<Story name="Justify Items XL" args={{ justifyItemsXl: 'start' }} />
<Story name="Justify Items XXL" args={{ justifyItemsXxl: 'start' }} />

<Story name="reverse" args={{ reverse: true }} />
