import axios from 'axios'

// API documentation:
// https://open-meteo.com/
const API_URL = 'https://api.open-meteo.com/v1'

export type CurrentWeather = {
  readonly latitude: number
  readonly longitude: number
  readonly current_weather: {
    readonly temperature: number
    readonly windspeed: number
    readonly winddirection: number
    readonly weathercode: number
    readonly is_day: number
    readonly time: string
  }
}

export const fetchCurrentWeather = async (lat: number, lon: number): Promise<CurrentWeather> => {
  const params = [
    'current_weather=true',
    `latitude=${lat}`,
    `longitude=${lon}`
  ]

  const res = await axios.get(`${API_URL}/forecast?${params.join('&')}`)
  return res.data
}
