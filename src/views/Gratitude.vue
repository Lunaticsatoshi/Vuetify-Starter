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
              <v-list-item-content>
                <v-list-item-title>
                  <span class="font-weight-bold">I am grateful for me</span>
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-checkbox v-model="gratitudeCheck1"></v-checkbox>
              </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group>
          <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="font-weight-bold">I smiled today</span>
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-checkbox v-model="gratitudeCheck2"></v-checkbox>
              </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container>
  </v-container>
</template>

<script>
import {mapGetters, mapState} from "vuex"

export default {
  name: 'Gratitude',
  data(){
    return {
      gratitudeText: '',
      gratitudeCheck1: false,
      gratitudeCheck2: false,
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
      this.gratitudeCheck1   = this.$store.state.gratitude.gratitudeCheck1[value]
      this.gratitudeCheck2  = this.$store.state.gratitude.gratitudeCheck2[value]
    },
    gratitudeText(value){
      this.$store.commit('updateGratitudeText',{day: this.currentDay, value})
    },
    gratitudeCheck1(value){
      this.$store.commit('updateGratitudeCheck1',{day: this.currentDay, value})
    },
    gratitudeCheck2(value){
      this.$store.commit('updateGratitudeCheck2',{day: this.currentDay, value})
    }
  },
  created() {
    this.$store.dispatch('updateCurrentDay',this.day)

    this.gratitudeText = this.$store.state.gratitude.gratitudeText[this.day]
    this.gratitudeCheck1 = this.$store.state.gratitude.gratitudeCheck1[this.day]
    this.gratitudeCheck2 = this.$store.state.gratitude.gratitudeCheck2[this.day]

  }

};
</script>

<style>
</style>
