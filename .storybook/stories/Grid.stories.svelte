<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import {
		Divider,
		Grid,
		GridItem,
		GRID_ALIGN_CONTENTS,
		GRID_ALIGN_ITEMS,
		GRID_GUTTERS,
		GRID_JUSTIFY_CONTENTS,
	} from '$lib/components'

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

<Template let:args>
	{@const { values = [], key, ...rest } = args}
	<div class="example-grid">
		{#each ['', 'Xs', 'Sm', 'Md', 'Lg', 'Xl', 'Xxl'] as breakpoint}
			<Divider>{breakpoint === '' ? 'default' : breakpoint}</Divider>
			{#each values as value}
				<Grid class="h-5 border" {...{ [args.key + breakpoint]: value }} {...rest}>
					<GridItem>
						<div class="example-grid-item-text  bg-blue">
							{value}
						</div>
					</GridItem>
					{#each Array.from({ length: 6 }, (_) => 0) as _, index}
						<GridItem>
							<div class="example-grid-item-text bg-red">
								{index + 1}
							</div>
						</GridItem>
					{/each}
				</Grid>
			{/each}
		{/each}
	</div>
</Template>

<Story name="Align Content" args={{ key: 'alignContent', values: GRID_ALIGN_CONTENTS }} />
<Story name="Align Items" args={{ key: 'alignItems', values: GRID_ALIGN_ITEMS }} />
<Story name="Justify Content" args={{ key: 'justifyContent', values: GRID_JUSTIFY_CONTENTS }} />
<Story name="Wrap" args={{ key: 'wrap', values: [true, false, 'reverse'] }} />

<Story name="Default" let:args>
	<Grid {...args}>
		<GridItem>
			<div class="example-grid-item-text bg-red">1</div>
		</GridItem>
		<GridItem>
			<div class="example-grid-item-text bg-yellow">2</div>
		</GridItem>
		<GridItem>
			<div class="example-grid-item-text bg-green">3</div>
		</GridItem>
		<GridItem>
			<div class="example-grid-item-text bg-blue">4</div>
		</GridItem>
	</Grid>
</Story>

<Story name="Reverse" let:args>
	<Grid reverse {...args}>
		<GridItem>
			<div class="example-grid-item-text bg-red">1</div>
		</GridItem>
		<GridItem>
			<div class="example-grid-item-text bg-green">2</div>
		</GridItem>
		<GridItem>
			<div class="example-grid-item-text bg-blue">3</div>
		</GridItem>
	</Grid>
</Story>

<Story name="Vertical" let:args>
	<Grid vertical {...args}>
		<GridItem>
			<div class="example-grid-item-text bg-red">1</div>
		</GridItem>
		<GridItem>
			<div class="example-grid-item-text bg-green">2</div>
		</GridItem>
		<GridItem>
			<div class="example-grid-item-text bg-blue">3</div>
		</GridItem>
	</Grid>
</Story>

<Story name="Gutter" let:args>
	<div class="example-grid">
		{#each GRID_GUTTERS as gutter}
			<Divider>Gutter {gutter}</Divider>
			<Grid {gutter} {...args}>
				{#each Array.from({ length: 36 }) as _, index}
					<GridItem>
						<div class="example-grid-item-text bg-red">{index + 1}</div>
					</GridItem>
				{/each}
			</Grid>
		{/each}
	</div>

	<div class="example-grid">
		{#each GRID_GUTTERS as gutterX}
			<Divider>Gutter X {gutterX}</Divider>
			<Grid {gutterX} {...args}>
				{#each Array.from({ length: 36 }) as _, index}
					<GridItem>
						<div class="example-grid-item-text bg-red">{index + 1}</div>
					</GridItem>
				{/each}
			</Grid>
		{/each}
	</div>

	<div class="example-grid">
		{#each GRID_GUTTERS as gutterY}
			<Divider>Gutter Y {gutterY}</Divider>
			<Grid {gutterY} {...args}>
				{#each Array.from({ length: 36 }) as _, index}
					<GridItem>
						<div class="example-grid-item-text bg-red">{index + 1}</div>
					</GridItem>
				{/each}
			</Grid>
		{/each}
	</div>
</Story>
