<script lang="ts">
  import { onMount } from "svelte";

  let mobileMenu: HTMLElement;
  let menuButton: HTMLElement;
  let open = false;
  
  function toggleMenu(event: MouseEvent) {
    if (menuButton && mobileMenu) {
      open = !open;
      mobileMenu.classList.toggle("open");
      menuButton.classList.toggle("open");
    }
  }
</script>

<div class="mobile-menu" bind:this={mobileMenu}>
  <!-- ANIMATED BACKGROUND ELEMENT -->
  <div class="menu-splash"></div>

  <!-- MENU ITEMS -->
  <div class="menu-items">
    <a on:click={toggleMenu} href="#landing">Home</a>
    <a on:click={toggleMenu} href="#mission">Mission</a>
    <a on:click={toggleMenu} href="#contact">Contact</a>
    <a on:click={toggleMenu} href="#">Prices</a>
  </div>
</div>

<div class="menu-button" bind:this={menuButton} on:click|preventDefault={toggleMenu}>
  <!-- MENU TOGGLE BUTTON -->
  <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
    <title>Toggle Menu</title>
    <g>
      <line class="menu-icon__bar" x1="13" y1="16.5" x2="37" y2="16.5"/>
      <line class="menu-icon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
      <line class="menu-icon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
      <line class="menu-icon__bar" x1="13" y1="32.5" x2="37" y2="32.5"/>
      <circle class="menu-icon__circle" r="23" cx="25" cy="25" />
    </g>
  </svg>
</div>

<style lang="scss" global>
  // calculate a circle's circumference based on radius
  @function circumference($r){
    $pi: 3.141592653;
    @return 2*$pi*$r;
  }

  .menu-button {
    position: relative;
    z-index: 101;

    // Toggle Button
    .menu-icon {
      display:block;
      cursor:pointer;
      color: white;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 25px;
      
      transform:rotate(0deg);
      transition: .3s cubic-bezier(0.165, 0.840, 0.440, 1.000); 
      
      &__bar,
      &__circle {
        fill:none;
        stroke: currentColor;
        stroke-width:3;
        stroke-linecap:round;
      }
      &__bar {
        transform: rotate(0deg);
        transform-origin:50% 50%;
        transition: transform .25s ease-in-out;
      }
      &__circle {
        transition: stroke-dashoffset .3s linear .1s;
        stroke-dashoffset:circumference(23); // 23 is the <circle>'s radius
        stroke-dasharray:circumference(23);
      }
    }
  }

  // Circular splash
  .menu-splash {
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 1px;
    z-index: 100;
    
    &::after {
      content: "";
      display: block;
      position: absolute;
      border-radius: 50%;
      background-color: var(--color-primary);
      
      // screen diameter can be 142vmax at most,
      // circle needs to be twice that size to cover it
      width: 284vmax;
      height: 284vmax;
      top: -142vmax;
      left: -142vmax;
      
      transform: scale(0);
      transform-origin: 50% 50%;
      transition: transform .5s cubic-bezier(0.755, 0.050, 0.855, 0.060);
      
      // will-change tells the browser we plan to 
      // animate this property in the near future
      will-change: transform;
    }
  }

  // Menu items
  .menu-items {
    display: flex;
    visibility: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: gap ease 1s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    color: var(--color-text-alt);
    font-size: 2rem;
    z-index: 101;

    a {
      text-align: center;
      padding: 0 0;
      width: 100%;
      transition: padding ease 0.4s 0s, visibility ease 0s 0.4s, background-color ease 0.2s;
    }

    a:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .menu-button.open {
    //animate the menu icon
    .menu-icon {
      color:white;
      transform:rotate(180deg);
      
      &__circle {
        stroke-dashoffset:0;
      }
      &__bar:nth-child(1),
      &__bar:nth-child(4) {
        opacity:0;
      }
      &__bar:nth-child(2) {
        transform: rotate(45deg);
      }
      &__bar:nth-child(3) {
        transform: rotate(-45deg);
      }
    }
  }

  .mobile-menu.open {
    display: block;

    //scale the background circle to full size
    .menu-splash::after {
      transform:scale(1);
    }

    //show the nav items
    .menu-items {
      visibility: visible;
      
      a {
        padding: 20px 0;
        transition: padding ease 0.5s 0.5s, visibility ease 0.5s 0.5s, background-color ease 0.2s;
      }
    }
  }
</style>