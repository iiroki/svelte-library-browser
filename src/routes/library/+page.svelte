<script lang="ts">
  import { fetchLibraries } from '../../api'
  let data = fetchLibraries()
</script>

{#await data}
  <p>Loading...</p>
{:then libraries} 
  <p>Total: {libraries.total}</p>
  <ul>
   {#each libraries.items as l}
    <li><a href="/library/{l.id}">{l.name}</a></li>
   {/each} 
  </ul>
{/await}
