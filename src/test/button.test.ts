import { fireEvent, render } from '@testing-library/svelte'

import { Button } from '../components/button'

describe('Button', () => {
	test('default', async () => {
		let btn = await render(Button, { props: {} })
		expect(btn.container.getElementsByClassName('u-button').length).toBe(1)
	})

	test('disabled', async () => {
		let btn = await render(Button, { props: { disabled: true } })
		expect(btn.container.getElementsByClassName('u-button u-button-disabled').length).toBe(1)
	})

	test('outline', async () => {
		let btn = await render(Button, { props: { outline: true } })
		expect(btn.container.getElementsByClassName('u-button u-button-outline').length).toBe(1)
	})

	test('active', async () => {
		let btn = await render(Button, { props: { active: true } })
		expect(btn.container.getElementsByClassName('u-button u-button-active').length).toBe(1)
	})

	test('active', async () => {
		let btn = await render(Button, { props: { active: true } })
		expect(btn.container.getElementsByClassName('u-button u-button-active').length).toBe(1)
	})

	test('ghost', async () => {
		let btn = await render(Button, { props: { ghost: true } })
		expect(btn.container.getElementsByClassName('u-button u-button-ghost').length).toBe(1)
	})

	test('shape', async () => {
		let btn = await render(Button, { props: { shape: 'default' } })
		expect(btn.container.getElementsByClassName('u-button u-button-shape-default').length).toBe(1)
		btn.rerender({ props: { shape: 'circle' } })
		expect(btn.container.getElementsByClassName('u-button u-button-shape-circle').length).toBe(1)
		btn.rerender({ props: { shape: 'tile' } })
		expect(btn.container.getElementsByClassName('u-button u-button-shape-tile').length).toBe(1)
	})

	test('size', async () => {
		let btn = await render(Button, { props: { size: 'sm' } })
		expect(btn.container.getElementsByClassName('u-button u-button-size-sm').length).toBe(1)
		btn.rerender({ props: { size: 'md' } })
		expect(btn.container.getElementsByClassName('u-button u-button-size-md').length).toBe(1)
		btn.rerender({ props: { size: 'lg' } })
		expect(btn.container.getElementsByClassName('u-button u-button-size-lg').length).toBe(1)
	})

	test('icon', async () => {
		let btn = await render(Button, { props: { icon: true } })
		expect(btn.container.getElementsByClassName('u-button u-button-icon').length).toBe(1)
	})

	test('loading', async () => {
		let btn = await render(Button, { props: { loading: true } })
		expect(btn.container.getElementsByClassName('u-button u-button-loading').length).toBe(1)
	})

	test('block', async () => {
		let btn = await render(Button, { props: { block: true } })
		expect(btn.container.getElementsByClassName('u-button u-button-block').length).toBe(1)
	})
})
