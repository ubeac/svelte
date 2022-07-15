<script lang="ts">
    import {Button, GoogleMap} from '$lib/components'
    import type { Coordinate } from '$lib/types';


    let value: Coordinate;
</script>

<Button>Some Button</Button>
<pre>{JSON.stringify(value, null, 2)}
</pre>
<GoogleMap bind:value/>
