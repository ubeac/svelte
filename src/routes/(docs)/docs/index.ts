export const base_path: string = '/docs/'
export const base_component_path: string = base_path + 'components/'
export const base_core_path: string = base_path + 'core/'
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
				icon: 'material-symbols:install-desktop',
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
				icon: 'tabler:typography',
			},
			{
				route: base_core_path + 'contents/colors',
				title: 'Colors',
				icon: 'ic:outline-color-lens',
			},
			{
				route: base_core_path + 'contents/spacing',
				title: 'Spacing',
				icon: 'radix-icons:column-spacing',
			},
			{
				route: base_core_path + 'contents/borders',
				title: 'Borders',
				icon: 'material-symbols:border-style',
			},
			{
				route: base_core_path + 'contents/icons',
				title: 'Icons',
				icon: 'tabler:star',
			},
			{
				route: base_core_path + 'contents/grid',
				title: 'Grid',
				icon: 'mdi:view-grid',
			},
			{
				route: base_core_path + 'contents/columns',
				title: 'Columns',
				icon: 'material-symbols:view-column',
			},
			{
				route: base_core_path + 'contents/backgrounds',
				title: 'Background',
				icon: 'fluent:color-background-24-regular',
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
				icon: 'vaadin:accordion-menu',
			},
			{
				route: base_component_path + 'alert',
				title: 'Alert',
				icon: 'material-symbols:info-outline',
			},
			{
				route: base_component_path + 'autocompletes',
				title: 'Autocomplete',
				icon: 'bi:menu-button-fill',
			},
			{
				route: base_component_path + 'avatars',
				title: 'Avatar',
				icon: 'mdi:account-circle-outline',
			},
			{
				route: base_component_path + 'badges',
				title: 'Badge',
				icon: 'mdi:square-rounded-badge-outline',
			},
			{
				route: base_component_path + 'breadcrumb',
				title: 'Bredcrumb',
				icon: 'fluent-mdl2:breadcrumb',
			},
			{
				route: base_component_path + 'buttons',
				title: 'Button',
				icon: 'mdi:button-cursor',
			},
			{
				route: base_component_path + 'button-group',
				title: 'ButtonGroup',
				icon: 'material-symbols:smart-button',
			},
			{
				route: base_component_path + 'cards',
				title: 'Card',
				icon: 'mdi:card-outline',
			},
			{
				route: base_component_path + 'carousel',
				title: 'Carousel',
				icon: 'bx:carousel',
			},
			{
				route: base_component_path + 'checkboxes',
				title: 'Checkbox',
				icon: 'mdi:checkbox-outline',
			},
			{
				route: base_component_path + 'checkbox-groups',
				title: 'CheckboxGroup',
				icon: 'mdi:checkbox-multiple-outline',
			},
			{
				route: base_component_path + 'datepickers',
				title: 'Datepicker',
				icon: 'material-symbols:date-range-outline',
			},
			{
				route: base_component_path + 'dialog',
				title: 'Dialog',
				icon: 'vaadin:modal-list',
			},
			{
				route: base_component_path + 'dividers',
				title: 'Divider',
				icon: 'radix-icons:divider-horizontal',
			},
			{
				route: base_component_path + 'dots',
				title: 'Dot',
				icon: 'bi:dot',
			},
			{
				route: base_component_path + 'fieldsets',
				title: 'Fieldset',
				icon: 'fluent-mdl2:field-empty',
			},
			{
				route: base_component_path + 'file-uploaders',
				title: 'FileUploader',
				icon: 'material-symbols:upload-file',
			},
			{
				route: base_component_path + 'footers',
				title: 'Footer',
				icon: 'mdi:page-layout-footer',
			},
			{
				route: base_component_path + 'inputs',
				title: 'Input',
				icon: 'iconoir:input-field',
			},
			{
				route: base_component_path + 'input-groups',
				title: 'Input group',
				icon: 'fluent:group-list-24-regular',
			},
			{
				route: base_component_path + 'label',
				title: 'Label',
				icon: 'pepicons:label',
			},
			{
				route: base_component_path + 'menu',
				title: 'Menu',
				icon: 'bi:menu-button-wide',
			},
			{
				route: base_component_path + 'offcanvases',
				title: 'Offcanvas',
				icon: 'mdi:page-layout-sidebar-right',
			},
			{
				route: base_component_path + 'popover',
				title: 'Popover',
				icon: 'mdi:tooltip-image',
			},
			{
				route: base_component_path + 'progress',
				title: 'Progress',
				icon: 'vaadin:progressbar',
			},
			{
				route: base_component_path + 'radios',
				title: 'Radio',
				icon: 'mdi:radiobox-marked',
			},
			{
				route: base_component_path + 'radio-groups',
				title: 'RadioGroup',
				icon: 'bi:ui-radios',
			},
			{
				route: base_component_path + 'ribbon',
				title: 'Ribbon',
				icon: 'akar-icons:ribbon',
			},
			{
				route: base_component_path + 'selects',
				title: 'Select',
				icon: 'vaadin:select',
			},
			{
				route: base_component_path + 'stamp',
				title: 'Stamp',
				icon: 'mdi:stamper',
			},
			{
				route: base_component_path + 'spinners',
				title: 'Spinner',
				icon: 'ei:spinner-3',
			},
			{
				route: base_component_path + 'statuses',
				title: 'Status',
				icon: 'bi:dot',
			},
			{
				route: base_component_path + 'switches',
				title: 'Switch',
				icon: 'mdi:toggle-switch-outline',
			},
			{
				route: base_component_path + 'tabs',
				title: 'Tabs',
				icon: 'material-symbols:tab-outline',
			},
			{
				route: base_component_path + 'tables',
				title: 'Tables',
				icon: 'mdi:table',
			},
			{
				route: base_component_path + 'textareas',
				title: 'Textarea',
				icon: 'mdi:form-textarea',
			},
			{
				route: base_component_path + 'toast',
				title: 'Toast',
				icon: 'mdi:alert-circle-outline',
			},
			{
				route: base_component_path + 'tooltip',
				title: 'Tooltip',
				icon: 'mdi:tooltip-text',
			},
		],
	},
	{
		title: 'Form Components',
		id: 'menu-forms',
		children: [
			{
				route: base_form_path + 'form-autocompletes',
				title: 'Form Autocomplete',
				icon: 'bi:menu-button-fill',
			},
			{
				route: base_form_path + 'form-checkboxes',
				title: 'FormCheckbox',
				icon: 'mdi:checkbox-outline',
			},
			{
				route: base_form_path + 'form-checkbox-groups',
				title: 'FormCheckboxGroup',
				icon: 'mdi:checkbox-multiple-outline',
			},
			{
				route: base_form_path + 'form-datepicker',
				title: 'FormDatePicker',
				icon: 'material-symbols:date-range-outline',
			},
			{
				route: base_form_path + 'form-fieldsets',
				title: 'FormFieldset',
				icon: 'fluent-mdl2:field-empty',
			},
			{
				route: base_form_path + 'form-file-uploader',
				title: 'FormFileUploader',
				icon: 'material-symbols:upload-file',
			},
			{
				route: base_form_path + 'form-input',
				title: 'FormInput',
				icon: 'iconoir:input-field',
			},
			{
				route: base_form_path + 'form-radio-groups',
				title: 'FormRadioGroup',
				icon: 'bi:ui-radios',
			},
			{
				route: base_form_path + 'form-select',
				title: 'FormSelect',
				icon: 'vaadin:select',
			},
			{
				route: base_form_path + 'form-switches',
				title: 'FormSwitch',
				icon: 'mdi:toggle-switch-outline',
			},
			{
				route: base_form_path + 'form-textareas',
				title: 'FormTextarea',
				icon: 'mdi:form-textarea',
			},
		],
	},
]
