<script>
	import { Input } from '@ubeac/svelte'
	const dateMaskParams = {
		inputFormat: 'dd/mm/yyyy',
		showMaskOnHover: false,
		clearMaskOnLostFocus: false,
		oncomplete: function (e) {
			console.log(e.target.value)
		},
	}
	const maskOptions = {
		clearMaskOnLostFocus: false,
		showMaskOnHover: false,
	}
</script>

<Input mask="9999 9999 9999 9999" {maskOptions} />
<Input mask="(999)-999-9999" {maskOptions} />
<Input mask="A9A-9A9" {maskOptions} />
<Input mask="datetime" maskOptions={dateMaskParams} />
