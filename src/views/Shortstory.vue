<template>
  <div id="scratch">
    <v-container class="my-8 mx-auto text-center">

      <h3>{{$t('ss_title_1')}}</h3>
      <h4>{{$t('ss_title_2')}}</h4>
      <v-container fluid class="my-5">
        <v-row align="center" justify="center">
          <v-col>
            <vue-typed-js :strings="[$t(`short_stories[${day}]`)]">
              <h5 class="typing"></h5>
            </vue-typed-js>
          </v-col>
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
    this.$store.dispatch('updateCurrentDay',this.day)

  }
};
</script>

<style scoped>

</style>
