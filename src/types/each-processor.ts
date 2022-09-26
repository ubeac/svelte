export {}

declare global {
	namespace svelte.JSX {
		interface HTMLProps<T> {
			'let:item'?: any
			'let:index'?: any
			'each'?: Array<any>
		}
	}
}
