import type { PageLoad } from './$types'
import { fetchLibraries } from '../../api/library'
import type { Library, LibraryFilter } from '../../api/library'

type LibraryLoad = {
  readonly libraries: Library[]
  readonly page: number
  readonly pageSize: number
  readonly filter?: LibraryFilter
}

export const load: PageLoad = async ({ url }): Promise<LibraryLoad> => {
  const page = Number(url.searchParams.get('page')) || 1
  const pageSize = Number(url.searchParams.get('pageSize')) || 10
  const res = await fetchLibraries(page, pageSize)
  return { libraries: res.items, page, pageSize }
}
