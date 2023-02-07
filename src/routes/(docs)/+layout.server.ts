import { navigations } from './docs'

let siteTitle = 'uBeac Svelte'
let routeMap: any = {}
navigations.forEach((item) => {
	if (item.route) {
		routeMap[item.route] = item
	} else {
		item.children.forEach((child) => {
			if (child.route) {
				routeMap[child.route] = child
			}
		})
	}
})

export function load(params) {
	let route = params.url.pathname
	let currentRout: any
	Object.keys(routeMap).forEach((k) => {
		if (route === k || route + '/' === k) {
			currentRout = routeMap[k]
		}
	})
	return {
		metaData: {
			title: currentRout?.title ? siteTitle + ' | ' + currentRout?.title : siteTitle,
			description: currentRout?.description,
		},
	}
}
