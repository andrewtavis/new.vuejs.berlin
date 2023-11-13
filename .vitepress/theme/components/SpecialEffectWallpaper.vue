<template>
  <div id="special-effect" :style="`background-image: url(${src});`">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    src: String
  }
}
</script>

<style scoped>
  #special-effect {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-color: black;
    background-size: cover;
    animation: flicker 3s linear 1s 1 forwards;
    opacity: 0.0;
  }
  @keyframes flicker {
    from { opacity: 0.0; }
    1% { opacity: 0.2; }
    2% { opacity: 0.0; }
    10% { opacity: 0.0; }
    11% { opacity: 0.3; }
    12% { opacity: 0.5; }
    13% { opacity: 0.0; }
    50% { opacity: 0.0; }
    51% { opacity: 0.5; }
    52% { opacity: 0.0; }
    55% { opacity: 0.5; }
    56% { opacity: 0.0; }
    57% { opacity: 0.5; }
    58% { opacity: 0.0; }
    65% { opacity: 0.0; }
    67% { opacity: 1.0; }
    68% { opacity: 0.0; }
    80% { opacity: 0.0; }
    to { opacity: 1.0; }
  }
</style>
