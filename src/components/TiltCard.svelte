<script lang="ts">
  import { onMount } from 'svelte';
  import VanillaTilt from "vanilla-tilt";

  export let title: string;
  export let description: string;
  export let imgSrc: string;
  export let width: string;

  let tiltEl: HTMLElement;
  let mounted = false;
  
  onMount(() => {
    VanillaTilt.init(tiltEl, {
      transition: true,
      speed: 1000,
      gyroscope: false,
    });
    mounted = true;
  });
</script>

<div id="tiltEl" bind:this={tiltEl} class="rounded-lg overflow-hidden shadow-2xl aspect-square" style="--width: {width}">
  {#if mounted}
    <img class="absolute top-0 left-0 right-0 bottom-0" src={imgSrc} alt=""/>
  {/if}
  <div class="flex flex-col h-full justify-end p-5 text-white font-bold">
    <h3 class="text-3xl mb-2" style="transform: translateZ(30px);">{title}</h3>
    <p class="text-sm sm:text-base" style="transform: translateZ(20px);">{description}</p>
  </div>
</div>

<style>
  #tiltEl {
    width: var(--width);
    max-width: 95vw;
    transform-style: preserve-3d;
  }
</style>
