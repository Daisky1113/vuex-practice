<template>
  <v-card outlined="">
   <v-toolbar
      color="indigo"
      dark
      dense
    >
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <slot name="contents"></slot>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>