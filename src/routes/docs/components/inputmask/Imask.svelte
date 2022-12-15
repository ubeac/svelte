<script>
	import { imask } from '@imask/svelte'

	const options = {
		mask: '{8}000000',
		lazy: false,
	}

	let value = ''
	let dateValue = ''
	let phoneValue = ''

	const date = {
		mask: 'DD-MMM-YYYY',
		lazy: false,
		blocks: {
			YYYY: {
				mask: '0000',
			},
			MMM: {
				mask: IMask.MaskedEnum,
				enum: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				lazy: false,
			},
			DD: {
				mask: IMask.MaskedRange,
				from: 1,
				to: 31,
				autofix: 'pad',
				lazy: false,
			},
		},
	}

	const phone = {
		mask: '{(}000{)}{-}000{-}0000',
		lazy: false,
	}

	function accept({ detail: maskRef }) {
		console.log('accept1', maskRef.value)
		console.log('accept2', maskRef.unmaskedValue)
		//value = maskRef.value
	}

	function complete({ detail: maskRef }) {
		console.log('complete', maskRef.unmaskedValue)
	}
</script>

<input {value} use:imask={options} on:accept={accept} on:complete={complete} />

<input {dateValue} use:imask={date} on:accept={accept} on:complete={complete} />

<input {phoneValue} use:imask={phone} on:accept={accept} on:complete={complete} />
