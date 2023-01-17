export const base_path: string = '/docs/'
export const base_component_path: string = base_path + 'components/'
export const base_core_path: string = base_path + 'core/'
export const base_form_path: string = base_path + 'form/'

export const site_base_url: string = 'https://svelte.ubeac.io'

export const navigations = [
	{
		title: 'Getting Started',
		id: 'menu-base',
		children: [
			{
				title: 'Introduction',
				route: base_path,
				description:
					'uBeac is a powerful and flexible Svelte UI component library, designed to help developers build enterprise-grade web applications quickly and easily. With a focus on rapid application development and framework independence, uBeac is the perfect complement to any CSS framework.',
			},
			{
				route: base_path + 'getting-started/installation',
				title: 'Installation',
				icon: 'material-symbols:install-desktop',
				description:
					'To use ubeac components in your svelte based projects you need to install @ubeac/svelte npm package.npm install @ubeac/svelte. To use uBeac components in sveltekit based projects you need to import CSS styles in your root +layout.svelte file.',
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
				description:
					'El component can be used to create headings. Headings are used to create a hierarchy of information on a page. They are used to create a visual hierarchy of information on a page.',
			},
			{
				route: base_core_path + 'contents/colors',
				title: 'Colors',
				icon: 'ic:outline-color-lens',
				description:
					'Colors are used to add meaning to a user interface, help distinguish content, and establish hierarchy. They can also be used to create visual excitement and draw attention to parts of your layout.',
			},
			{
				route: base_core_path + 'contents/spacing',
				title: 'Spacing',
				icon: 'radix-icons:column-spacing',
				description:
					'Margins are used to create space around elements, outside of any defined borders. Paddings are used to create space around the content of an element, inside of any defined borders.',
			},
			{
				route: base_core_path + 'contents/borders',
				title: 'Borders',
				icon: 'material-symbols:border-style',
				description:
					'Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.',
			},
			{
				route: base_core_path + 'contents/grid',
				title: 'Grid',
				icon: 'mdi:view-grid',
				description:
					'Learn how to use the grid layout system to create responsive, flexible grid-based layouts. Detailed documentation and examples provided on this page.',
			},
			{
				route: base_core_path + 'contents/columns',
				title: 'Columns',
				icon: 'material-symbols:view-column',
				description:
					'Learn how to use columns to organize and structure your layout. Detailed documentation and examples provided on this page to help you create responsive and customizable columns in your projects.',
			},
			{
				route: base_core_path + 'contents/backgrounds',
				title: 'Background',
				icon: 'fluent:color-background-24-regular',
				description:
					'Enhance the visual appeal of your projects with the help of the background customization options. This page provides detailed documentation and examples to guide you.',
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
				description:
					'Easily build interactive and user-friendly accordion using Accordion component. This page offers detailed documentation and examples to help you create a professional looking accordion component.',
			},
			{
				route: base_component_path + 'alert',
				title: 'Alert',
				icon: 'material-symbols:info-outline',
				description:
					'Alert messages are used to inform users of the status of their action and help them solve any problems that might have occurred. Good design of alert modals is very important for the overall user experience of a website or app.',
			},
			{
				route: base_component_path + 'autocompletes',
				title: 'Autocomplete',
				icon: 'bi:menu-button-fill',
				description:
					'Autocomplete is a component that allows you to search and select a value from a list of options. It is a combination of a text input and a dropdown menu.',
			},
			{
				route: base_component_path + 'avatars',
				title: 'Avatar',
				icon: 'mdi:account-circle-outline',
				description:
					'Avatars help customise various elements of a user interface and make the product experience more personalised. They are often used in communication apps, collaboration tools and social media.',
			},
			{
				route: base_component_path + 'badges',
				title: 'Badge',
				icon: 'mdi:square-rounded-badge-outline',
				description:
					"Badges are small count and labeling components, which are used to add extra information to an interface element. You can use them to draw users' attention to a new element, notify about unread messages or provide any kind of additional info.",
			},
			{
				route: base_component_path + 'breadcrumb',
				title: 'Bredcrumb',
				icon: 'fluent-mdl2:breadcrumb',
				description:
					'Breadcrumbs are used to show the current website or app location and reduce the number of actions users have to take. Thanks to breadcrumbs, they can easily navigate within the website hierarchy and better understand its structure.',
			},
			{
				route: base_component_path + 'buttons',
				title: 'Button',
				icon: 'mdi:button-cursor',
				description:
					'Buttons are the most important UI Element in each page, @ubeac/svelte buttons are beautiful and fully customizable. Cards contain various smaller components, such as images, text, links and buttons and may act as an entry to more detailed information, helping users scan the page quickly and find the most relevant content.',
			},
			{
				route: base_component_path + 'button-group',
				title: 'ButtonGroup',
				icon: 'material-symbols:smart-button',
				description: '',
			},
			{
				route: base_component_path + 'cards',
				title: 'Card',
				icon: 'mdi:card-outline',
				description:
					'Cards are flexible user interface elements, which help organize content into meaningful sections and make it easier to display on different screen sizes.',
			},
			{
				route: base_component_path + 'carousel',
				title: 'Carousel',
				icon: 'bx:carousel',
				description:
					'A carousel is used to display multiple pieces of visual content without taking up too much space. Carousels eliminate the need to scroll down the page to see all content and are a popular method of displaying marketing information.',
			},
			{
				route: base_component_path + 'checkboxes',
				title: 'Checkbox',
				icon: 'mdi:checkbox-outline',
				description:
					'Use Checkbox if you want to allow users to select more than one option from a set of predefined options or to turn an option on or off.',
			},
			{
				route: base_component_path + 'checkbox-groups',
				title: 'CheckboxGroup',
				icon: 'mdi:checkbox-multiple-outline',
				description:
					'CheckboxGroup is a wrapper for Checkbox component, it can be used to group multiple checkboxes in one component.',
			},
			{
				route: base_component_path + 'datepickers',
				title: 'Datepicker',
				icon: 'material-symbols:date-range-outline',
				description:
					'Date Picker is a fully featured date selection component that lets users select a date. To use Date Picker, import DatePicker component and bind value to a variable.',
			},
			{
				route: base_component_path + 'dialog',
				title: 'Dialog',
				icon: 'vaadin:modal-list',
				description:
					'Easily build interactive and user-friendly dialog box using Dialog component. This page offers detailed documentation and examples to help you create a professional looking components using dialog component.',
			},
			{
				route: base_component_path + 'dividers',
				title: 'Divider',
				icon: 'radix-icons:divider-horizontal',
				description:
					'Dividers help organize content and make the interface layout clear and uncluttered. Greater clarity adds up to better user experience and enhanced interaction with a website or app.',
			},
			{
				route: base_component_path + 'dots',
				title: 'Dot',
				icon: 'bi:dot',
				description: 'Dots are particularly useful if you want to make an interface element more noticeable.',
			},
			{
				route: base_component_path + 'fieldsets',
				title: 'Fieldset',
				icon: 'fluent-mdl2:field-empty',
				description:
					'Group parts of your form to make it well-structured and clearer for users, using the fieldset element.',
			},
			{
				route: base_component_path + 'file-uploaders',
				title: 'FileUploader',
				icon: 'material-symbols:upload-file',
				description:
					'FileUploader is a component that allows you to upload files. This page shows you the details about this component.',
			},
			{
				route: base_component_path + 'footers',
				title: 'Footer',
				icon: 'mdi:page-layout-footer',
				description:
					'Finish every page strong with an awesome footer, big or small. In this page it is described how to use the footer component.',
			},
			{
				route: base_core_path + 'contents/icons',
				title: 'Icon',
				icon: 'tabler:star',
				description:
					'Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful. See the icons documentation from tabler-icons.',
			},
			{
				route: base_component_path + 'inputs',
				title: 'Input',
				icon: 'iconoir:input-field',
				description:
					'Input components are used for collecting user provided information. They can be used for text, numbers, passwords, emails, and more.',
			},
			{
				route: base_component_path + 'input-groups',
				title: 'Input group',
				icon: 'fluent:group-list-24-regular',
				description:
					'Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.',
			},
			{
				route: base_component_path + 'label',
				title: 'Label',
				icon: 'pepicons:label',
				description:
					'Label component is used to set a name or some identifier for Form Elements. More details about this component is described in this page.',
			},
			{
				route: base_component_path + 'menu',
				title: 'Menu',
				icon: 'bi:menu-button-wide',
				description: '',
			},
			{
				route: base_component_path + 'offcanvases',
				title: 'Offcanvas',
				icon: 'mdi:page-layout-sidebar-right',
				description:
					'Build hidden sidebars into your project for navigation, shopping carts, and more using Offcanvas.',
			},
			{
				route: base_component_path + 'popover',
				title: 'Popover',
				icon: 'mdi:tooltip-image',
				description:
					'Popovers are used to provide additional information on elements where a simple tooltip is not sufficient.',
			},
			{
				route: base_component_path + 'progress',
				title: 'Progress',
				icon: 'vaadin:progressbar',
				description:
					"Progress bars are used to provide feedback on an action status and inform users of the current progress. Although seemingly small interface elements, they are extremely hepful in managing users' expectations and preventing them from abandoning a process they have initiated.",
			},
			{
				route: base_component_path + 'radios',
				title: 'Radio',
				icon: 'mdi:radiobox-marked',
				description: 'Create consistent cross-browser and cross-device radios with Radio component.',
			},
			{
				route: base_component_path + 'radio-groups',
				title: 'RadioGroup',
				icon: 'bi:ui-radios',
				description:
					'RadioGroup is a wrapper for Radio component, it can be used to group multiple radios in one component.',
			},
			{
				route: base_component_path + 'ribbon',
				title: 'Ribbon',
				icon: 'akar-icons:ribbon',
				description:
					'Ribbons are used to express something special on a card. In this page all the details about Ribbon component is described.',
			},
			{
				route: base_component_path + 'selects',
				title: 'Select',
				icon: 'vaadin:select',
				description:
					'Select component is used to let users choose from a predefined set of options. It can be single select or multi select.',
			},
			{
				route: base_component_path + 'stamp',
				title: 'Stamp',
				icon: 'mdi:stamper',
				description: 'Use stamp component to make the card view more attractive and eye catching.',
			},
			{
				route: base_component_path + 'spinners',
				title: 'Spinner',
				icon: 'ei:spinner-3',
				description: 'Indicate the loading state of a component or page with spinners.',
			},
			{
				route: base_component_path + 'statuses',
				title: 'Status',
				icon: 'bi:dot',
				description:
					'Status dots are particularly useful if you want to make an interface element more noticeable regardless of limited space.',
			},
			{
				route: base_component_path + 'switches',
				title: 'Switch',
				icon: 'mdi:toggle-switch-outline',
				description:
					'The Switch component provides users the ability to choose between two distinct values. These are very similar to a toggle, or on/off switch, though aesthetically different than a Switch.',
			},
			{
				route: base_component_path + 'tabs',
				title: 'Tabs',
				icon: 'material-symbols:tab-outline',
				description:
					'Tabs are used to split content between multiple sections. They are useful when you have too much content to fit on a single page.',
			},
			{
				route: base_component_path + 'tables',
				title: 'Tables',
				icon: 'mdi:table',
				description:
					'Tables are a useful interface element that allows to visualise data and arrange it in a clear way. Thanks to that, users can browse a lot of information at once and a good table design will help you take care of its clarity.',
			},
			{
				route: base_component_path + 'textareas',
				title: 'Textarea',
				icon: 'mdi:form-textarea',
				description: 'Textarea component is used for collecting user provided information (multi-line Input).',
			},
			{
				route: base_component_path + 'toast',
				title: 'Toast',
				icon: 'mdi:alert-circle-outline',
				description:
					'Toasts are lightweight alert boxes which display for a few seconds after a user has taken an action, to inform them of the state or outcome. They can be used when a user clicks a button or submits a form and their aim is to provide feedback, rather than encourage to take action.',
			},
			{
				route: base_component_path + 'tooltip',
				title: 'Tooltip',
				icon: 'mdi:tooltip-text',
				description:
					'Tooltips are text labels which appear when a user hovers over an interface element. They explain the interface elements that may be unclear for users and guide them when they need help. If used properly, tooltips can significantly enhance user experience and add value to your website or software.',
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
				description:
					'FormAutocomplete supports all props and events of Autocomplete and also have some additional features.',
			},
			{
				route: base_form_path + 'form-checkboxes',
				title: 'FormCheckbox',
				icon: 'mdi:checkbox-outline',
				description: 'FormCheckbox is similar to Checkbox with additional Form related features.',
			},
			{
				route: base_form_path + 'form-checkbox-groups',
				title: 'FormCheckboxGroup',
				icon: 'mdi:checkbox-multiple-outline',
				description:
					'FormCheckboxGroup is similar to CheckboxGroup component with decoration features inside the form.',
			},
			{
				route: base_form_path + 'form-datepicker',
				title: 'FormDatePicker',
				icon: 'material-symbols:date-range-outline',
				description:
					'FormDatePicker component supports all props and events of DatePicker and also have some additional features like label, hint, required, cols, etc. to make it easy to use in a form.',
			},
			{
				route: base_form_path + 'form-fieldsets',
				title: 'FormFieldset',
				icon: 'fluent-mdl2:field-empty',
				description:
					'Group parts of your form to make it well-structured and clearer for users, using the fieldset element.',
			},
			{
				route: base_form_path + 'form-file-uploaders',
				title: 'FormFileUploader',
				icon: 'material-symbols:upload-file',
				description:
					'FileUploader is a component that allows you to upload files. This page shows you the details about this component.',
			},
			{
				route: base_form_path + 'form-input',
				title: 'FormInput',
				icon: 'iconoir:input-field',
				description:
					'FormInput is an input and label wrapper component to be used insisde forms. It supports all props and events of Input and also have some additional features.',
			},
			{
				route: base_form_path + 'form-radio-groups',
				title: 'FormRadioGroup',
				icon: 'bi:ui-radios',
				description:
					'FormRadioGroup is a wrapper for RadioGroup component, it can be used to group multiple radios in one component and contains label and description.',
			},
			{
				route: base_form_path + 'form-select',
				title: 'FormSelect',
				icon: 'vaadin:select',
				description:
					'Add one of the available selects a dropdown select - to let users choose from a predefined set of options.',
			},
			{
				route: base_form_path + 'form-switches',
				title: 'FormSwitch',
				icon: 'mdi:toggle-switch-outline',
				description: 'FormSwitch is similar to Switch with additional Form related features.',
			},
			{
				route: base_form_path + 'form-textareas',
				title: 'FormTextarea',
				icon: 'mdi:form-textarea',
				description:
					"Set label property to show textarea label's and bind to its id automatically. required is a boolean property which show an indicator on label as well. You can also use label slot.",
			},
		],
	},
]
