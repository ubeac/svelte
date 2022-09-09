export {}

declare global {
	namespace svelte.JSX {
		interface HTMLProps<T> {
			if?: boolean
		}
	}
}
