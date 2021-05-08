<template>
  <div class="home">
    <v-container class="my-5 mx-auto">

      <h1>Today Is {{$t('day')+ " "+(this.day + 1)}}</h1>
      <v-container row wrap class="my-5">
        <v-row>
          <v-col
            cols="6"
            md="4"
            lg="4"
            v-for="card in cards"
            :key="card.name"
          >
            <Card :card="card" >
            </Card>
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
import {mapMutations, mapGetters,mapActions} from 'vuex'
import Card from "../components/Card";
export default {
  name: "Home",

  components: {
    Card,
  },
  data() {
    return {
      hidden: false,
      cards: [
        {
          name: "Morning Routine",
          icon: "mdi-account-clock",
          path: 'morning'
        },
        {
          name: "Positive Affirmations",
          path: 'affirmations'

        },
        {
          name: "Gratitude",
          path: 'gratitude'

        },
        {
          name: "Short Story",
          path: 'shortStory'

        },
        {
          name: "Activity",
          path: 'activity'

        },
        {
          name: "Journal",
          path: 'journal'

        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'day',
    ])
  },
  methods: {
    ...mapMutations([
      'updateStartDate',
    ]),
    ...mapActions([
      'updateCurrentDay',
    ]),
  },
  created() {
    console.log('home')
    // this.updateStartDate(new Date('2021-05-05').getTime())
    this.updateCurrentDay(this.day)
  }
};
</script>
