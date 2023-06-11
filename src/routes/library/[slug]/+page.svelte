<script lang='ts'>
  import sanitizeHtml from 'sanitize-html'
  import { Heading, Img, List, Li, P } from 'flowbite-svelte'
  import type { PageData } from "./$types"
  import LoadingSpinner from '../../../components/LoadingSpinner.svelte';
  import { fetchCurrentWeather } from '../../../api/weather'

  export let data: PageData
  let weatherProm = fetchCurrentWeather(data.coordinates.lat, data.coordinates.lon)
</script>

<Img class='rounded-lg' src={data.coverPhoto.huge.url} alt={data.name} style="max-width: 100%; max-height: 600px" />
<Heading tag='h1'>{data.name}</Heading>

{#await weatherProm}
  <LoadingSpinner />
{:then weather} 
  <Heading tag='h3'>Weather:</Heading>
  <List tag='ul'>
    <Li>Temperature: {weather.current_weather.temperature} &#8451;</Li>
    <Li>Wind speed: {weather.current_weather.windspeed} m/s</Li>
  </List>
{/await}

<P>{@html sanitizeHtml(data.description)}</P>
