export * from './components'
/// <reference types="@sveltejs/kit" />

declare global {
	namespace svelte.JSX {
		interface HTMLProps<T> {
			if?: boolean
		}
	}
}
