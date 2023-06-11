import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import { fetchLibrary } from '../../../api/library'
import type { Library } from '../../../api/library'

export const load: PageLoad = async ({ params }): Promise<Library> => {
  const id = Number(params.slug)
  if (isNaN(id)) {
    throw error(400, 'Invalid ID')
  }

  const res = await fetchLibrary(id)
  return res.data
}
