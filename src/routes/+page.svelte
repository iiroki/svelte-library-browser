<script lang='ts'>
  import { Heading, P, A } from 'flowbite-svelte'
</script>

<Heading tag='h2'>Hello!</Heading>
<P>
  <b>Svelte Library Browser</b> is a web application built with <A href='https://kit.svelte.dev'>SvelteKit</A>
  can be used to browse Finnish libraries.
</P>

<P class='mt-2'>
  The purpose of this application is to learn Svelte and get familiar with it.
  The app uses two APIs as data sources: <A href='https://api.kirjastot.fi'>Kirkanta API v4</A> for libraries
  and <A href='https://open-meteo.com/'>Open-Meteo</A> for weather.
  <A href='https://flowbite-svelte.com'>Flowbite</A> was chosen as the UI component
  library.
</P>

<P class='mt-2'>
  The features include a library list with search capabilities and a detailed library page with weather information
  (because why not). Dark mode can also be toggled with the switch in the top menu.
</P>
