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

export type Address = {
  readonly area: string | null
  readonly city: string
  readonly street: string
  readonly zipcode: string
}

export type Coordinates = {
  readonly lat: number
  readonly lon: number
}

export type Library = {
  readonly id: number
  readonly city: number
  readonly name: string
  readonly slug: string
  readonly type: string
  readonly slogan: string
  readonly address: Address
  readonly founded: number
  readonly coverPhoto: {
    readonly huge: Photo
    readonly large: Photo
    readonly medium: Photo
    readonly small: Photo
  }
  readonly coordinates: Coordinates
  readonly description: string
  readonly mainLibrary: false
}

export const fetchLibraries = async (
  filter?: {
    readonly name?: string
    readonly city?: string
  }
): Promise<ApiCollectionResult<Library>> => {
  const res = await axios.get(`${API_URL}/library`)
  return res.data
}

export const fetchLibrary = async (id: number): Promise<ApiSingleResult<Library>> => {
  const res = await axios.get(`${API_URL}/library/${id}`)
  return res.data
}
