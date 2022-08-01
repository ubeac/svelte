import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
	theme: create({
		brandTitle: `
            <img style="width: 38px; vertical-align: middle;" src="/logo.png"/> UBEAC
        `,
	}),
})
