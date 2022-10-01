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
    duration: 1500,
    easing: cubicOut,
  });

  $: if (mapComponent) mapComponent.setZoom($zoom);

  onMount(() => {
    resetMap();
  });

  function zoomOut() {
    mapComponent.flyTo({center: [coords.long+0.02, coords.lat], zoom: endZoom});
  }
  
  function resetMap() {
    mapComponent.setZoom(initZoom);
    mapComponent.setCenter([coords.long+0.001, coords.lat]);
  }
</script>

<div use:inview={{}} on:enter={zoomOut} on:leave={resetMap} class="relative bg-gray-200 h-[300px] sm:h-[700px]">
  <Map
    bind:this={mapComponent}
    accessToken="pk.eyJ1IjoicHN0b2ViZW5hdSIsImEiOiJjbDhvcHRuNzEwMDJ5M29vOG9weWtkY2MwIn0.PiWLA0Q6DloinqLrBgch3Q"
    zoom={initZoom}
    style="mapbox://styles/pstoebenau/cl8oq6dlq000e14o46k0wh09n"
    options={{
      scrollZoom: false,
    }}
  >
    <Marker lat={coords.lat} lng={coords.long}>
      
    </Marker>
  </Map>
  <div id="map-controls" class="hidden sm:block absolute top-5 left-5">
    <div class="flex flex-col gap-3" id="zoom-controls">
      <button on:click={() => zoom.set($zoom+1)} type="button" class="bg-gray-300 hover:bg-gray-400 rounded-lg text-xl px-4 py-2">+</button>
      <button on:click={() => zoom.set($zoom-1)} type="button" class="bg-gray-300 hover:bg-gray-400 rounded-lg text-xl px-4 py-2">-</button>
    </div>
  </div>
</div>

<style global>
  .mapboxgl-control-container {
    display: none;
  }
</style>