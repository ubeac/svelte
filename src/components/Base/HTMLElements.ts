import { DefaultProps } from './El.props'
import { ElBuilder } from './ElBuilder'

const H1 = ElBuilder<keyof HTMLElementTagNameMap>({
	props: {
		...DefaultProps,
		tag: 'h1'
	}
})

const H2 = ElBuilder<keyof HTMLElementTagNameMap>({
	props: {
		...DefaultProps,
		tag: 'h2'
	}
})

const H3 = ElBuilder<keyof HTMLElementTagNameMap>({
	props: {
		...DefaultProps,
		tag: 'h3'
	}
})

const H4 = ElBuilder<keyof HTMLElementTagNameMap>({
	props: {
		...DefaultProps,
		tag: 'h4'
	}
})

const H5 = ElBuilder<keyof HTMLElementTagNameMap>({
	props: {
		...DefaultProps,
		tag: 'h5'
	}
})

const H6 = ElBuilder<keyof HTMLElementTagNameMap>({
	props: {
		...DefaultProps,
		tag: 'h6'
	}
})

export { H1, H2, H3, H4, H5, H6 }
