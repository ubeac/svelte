<script lang="ts">

  import { El } from "../Base"
  import type { PopupArrowProps } from "./Popup.types"

  type $$Props = PopupArrowProps;

  export let tag: $$Props['tag'] = 'div'
  export let cssPrefix: $$Props['cssPrefix'] = 'popover-arrow';

  $: cssProps = {
    // 
  }

</script>

<El {...$$restProps} {tag} {cssPrefix} {cssProps} data-popper-arrow />
	