export const base_path: string = '/docs/'
export const base_component_path: string = base_path + 'components/'
export const base_common_path: string = base_path + 'common/'
export const base_form_path: string = base_path + 'form/'

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
				route: base_component_path + 'checkbox',
				title: 'Checkbox',
				icon: 'star',
			},
			{
				route: base_component_path + 'checkbox-group',
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
				route: base_component_path + 'file-uploader',
				title: 'FileUploader',
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
				route: base_component_path + 'label',
				title: 'Label',
				icon: 'star',
			},
			{
				route: base_component_path + 'page',
				title: 'Page',
				icon: 'star',
			},
			{
				route: base_component_path + 'radio',
				title: 'Radio',
				icon: 'star',
			},
			{
				route: base_component_path + 'radio-group',
				title: 'RadioGroup',
				icon: 'star',
			},
			{
				route: base_component_path + 'select',
				title: 'Select',
				icon: 'star',
			},
			{
				route: base_component_path + 'status',
				title: 'Status',
				icon: 'star',
			},
			{
				route: base_component_path + 'switch',
				title: 'Switch',
				icon: 'star',
			},
			{
				route: base_component_path + 'textarea',
				title: 'Textarea',
				icon: 'star',
			},
			{
				route: base_component_path + 'tables',
				title: 'Tables',
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
		title: 'Form',
		children: [
			{
				route: base_form_path + 'form-autocomplete',
				title: 'Form Autocomplete',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-checkbox',
				title: 'FormCheckbox',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-checkbox-group',
				title: 'FormCheckboxGroup',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-datepicker',
				title: 'FormDatePicker',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-input',
				title: 'Form Input',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-radio',
				title: 'FormRadio',
				icon: 'star',
			},
			{
				route: base_form_path + 'form-radio-group',
				title: 'FormRadioGroup',
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
				route: base_form_path + 'form-textarea',
				title: 'FormTextarea',
				icon: 'star',
			},
		],
	},
	{
		title: 'Icons',
		children: [
			{
				route: base_path + 'icons',
				title: 'Icons',
				icon: 'icons',
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
