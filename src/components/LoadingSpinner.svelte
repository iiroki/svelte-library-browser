<script lang='ts'>
  import { Spinner } from 'flowbite-svelte'

  export let size = '12'
</script>

<div class='text-center' style='max-width: 100%'>
  <Spinner {size} />
</div>
