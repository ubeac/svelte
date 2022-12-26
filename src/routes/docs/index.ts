export const base_path: string = '/docs/'
export const base_component_path: string = base_path + 'components/'
export const base_core_path: string = base_path + 'core/'
export const base_common_path: string = base_path + 'common/'
export const base_form_path: string = base_path + 'form/'

export const navigations = [
	{ title: 'Introduction', route: base_path },
	{
		title: 'Getting Started',
		id: 'menu-base',
		children: [
			{
				route: base_path + 'getting-started/installation',
				title: 'Installation',
				icon: 'star',
			},
		],
	},
	{
		title: 'Core Features',
		id: 'core-features',
		children: [
			{
				route: base_core_path + 'contents/typography',
				title: 'Typography',
				icon: 'star',
			},
			{
				route: base_core_path + 'contents/colors',
				title: 'Colors',
				icon: 'star',
			},
			{
				route: base_core_path + 'contents/spacing',
				title: 'Spacing',
				icon: 'star',
			},
			{
				route: base_core_path + 'contents/icons',
				title: 'Icons',
				icon: 'star',
			},
			{
				route: base_core_path + 'contents/grid',
				title: 'Grid',
				icon: 'star',
			},
			{
				route: base_core_path + 'contents/columns',
				title: 'Columns',
				icon: 'star',
			},
		],
	},
	{
		title: 'Components',
		id: 'menu-components',
		children: [
			{
				route: base_component_path + 'accordion',
				title: 'Accordion',
				icon: 'star',
			},
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
				route: base_component_path + 'breadcrumb',
				title: 'Bredcrumb',
				icon: 'star',
			},
			{
				route: base_component_path + 'buttons',
				title: 'Button',
				icon: 'star',
			},
			{
				route: base_component_path + 'button-group',
				title: 'ButtonGroup',
				icon: 'star',
			},
			{
				route: base_component_path + 'cards',
				title: 'Card',
				icon: 'star',
			},
			{
				route: base_component_path + 'carousel',
				title: 'Carousel',
				icon: 'star',
			},
			{
				route: base_component_path + 'checkboxes',
				title: 'Checkbox',
				icon: 'star',
			},
			{
				route: base_component_path + 'checkbox-groups',
				title: 'CheckboxGroup',
				icon: 'star',
			},
			{
				route: base_component_path + 'datepickers',
				title: 'Datepicker',
				icon: 'star',
			},
			{
				route: base_component_path + 'dialog',
				title: 'Dialog',
				icon: 'star',
			},
			{
				route: base_component_path + 'dividers',
				title: 'Divider',
				icon: 'star',
			},
			{
				route: base_component_path + 'dots',
				title: 'Dot',
				icon: 'star',
			},
			{
				route: base_component_path + 'fieldsets',
				title: 'Fieldset',
				icon: 'star',
			},
			{
				route: base_component_path + 'file-uploader',
				title: 'FileUploader',
				icon: 'star',
			},
			{
				route: base_component_path + 'footers',
				title: 'Footer',
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
				route: base_component_path + 'input-groups',
				title: 'Input group',
				icon: 'star',
			},
			{
				route: base_component_path + 'label',
				title: 'Label',
				icon: 'star',
			},
			{
				route: base_component_path + 'menu',
				title: 'Menu',
				icon: 'star',
			},
			{
				route: base_component_path + 'offcanvases',
				title: 'Offcanvas',
				icon: 'star',
			},
			{
				route: base_component_path + 'page',
				title: 'Page',
				icon: 'star',
			},
			{
				route: base_component_path + 'popover',
				title: 'Popover',
				icon: 'star',
			},
			{
				route: base_component_path + 'progress',
				title: 'Progress',
				icon: 'star',
			},
			{
				route: base_component_path + 'radios',
				title: 'Radio',
				icon: 'star',
			},
			{
				route: base_component_path + 'radio-groups',
				title: 'RadioGroup',
				icon: 'star',
			},
			{
				route: base_component_path + 'range-sliders',
				title: 'RangeSlider',
				icon: 'star',
			},
			{
				route: base_component_path + 'ribbon',
				title: 'Ribbon',
				icon: 'star',
			},
			{
				route: base_component_path + 'selects',
				title: 'Select',
				icon: 'star',
			},
			{
				route: base_component_path + 'stamp',
				title: 'Stamp',
				icon: 'star',
			},
			{
				route: base_component_path + 'spinners',
				title: 'Spinner',
				icon: 'star',
			},
			{
				route: base_component_path + 'statuses',
				title: 'Status',
				icon: 'star',
			},
			{
				route: base_component_path + 'switch',
				title: 'Switch',
				icon: 'star',
			},
			{
				route: base_component_path + 'tables',
				title: 'Tables',
				icon: 'star',
			},
			{
				route: base_component_path + 'textareas',
				title: 'Textarea',
				icon: 'star',
			},
			{
				route: base_component_path + 'toast',
				title: 'Toast',
				icon: 'star',
			},
			{
				route: base_component_path + 'tooltip',
				title: 'Tooltip',
				icon: 'star',
			},
		],
	},
	{
		title: 'Common',
		id: 'menu-common',
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
		title: 'Form Components',
		id: 'menu-forms',
		children: [
			{
				route: base_form_path + 'form-autocomplete',
				title: 'Form Autocomplete',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-checkboxes',
				title: 'FormCheckbox',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-checkbox-groups',
				title: 'FormCheckboxGroup',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-datepicker',
				title: 'FormDatePicker',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-fieldsets',
				title: 'FormFieldset',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-input',
				title: 'FormInput',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-radio-groups',
				title: 'FormRadioGroup',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-range-slider',
				title: 'FormRangeSlider',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-select',
				title: 'FormSelect',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-switch',
				title: 'FormSwitch',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-textareas',
				title: 'FormTextarea',
				icon: 'star',
			},
		],
	},
	{
		title: 'Pages',
		id: 'menu-pages',
		children: [
			{
				route: base_path + '', // removed '/docs/components/login' to prevent error in prerender step
				title: '(TODO) Login',
				icon: 'package',
			},
		],
	},
]
