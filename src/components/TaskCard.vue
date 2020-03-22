<template>
  <v-card
    outlined
  >
  <v-card-title class="p-0">
    <v-row align="center">
      <v-col cols="10">{{ title }}</v-col>
      <v-col cols="2" justify="end"><v-switch v-model="finished" class="" label=""></v-switch></v-col>
    </v-row>
  </v-card-title>
    <v-card-text class="">
      {{ text }}
    </v-card-text>
    <v-card-actions>
        <v-row
          align="center"
          justify="end"
        > 
          <v-btn icon>
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>delete</v-icon>
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    id: Number,
    title: String,
    text: String
  },
  data: ()=>({
    finished: false
  })
}
</script>