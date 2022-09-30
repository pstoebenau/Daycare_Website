<script lang="ts">
  import { onMount } from "svelte";
  import { Map, Geocoder, Marker, controls } from '@beyonk/svelte-mapbox';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { inview } from 'svelte-inview';

  const { GeolocateControl, NavigationControl, ScaleControl } = controls;
  const coords = {
    lat: 28.51956892042721,
    long: -81.54123116707794,
  }

  let mapComponent: any;
  let initZoom = 18;
  let endZoom = 13;
  let zoom = tweened(initZoom, {
    delay: 500,
    duration: 1500,
    easing: cubicOut,
  });

  $: if (mapComponent) mapComponent.setZoom($zoom);

  function zoomOut() {
    zoom.set(endZoom)
  }
  
  function resetMap() {
    zoom.set(initZoom);
    mapComponent.setCenter([coords.long, coords.lat]);
  }
</script>

<div use:inview={{}} on:enter={zoomOut} on:leave={resetMap} class="bg-gray-200 h-[300px] sm:h-screen">
  <Map
    bind:this={mapComponent}
    accessToken="pk.eyJ1IjoicHN0b2ViZW5hdSIsImEiOiJjbDhvcHRuNzEwMDJ5M29vOG9weWtkY2MwIn0.PiWLA0Q6DloinqLrBgch3Q"
    center={[coords.long, coords.lat]}
    zoom={initZoom}
    style="mapbox://styles/pstoebenau/cl8oq6dlq000e14o46k0wh09n"
    options={{
      scrollZoom: false,
    }}
  >
    <Marker label="Montessori Kids Academy of Windermere" lat={coords.lat} lng={coords.long}></Marker>
    <ScaleControl />
  </Map>
</div>