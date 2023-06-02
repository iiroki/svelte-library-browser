<script lang="ts">
  import sanitizeHtml from 'sanitize-html'
  import type { PageData } from "./$types"
  import { fetchCurrentWeather } from '../../../api/weather'
  export let data: PageData
  let weatherPromise = fetchCurrentWeather(data.coordinates.lat, data.coordinates.lon)
</script>

<img src={data.coverPhoto.huge.url} alt={data.name} style="max-width: 100%; max-height: 600px" />
<h1>{data.name}</h1>

{#await weatherPromise}
  <p>Loading weather...</p>
{:then weather} 
  <h3>Weather:</h3>
  <ul>
    <li>Temperature: {weather.current_weather.temperature} &#8451;</li>
    <li>Wind speed: {weather.current_weather.windspeed} m/s</li>
  </ul>
{/await}

{@html sanitizeHtml(data.description)}
