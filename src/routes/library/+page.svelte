<script lang="ts">
  import {
    Table,
    TableBody,
    TableHead,
    TableBodyCell,
    TableHeadCell,
    TableBodyRow
  } from 'flowbite-svelte'
  import { fetchLibraries } from '../../api/library'

  let libraryProm = fetchLibraries()
</script>

{#await libraryProm}
  <p>Loading...</p>
{:then libraries} 
  <!-- <p>Total: {libraries.total}</p>
  <ul>
   {#each libraries.items as l}
    <li><a href="/library/{l.id}">{l.name}</a></li>
   {/each} 
  </ul> -->
  <Table striped>
    <caption class='text-xl font-bold'>Libraries</caption>
    <TableHead>
      <TableHeadCell>Name</TableHeadCell>
      <TableHeadCell>City</TableHeadCell>
      <TableHeadCell>Founded</TableHeadCell>
    </TableHead>
    <TableBody>
      {#each libraries.items as l}
        <TableBodyRow>
          <TableBodyCell>{l.name}</TableBodyCell>
          <TableBodyCell>{l.address.city}</TableBodyCell>
          <TableBodyCell>{l.founded ?? '-'}</TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
{/await}
