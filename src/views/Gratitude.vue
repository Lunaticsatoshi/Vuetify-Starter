<template>
  <v-container class="my-5 mx-auto">
    <h3>What are you most grateful for today</h3>
    <v-text-field
        v-model="gratitudeText"
        label="I am grateful for my health..."
        class="mt-6"
        block
        placeholder="write your thought"
        outlined
    ></v-text-field>
    <v-container>
      <v-list>
        <v-list-item-group>
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title>
                  <span class="font-weight-bold">I am grateful for me</span>
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-checkbox :input-value="active"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group>
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title>
                  <span class="font-weight-bold">I smiled today</span>
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-checkbox :input-value="active"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container>
    <v-btn  block absolute bottom class="appBar">Save</v-btn>
  </v-container>
</template>

<script>
import {mapGetters, mapState} from "vuex"

export default {
  name: 'Gratitude',
  data(){
    return {
      gratitudeText: ''
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
      this.gratitudeText = this.$store.state.gratitude.gratitudeText[value]
    /*  this.Gargles   = this.$store.state.morning.Gargles[value]
      this.Medicine  = this.$store.state.morning.Medicine[value]
     */
    },
    gratitudeText(value){
      this.$store.commit('updateGratitudeText',{day: this.currentDay, value})
    },
   /* Gargles(value){
      this.$store.commit('updateGargles',{day: this.currentDay, value})
    }*/
  },
  created() {
    this.$store.dispatch('updateCurrentDay',this.day)

    this.gratitudeText = this.$store.state.gratitude.gratitudeText[this.day]
    /*this.Gargles = this.$store.state.morning.Gargles[this.day]*/
  }

};
</script>

<style>
</style>
