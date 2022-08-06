<script lang="ts">
	import AppTest from '$lib/components/app/App.Test.svelte'
	import FormCheckboxGroup from '$lib/components/form/FormCheckboxGroup.svelte'
</script>

<!-- <AppTest /> -->
<FormCheckboxGroup on:click={console.log} on:change={console.log} />
