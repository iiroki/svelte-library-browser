import axios from 'axios'

// API documentation:
// https://api.kirjastot.fi/
const API_URL = 'https://api.kirjastot.fi/v4'

type ApiResult = {
  readonly type: string
  readonly total: number
}

export type ApiCollectionResult<T> = ApiResult & {
  readonly items: T[]
}

export type ApiSingleResult<T> = ApiResult & {
  readonly data: T
}

export type Photo = {
  readonly url: string
  readonly size: number
  readonly resolution: string
}

export type Coordinates = {
  readonly lat: number
  readonly lot: number
}

export type Library = {
  readonly id: number
  readonly city: number
  readonly name: string
  readonly slug: string
  readonly type: string
  readonly slogan: string
  // TODO: address
  readonly created: string // ISO 8601
  readonly modified: string // ISO 8601
  readonly founded: number
  readonly coverPhoto: {
    readonly huge: Photo
    readonly large: Photo
    readonly medium: Photo
    readonly small: Photo
  }
  readonly description: string
  readonly mainLibrary: false
}

export const fetchLibraries = async (): Promise<ApiCollectionResult<Library>> => {
  const res = await axios.get(`${API_URL}/library`)
  return res.data
}

export const fetchLibrary = async (id: number): Promise<ApiSingleResult<Library>> => {
  const res = await axios.get(`${API_URL}/library/${id}`)
  return res.data
}
