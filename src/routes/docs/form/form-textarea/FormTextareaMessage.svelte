<script>
	import { FormHint, FormTextarea } from '@ubeac/svelte'
</script>

<FormTextarea label="Bio:">
	<FormHint slot="message">Write 100 lines about yourself.</FormHint>
</FormTextarea>

<FormTextarea label="invalid:" value="only three words">
	<FormHint state="invalid" slot="message">this is not enough, please write more.</FormHint>
</FormTextarea>

<FormTextarea
	label="valid:"
	value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus illum ad doloribus fugiat incidunt esse quo fugit architecto itaque! Voluptatem ducimus beatae maiores veritatis laborum libero pariatur quasi voluptates blanditiis?">
	<FormHint state="valid" slot="message">Thanks! This is enough.</FormHint>
</FormTextarea>
