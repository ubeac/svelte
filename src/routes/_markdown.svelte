<script>
  import { Head } from 'svead'
  export let title = ""
  export let description = ""
</script>

<Head {title} {description} />

<div class="prose">
  <slot />
</div>