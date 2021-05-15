<template>
  <div id="scratch">
    <v-container class="my-8 mx-auto text-center">

      <h3>Short stories to bring you back to savour the happiness in tiny moments.</h3>
      <h3>Read today's story and retrospect</h3>
      <v-container fluid class="my-5">
        <v-row align="center" justify="center">
          <v-col>
            <vue-typed-js :strings="[$t(`short_stories[${day}]`)]">
              <h1 class="typing"></h1>
            </vue-typed-js>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-btn block absolute bottom class="appBar">{{ $t('complete') }}</v-btn></v-col
          >
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "ShortStory",
  components: {
  },

  data() {
    return {
      renderCount: 0,
      cardWidth: 320,
      cardHeight: 155,
      finishPercent: 70,
      forceReveal: false,
      brushUrl: ''
    };
  },
  computed: {
    ...mapGetters([
      'day',
    ])
  },
  created() {
    this.$store.dispatch('updateCurrentDay',this.$store.state.day)

  }
};
</script>

<style scoped>

</style>
