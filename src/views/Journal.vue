<template>
  <v-container class="my-5 mx-auto">
    <h3>Write about Day today</h3>
    <v-text-field
        v-model="journalText"
        label="Today my day started with..."
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
                  <span class="font-weight-bold">I smiled today</span>
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-checkbox v-model="journalCheck1"></v-checkbox>
              </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group>
          <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="font-weight-bold">I love Myself</span>
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-checkbox v-model="journalCheck2"></v-checkbox>
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
  name: 'Journal',
  data(){
    return {
      journalText: '',
      journalCheck1: false,
      journalCheck2: false,
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
      this.journalText = this.$store.state.journal.journalText[value]
      this.journalCheck1   = this.$store.state.journal.journalCheck1[value]
      this.journalCheck2  = this.$store.state.journal.journalCheck2[value]
    },
    journalText(value){
      this.$store.commit('updateJournalText',{day: this.currentDay, value})
    },
    journalCheck1(value){
      this.$store.commit('updateJournalCheck1',{day: this.currentDay, value})
    },
    journalCheck2(value){
      this.$store.commit('updateJournalCheck2',{day: this.currentDay, value})
    }
  },
  created() {
    this.$store.dispatch('updateCurrentDay',this.day)

    this.journalText = this.$store.state.journal.journalText[this.day]
    this.journalCheck1 = this.$store.state.journal.journalCheck1[this.day]
    this.journalCheck2 = this.$store.state.journal.journalCheck2[this.day]

  }


};
</script>

<style>
</style>
