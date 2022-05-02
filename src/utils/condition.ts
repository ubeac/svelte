export const condition = (props: any): boolean => {
	return !Object.keys(props).includes('if') || props['if']
}
