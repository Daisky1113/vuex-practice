<template>
  <v-card outlined>
    <v-card-title>{{ formTitle }} </v-card-title>
    <v-card-text>
      <v-text-field
        label="title"
        outlined
        dense
      ></v-text-field>
       <v-textarea
          auto-grow
          outlined
          label="text"
          rows="4"
          row-height="30"
        ></v-textarea>      
      <v-card-actions>
        <v-row
          align="center"
          justify="end"      
        >
        <v-btn
          color="secondary"
          dense
          text
        >
          Cancel
        </v-btn>
        <v-btn
          color="primary"
          outlined
          dense
        >
          Add
        </v-btn>         
        </v-row>
      </v-card-actions>      
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    formTitle: String
  },
  data: ()=>({
    title: '',
    text: ''
  }),
}
</script>