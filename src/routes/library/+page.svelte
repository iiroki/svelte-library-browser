<script lang='ts'>
  import {
    Table,
    TableBody,
    TableHead,
    TableBodyCell,
    TableHeadCell,
    TableBodyRow,
    Pagination,
    ChevronLeft,
    ChevronRight,
    Select,
    P,
  } from 'flowbite-svelte'
  import type { SelectOptionType } from 'flowbite-svelte/dist/types';
  import { page as location } from '$app/stores';
  import { goto } from '$app/navigation';
  import type { PageData } from './$types';
  import type { Library } from '../../api/library';

  export let data: PageData

  const PAGE_SIZES: SelectOptionType[] = [
    { value: 10, name: '10' },
    { value: 25, name: '25' },
    { value: 50, name: '50' },
    { value: 100, name: '100' }
  ]

  let pageSizeState = data.pageSize

  /** Appends area to the city if it's different from the city. */
  const formatCity = (library: Library): string => {
    let fullCity = library.address.city
    if (library.address.area && library.address.city !== library.address.area) {
      fullCity += ` (${library.address.area})`
    }

    return fullCity
  }

  const setQueryParam = async (param: 'page' | 'pageSize', value: number) => {
    const url = new URL($location.url)
    url.searchParams.set(param, value.toString())
    goto(url)
  }

  const handlePage = async (type: 'next' | 'prev') => setQueryParam('page', data.page + (type === 'next' ? 1 : -1))
  const handlePageSize = async () => setQueryParam('pageSize', pageSizeState)
</script>

<Table hoverable>
  <caption class='text-xl font-bold text-gray-600 dark:text-gray-400'>Libraries</caption>
  <TableHead>
    <TableHeadCell>Name</TableHeadCell>
    <TableHeadCell>City</TableHeadCell>
    <TableHeadCell>Founded</TableHeadCell>
  </TableHead>
  <TableBody>
    {#each data.libraries as l}
      <TableBodyRow on:click={() => window.location.href = `/library/${l.id}`} style="cursor: pointer">
        <TableBodyCell>{l.name}</TableBodyCell>
        <TableBodyCell>{formatCity(l)}</TableBodyCell>
        <TableBodyCell>{l.founded ?? '-'}</TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</Table>

<div class='mt-1 text-center'>
  <P align='center' weight='bold' color='text-gray-600 dark:text-gray-400'>Page: {data.page}</P>
  <Pagination table on:previous={() => handlePage('prev')} on:next={() => handlePage('next')} icon>
    <span slot="prev" class='flex items-center'>
      <ChevronLeft class="w-5 h-5"/>
      <span>Previous</span>
    </span>
    <span slot="next" class='flex items-center'>
      <span>Next</span>
      <ChevronRight class="w-5 h-5"/>
    </span>
  </Pagination>
  <div class='mt-2'>
    <P align='center' weight='bold' color='text-gray-600 dark:text-gray-400'>Page size</P>
    <Select items={PAGE_SIZES} bind:value={pageSizeState} on:change={handlePageSize} placeholder='Page size' style='max-width: 150px; margin: 0 auto' />
  </div>
</div>
