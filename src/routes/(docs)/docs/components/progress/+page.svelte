<script>
	import { Doc, Preview } from '$lib/docs-components'
	import ProgressDefault from './ProgressDefault.svelte'
	import ProgressIndeterminate from './ProgressIndeterminate.svelte'
	import ProgressColors from './ProgressColors.svelte'
	import ProgressSizes from './ProgressSizes.svelte'
	import ProgressStriped from './ProgressStriped.svelte'
	import ProgressStripedAnimated from './ProgressStripedAnimated.svelte'
	import ProgressLabel from './ProgressLabel.svelte'
</script>

<h1>Progress bar</h1>
<p>
	Progress bars are used to provide feedback on an action status and inform users of the current progress. Although
	seemingly small interface elements, they are extremely hepful in managing users' expectations and preventing them from
	abandoning a process they have initiated.
</p>

<Doc title="Default">
	<!--  -->
</Doc>
<Preview src="./ProgressDefault.svelte">
	<div class="custom-class"><ProgressDefault /></div>
</Preview>

<Doc title="Colors">Customize the color of the progress bar to suit your design.</Doc>

<Preview src="./ProgressColors.svelte">
	<div class="custom-class"><ProgressColors /></div>
</Preview>

<Doc title="Sizes">Customize the size of the progress bar.</Doc>
<Preview src="./ProgressSizes.svelte">
	<div class="custom-class"><ProgressSizes /></div>
</Preview>

<Doc title="Indeterminate">
	You can create a progress bar which shows indeterminate progress by adding <code>indeterminate</code> to the progress component.
</Doc>
<Preview src="./ProgressIndeterminate.svelte">
	<div class="custom-class"><ProgressIndeterminate /></div>
</Preview>

<Doc title="Striped progress">Set striped property to show striped background</Doc>
<Preview src="./ProgressStriped.svelte">
	<div class="custom-class"><ProgressStriped /></div>
</Preview>

<Doc title="Animated striped">The striped gradient can also be animated.</Doc>
<Preview src="./ProgressStripedAnimated.svelte">
	<div class="custom-class"><ProgressStripedAnimated /></div>
</Preview>

<Doc title="Labels">Add labels to your progress bars by setting label property.</Doc>
<Preview src="./ProgressLabel.svelte">
	<div class="custom-class"><ProgressLabel /></div>
</Preview>

<style>
	.custom-class > :global(.u-progress) {
		margin: 0.25rem 0;
	}
</style>
