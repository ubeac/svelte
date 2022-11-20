const ssr = (Component: any, options: any) => {
	const { render, $$render } = Component

	return {
		render(props: any, stuff: any) {
			const customProps = Object.assign(options, props)
			return render(customProps, stuff)
		},
		$$render(result: any, props: any, bindings: any, slots: any, context: any) {
			const customProps = Object.assign(options, props)
			return $$render(result, customProps, bindings, slots, context)
		},
	}
}

const dom = (Component: any, options: any) => {
	class Custom extends Component {
		constructor(_options = {}) {
			super({
				..._options,
				props: Object.assign(options, _options.props),
			})
		}
	}

	return Custom
}

export default function createComponent(Component: any, options = {}) {
	if (typeof Component === 'function') {
		return dom(Component, options)
	} else {
		return ssr(Component, options)
	}
}
