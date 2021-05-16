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
      <v-subheader>{{$t('morning_title_3')}}</v-subheader>

      <v-list-item-group
        multiple
        active-class=""
      >
        <v-list-item>
            <v-list-item-action>
              <v-checkbox  v-model="Gargles"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{$t('morning_title_4')}}</v-list-item-title>
              <v-list-item-subtitle>{{$t('morning_title_5')}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-action>
              <v-checkbox  v-model="Medicine"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{$t('morning_title_6')}}</v-list-item-title>
              <v-list-item-subtitle>{{$t('morning_title_7')}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-action>
              <v-checkbox  v-model="Exercises"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{$t('morning_title_8')}}</v-list-item-title>
              <v-list-item-subtitle>{{$t('morning_title_9')}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-action>
              <v-checkbox  v-model="Temperature"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{$t('morning_title_10')}}</v-list-item-title>
              <v-list-item-subtitle>{{$t('morning_title_11')}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-action>
              <v-checkbox  v-model="Pressure"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{$t('morning_title_12')}}</v-list-item-title>
              <v-list-item-subtitle>{{$t('morning_title_13')}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-action>
              <v-checkbox  v-model="pulse"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{$t('morning_title_14')}}</v-list-item-title>
              <v-list-item-subtitle>{{$t('morning_title_15')}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
                <v-list-item-action>
              <v-checkbox v-model="oxygen"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{$t('morning_title_16')}}</v-list-item-title>
                  <v-list-item-subtitle>{{$t('morning_title_17')}}</v-list-item-subtitle>
                </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="Breakfast"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{$t('morning_title_18')}}</v-list-item-title>
              <v-list-item-subtitle>{{$t('morning_title_19')}}</v-list-item-subtitle>
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
    },
    Medicine(value){
      this.$store.commit('updateMedicine',{day: this.currentDay, value})
    },
    Exercises(value){
      this.$store.commit('updateExercises',{day: this.currentDay, value})
    },
    Temperature(value){
      this.$store.commit('updateTemperature',{day: this.currentDay, value})
    },
    Pressure(value){
      this.$store.commit('updatePressure',{day: this.currentDay, value})
    },
    pulse(value){
      this.$store.commit('updatepulse',{day: this.currentDay, value})
    },
    Breakfast(value){
      this.$store.commit('updateBreakfast',{day: this.currentDay, value})
    }
  },
  created() {
    this.$store.dispatch('updateCurrentDay',this.day)

    this.oxygen = this.$store.state.morning.oxygen[this.day]
    this.Gargles = this.$store.state.morning.Gargles[this.day]
    this.Medicine = this.$store.state.morning.Medicine[this.day]
    this.Exercises = this.$store.state.morning.Exercises[this.day]
    this.Temperature = this.$store.state.morning.Temperature[this.day]
    this.Pressure = this.$store.state.morning.Pressure[this.day]
    this.pulse = this.$store.state.morning.pulse[this.day]
    this.Breakfast = this.$store.state.morning.Breakfast[this.day]
  }

};
</script>

<style>
</style>
