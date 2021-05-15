<template>
   <v-card
    class="mx-auto"
  >

    <v-list
      subheader
      three-line
    >
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{$t('morning_title_1')}}</v-list-item-title>
          <v-list-item-subtitle>{{$t('morning_title_2')}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list
      flat
      subheader
      three-line
    >
      <v-subheader>General</v-subheader>

      <v-list-item-group
        multiple
        active-class=""
      >
        <v-list-item>
            <v-list-item-action>
              <v-checkbox  v-model="Gargles"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Gargles</v-list-item-title>
              <v-list-item-subtitle>Gargling with warm salt water will help ease the discomfort and irritation caused by a dry cough.</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-action>
              <v-checkbox  v-model="Medicine"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Medicine</v-list-item-title>
              <v-list-item-subtitle>Take Prescribed Medicines on Time</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-action>
              <v-checkbox  v-model="Exercises"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Breathing Exercises</v-list-item-title>
              <v-list-item-subtitle>Deep breathing can help reduce stress & increase lung capacity.</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-action>
              <v-checkbox  v-model="Temperature"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Body Temperature</v-list-item-title>
              <v-list-item-subtitle>Take your temperature via thermometer or Infra Scanner</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-action>
              <v-checkbox  v-model="Pressure"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Blood Pressure</v-list-item-title>
              <v-list-item-subtitle>Monitor BP If Prescribed by your doctor</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-action>
              <v-checkbox  v-model="pulse"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Pulse Rate</v-list-item-title>
              <v-list-item-subtitle>Monitor Pulse rate as prescribed by your doctor</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
                <v-list-item-action>
              <v-checkbox v-model="oxygen"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Oxygen Saturation</v-list-item-title>
                  <v-list-item-subtitle>Monitor O2 Saturation as prescribed by your doctor</v-list-item-subtitle>
                </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="Breakfast"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Breakfast</v-list-item-title>
              <v-list-item-subtitle>Have a nutritious breakfast on time focusing on whole foods</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>


      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import {mapGetters, mapState} from "vuex"

export default {
  name: 'Morning',
  data() {
    return {
      oxygen: false,
      Gargles: false,
      Medicine: false,
      Exercises: false,
      Temperature: false,
      Pressure: false,
      pulse: false,
      Breakfast: false
    }
  },
  computed: {
    ...mapState({
      currentDay: state=>state.currentDay
    }),
    ...mapGetters([
      'day',
    ]),
  },
  watch: {
    currentDay(value){
      this.oxygen = this.$store.state.morning.oxygen[value]
      this.Gargles   = this.$store.state.morning.Gargles[value]
      this.Medicine  = this.$store.state.morning.Medicine[value]
      this.Exercises  = this.$store.state.morning.Exercises[value]
      this.Temperature  = this.$store.state.morning.Temperature[value]
      this.Pressure  = this.$store.state.morning.Pressure[value]
      this.pulse  = this.$store.state.morning.pulse[value]
      this.Breakfast  = this.$store.state.morning.Breakfast[value]
    },
    oxygen(value){
      this.$store.commit('updateOxygen',{day: this.currentDay, value})
    },
    Gargles(value){
      this.$store.commit('updateGargles',{day: this.currentDay, value})
    }
  },
  created() {
    this.$store.dispatch('updateCurrentDay',this.day)

    this.oxygen = this.$store.state.morning.oxygen[this.day]
    this.Gargles = this.$store.state.morning.Gargles[this.day]
  }

};
</script>

<style>
</style>
