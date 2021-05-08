<template>
  <div class="home">
    <v-container class="my-5 mx-auto">

    <v-select class="d-flex"
        cols="12"
        sm="6"
          :items="items"
          label="Select Day"
          dense
          solo
        ></v-select>
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
      hidden: false,
      items: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      cards: [
        {
          name: "Morning Routine",
          icon: "account-clock",
        },
        {
          name: "Positive Affirmations",
        },
        {
          name: "Gratitude",
        },
        {
          name: "Short Story",
        },
        {
          name: "Entertainment",
        },
        {
          name: "Journal",
        },
      ],
    };
  },
};
</script>
