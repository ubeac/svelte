export const base_path: string = '/docs/'
export const base_component_path: string = base_path + 'components/'
export const base_common_path: string = base_path + 'common/'

export const navigations = [
	{
		title: 'Components',
		children: [
			{
				route: base_component_path + 'alert',
				title: 'Alert',
				icon: 'star',
			},
			{
				route: base_component_path + 'autocomplete',
				title: 'Autocomplete',
				icon: 'star',
			},
			{
				route: base_component_path + 'avatars',
				title: 'Avatar',
				icon: 'star',
			},
			{
				route: base_component_path + 'badges',
				title: 'Badge',
				icon: 'star',
			},
			{
				route: base_component_path + 'buttons',
				title: 'Button',
				icon: 'star',
			},
			{
				route: base_component_path + 'cards',
				title: 'Card',
				icon: 'star',
			},
			{
				route: base_component_path + 'checkbox',
				title: 'Checkbox',
				icon: 'star',
			},
			{
				route: base_component_path + 'datepickers',
				title: 'Datepicker',
				icon: 'star',
			},
			{
				route: base_component_path + 'form-autocomplete',
				title: 'Form Autocomplete',
				icon: 'star',
			},
			{
				route: base_component_path + 'form-datepicker',
				title: 'FormDatePicker',
				icon: 'star',
			},
			{
				route: base_component_path + 'form-input',
				title: 'Form Input',
				icon: 'star',
			},
			{
				route: base_component_path + 'form-textarea',
				title: 'FormTextarea',
				icon: 'star',
			},
			{
				route: base_component_path + 'grids',
				title: 'Grid',
				icon: 'star',
			},
			{
				route: base_component_path + 'inputs',
				title: 'Input',
				icon: 'star',
			},
			{
				route: base_component_path + 'page',
				title: 'Page',
				icon: 'star',
			},
			{
				route: base_component_path + 'textarea',
				title: 'Textarea',
				icon: 'star',
			},
		],
	},
	{
		title: 'Common',
		children: [
			{
				route: base_common_path + 'if',
				title: 'If',
				icon: 'package',
			},
			{
				route: base_common_path + 'preview',
				title: 'Preview',
				icon: 'package',
			},
		],
	},
	{
		title: 'Pages',
		children: [
			{
				route: base_path + '', // removed '/docs/components/login' to prevent error in prerender step
				title: '(TODO) Login',
				icon: 'package',
			},
		],
	},
]
