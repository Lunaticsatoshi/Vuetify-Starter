<template>
  <div class="home">
    <v-container class="my-5 mx-auto">

      <h2 align=center>Today is a beautiful day...</h2>
      <h3 align=center>{{$t('day')+ " "+(this.day + 1)}}</h3>
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
          name: "Daily Morning Routine",
          icon: "mdi-weather-sunset",
          path: 'morning'
        },
        {
          name: "Positive Affirmations",
          icon: "mdi-head-heart",
          path: 'affirmations'

        },
        {
          name: "Gratitude",
          icon: "mdi-hand-heart",
          path: 'gratitude'

        },
        {
          name: "Short Story",
          icon: "mdi-audio-video",
          path: 'shortStory'

        },
        {
          name: "Activity",
          icon: "mdi-human-scooter",
          path: 'activity'

        },
        {
          name: "Journal",
          icon: "mdi-script-text-play",
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
