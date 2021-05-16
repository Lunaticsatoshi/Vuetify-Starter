<template>
  <div id="scratch">
    <v-container class="my-8 mx-auto text-center">

      <h3>{{$t('affirmation_title_1')}}</h3>
      <h4>{{$t('affirmation_title_2')}}</h4>
      <v-container fluid class="my-5">
        <v-row align="center" justify="center">
          <v-col>
            <scratch-card
                :key="renderCount"
                :cardWidth="cardWidth"
                :cardHeight="cardHeight"
                :finishPercent="finishPercent"
                imageUrl="https://images.unsplash.com/photo-1619958405137-8dc6281021bb?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                :brushUrl="brushUrl"
                :forceReveal="forceReveal"
            >
              <v-card class="text-center mx-auto"
                      :width="cardWidth"
                      :height="cardHeight">

                <v-card-text>
                  <div class="heading mt-1">{{$t(`affirmations[${currentDay}]`)}}</div>
                </v-card-text>
              </v-card>
            </scratch-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-btn block class="appBar" @click="forceReveal = true"
            >{{$t('SkipScratch')}}</v-btn
            >
          </v-col>
          <v-col cols="6">
            <v-btn block class="appBar" @click="renderCount++"
            >{{$t('reset')}}</v-btn
            >
          </v-col>
        </v-row>
       
      </v-container>
    </v-container>
  </div>
</template>

<script>
import ScratchCard from "vue-scratchcard";
import {mapGetters, mapState} from "vuex"
export default {
  name: "Affirmations",
  components: {
    ScratchCard,
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
    ...mapState({
      currentDay: state=>state.currentDay
    }),
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
.card-content {
  color: red;
}
</style>
