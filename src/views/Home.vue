<template>
  <div class="home">
    <v-container class="my-5 mx-auto">
      <h1>Today Is</h1>
      <v-container row wrap class="my-5">
        <v-row>
          <v-col
            cols="6"
            md="4"
            lg="4"
            v-for="card in cards"
            :key="card.id"
          >
            <Card :card="card" />
          </v-col>
        </v-row>
      </v-container>
      <v-btn v-show="!hidden" color="pink" dark absolute bottom right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-container>
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  name: "Home",

  components: {
    Card,
  },
  data() {
    return {
      cards: [
        {
          name: "Positive Mindset",
        },
        {
          name: "Positive Affirmations",
        },
        {
          name: "Morning Routine",
        },
        {
          name: "Study",
        },
        {
          name: "Gratitude",
        },
        {
          name: "Productivity",
        },
      ],
    };
  },
};
</script>
