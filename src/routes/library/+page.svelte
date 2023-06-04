<script lang='ts'>
  import {
    Table,
    TableBody,
    TableHead,
    TableBodyCell,
    TableHeadCell,
    TableBodyRow,
  } from 'flowbite-svelte'
  import LoadingSpinner from '../../components/LoadingSpinner.svelte';
  import { fetchLibraries } from '../../api/library'

  let libraryProm = fetchLibraries()
</script>

{#await libraryProm}
  <LoadingSpinner />
{:then libraries} 
  <Table hoverable>
    <caption class='text-xl font-bold'>Libraries</caption>
    <TableHead>
      <TableHeadCell>Name</TableHeadCell>
      <TableHeadCell>City</TableHeadCell>
      <TableHeadCell>Founded</TableHeadCell>
    </TableHead>
    <TableBody>
      {#each libraries.items as l}
      <TableBodyRow on:click={() => window.location.href = `/library/${l.id}`} style="cursor: pointer">
        <TableBodyCell>{l.name}</TableBodyCell>
        <TableBodyCell>{l.address.city + (l.address.area ? ` (${l.address.area})` : '')}</TableBodyCell>
        <TableBodyCell>{l.founded ?? '-'}</TableBodyCell>
      </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
{/await}
