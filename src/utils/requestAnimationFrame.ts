export const requestAnimationFrame = (callback: any) => {
	if (typeof window == 'undefined') return
	window.requestAnimationFrame(callback)
}
