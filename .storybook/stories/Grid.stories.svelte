<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Divider, Grid, GridItem, GRID_ALIGN_CONTENTS, GRID_ALIGN_ITEMS, GRID_GUTTERS, GRID_JUSTIFY_CONTENTS } from '$lib/components'

	function control(type, options) {
		return {
			control: {
				type,
				options,
			},
		}
	}

	const argTypes = {
		alignContent: control('select', GRID_ALIGN_CONTENTS),
		alignContentXs: control('select', GRID_ALIGN_CONTENTS),
		alignContentSm: control('select', GRID_ALIGN_CONTENTS),
		alignContentMd: control('select', GRID_ALIGN_CONTENTS),
		alignContentLg: control('select', GRID_ALIGN_CONTENTS),
		alignContentXl: control('select', GRID_ALIGN_CONTENTS),
		alignContentXxl: control('select', GRID_ALIGN_CONTENTS),

		alignItems: control('select', GRID_ALIGN_ITEMS),
		alignItemsXs: control('select', GRID_ALIGN_ITEMS),
		alignItemsSm: control('select', GRID_ALIGN_ITEMS),
		alignItemsMd: control('select', GRID_ALIGN_ITEMS),
		alignItemsLg: control('select', GRID_ALIGN_ITEMS),
		alignItemsXl: control('select', GRID_ALIGN_ITEMS),
		alignItemsXxl: control('select', GRID_ALIGN_ITEMS),

		justifyContent: control('select', GRID_JUSTIFY_CONTENTS),
		justifyContentXs: control('select', GRID_JUSTIFY_CONTENTS),
		justifyContentSm: control('select', GRID_JUSTIFY_CONTENTS),
		justifyContentMd: control('select', GRID_JUSTIFY_CONTENTS),
		justifyContentLg: control('select', GRID_JUSTIFY_CONTENTS),
		justifyContentXl: control('select', GRID_JUSTIFY_CONTENTS),
		justifyContentXxl: control('select', GRID_JUSTIFY_CONTENTS),

		gutter: control('select', GRID_GUTTERS),
		gutterX: control('select', GRID_GUTTERS),
		gutterY: control('select', GRID_GUTTERS),
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

<Story name="default" let:args>
	<Grid {...args}>
		<GridItem class="example-grid-item-text bg-red">1</GridItem>
		<GridItem class="example-grid-item-text bg-yellow">2</GridItem>
		<GridItem class="example-grid-item-text bg-green">3</GridItem>
		<GridItem class="example-grid-item-text bg-blue">4</GridItem>
	</Grid>
</Story>

<Story name="Align Content" let:args>
	<div class="example-grid h-25">
		{#each GRID_ALIGN_CONTENTS as alignContent}
			<Grid {alignContent} {...args}>
				<GridItem class="example-grid-item-text bg-red">{alignContent}</GridItem>
				<GridItem class="example-grid-item-text bg-yellow">{alignContent}</GridItem>
				<GridItem class="example-grid-item-text bg-green">{alignContent}</GridItem>
				<GridItem class="example-grid-item-text bg-blue">{alignContent}</GridItem>
			</Grid>
		{/each}
	</div>
	
	<Divider>Xs</Divider>
	<div class="example-grid">

		{#each GRID_ALIGN_CONTENTS as alignContentXs}
			<Grid {alignContentXs}  {...args}>
				<GridItem class="example-grid-item-text bg-red">{alignContentXs}</GridItem>
				<GridItem class="example-grid-item-text bg-yellow">{alignContentXs}</GridItem>
				<GridItem class="example-grid-item-text bg-green">{alignContentXs}</GridItem>
				<GridItem class="example-grid-item-text bg-blue">{alignContentXs}</GridItem>
			</Grid>
		{/each}
	</div>
	
	<Divider>Sm</Divider>
	<div class="example-grid">
		{#each GRID_ALIGN_CONTENTS as alignContentSm}
			<Grid {alignContentSm}  {...args}>
				<GridItem class="example-grid-item-text bg-red">{alignContentSm}</GridItem>
				<GridItem class="example-grid-item-text bg-yellow">{alignContentSm}</GridItem>
				<GridItem class="example-grid-item-text bg-green">{alignContentSm}</GridItem>
				<GridItem class="example-grid-item-text bg-blue">{alignContentSm}</GridItem>
			</Grid>
		{/each}
	</div>
	<Divider>Md</Divider>
	<div class="example-grid">
		{#each GRID_ALIGN_CONTENTS as alignContentMd}
			<Grid {alignContentMd}  {...args}>
				<GridItem class="example-grid-item-text bg-red">{alignContentMd}</GridItem>
				<GridItem class="example-grid-item-text bg-yellow">{alignContentMd}</GridItem>
				<GridItem class="example-grid-item-text bg-green">{alignContentMd}</GridItem>
				<GridItem class="example-grid-item-text bg-blue">{alignContentMd}</GridItem>
			</Grid>
		{/each}
	</div>
	<Divider>Lg</Divider>
	<div class="example-grid">
		{#each GRID_ALIGN_CONTENTS as alignContentLg}
			<Grid {alignContentLg}  {...args}>
				<GridItem class="example-grid-item-text bg-red">{alignContentLg}</GridItem>
				<GridItem class="example-grid-item-text bg-yellow">{alignContentLg}</GridItem>
				<GridItem class="example-grid-item-text bg-green">{alignContentLg}</GridItem>
				<GridItem class="example-grid-item-text bg-blue">{alignContentLg}</GridItem>
			</Grid>
		{/each}
	</div>
	
	<Divider>Xl</Divider>
	<div class="example-grid">
		{#each GRID_ALIGN_CONTENTS as alignContentXl}
			<Grid {alignContentXl}  {...args}>
				<GridItem class="example-grid-item-text bg-red">{alignContentXl}</GridItem>
				<GridItem class="example-grid-item-text bg-yellow">{alignContentXl}</GridItem>
				<GridItem class="example-grid-item-text bg-green">{alignContentXl}</GridItem>
				<GridItem class="example-grid-item-text bg-blue">{alignContentXl}</GridItem>
			</Grid>
		{/each}
	</div>
		
	<Divider>Xxl</Divider>
	<div class="example-grid">
		{#each GRID_ALIGN_CONTENTS as alignContentXxl}
			<Grid {alignContentXxl}  {...args}>
				<GridItem class="example-grid-item-text bg-red">{alignContentXxl}</GridItem>
				<GridItem class="example-grid-item-text bg-yellow">{alignContentXxl}</GridItem>
				<GridItem class="example-grid-item-text bg-green">{alignContentXxl}</GridItem>
				<GridItem class="example-grid-item-text bg-blue">{alignContentXxl}</GridItem>
			</Grid>
		{/each}
	</div>	
</Story>

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
