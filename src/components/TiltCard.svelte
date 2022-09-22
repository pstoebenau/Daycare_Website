<script lang="ts">
  import { onMount } from 'svelte';
  import VanillaTilt from "vanilla-tilt";

  export let title: string;
  export let description: string;
  export let imgSrc: string;

  let tiltEl: HTMLElement;
  
  onMount(() => {
    VanillaTilt.init(tiltEl, {
      transition: true,
      speed: 1000,
      gyroscope: false,
    });
  });
</script>

<div bind:this={tiltEl} class="rounded-lg overflow-hidden shadow-2xl" style="transform-style: preserve-3d; transform: perspective(1000px);">
  <img src={imgSrc} alt=""/>
  <div class="absolute bottom-0 left-0 p-5 text-white font-bold" style="transform: translateZ(20px);">
    <h3 class="text-3xl mb-2">{title}</h3>
    <p>{description}</p>
  </div>
</div>
