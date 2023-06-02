<script lang="ts">
  import type { PageData } from "./$types"
  export let data: PageData
  $: { console.log('!!! PageData:', data) }
</script>

<img src={data.coverPhoto.huge.url} alt={data.name} style="max-width: 100%" />
<h1>{data.name}</h1>
