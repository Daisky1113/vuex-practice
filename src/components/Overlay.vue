<template>
  <v-overlay :value="isOverlay">
    <slot name="inner"></slot>
  </v-overlay>
</template>
<script>
export default {
  props: {
    isOverlay: Boolean
  }
}
</script>
