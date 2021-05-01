<template>
  <div class="home">
    <h1>Today Is</h1>
    <v-container class="my-5"> <Card /> </v-container>
    <v-btn v-show="!hidden" color="pink" dark absolute bottom right fab>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  name: "Home",

  components: {
    Card,
  },
};
</script>
