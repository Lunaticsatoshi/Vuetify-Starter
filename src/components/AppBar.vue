<template>
  <nav>
    <v-app-bar flat app >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-regular">{{$t(this.$route.name)}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-select
            v-model="day"
                  :items="days"
                  label="Select Day"
                  dense
                  solo
        ></v-select>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer absolute temporary v-model="drawer" class="primary">
      <v-list nav dense v-model="items">
        <v-list-item :key="item.text" v-for="item in items" :to="item.route">
          <v-list-item-icon>
            <v-icon left class="white--text" v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="white--text"
              v-text="item.text"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      day: 0,
      drawer: false,
      items: [
        { icon: "dashboard", text: "Home", route: "/" },
        { icon: "folder", text: "About", route: "/about" },
        { icon: "group", text: "Teams", route: "/thought" },
      ],
      days: [
          {value: 0,text:'Day 1'},
        {value: 1,text:'Day 2'},
        {value: 2,text:'Day 3'},
        {value: 3,text:'Day 4'},
        {value: 4,text:'Day 5'},
        {value: 5,text:'Day 6'},
        {value: 6,text:'Day 7'},
        {value: 7,text:'Day 8'},
        {value: 8,text:'Day 9'},
      ]

  };
  },
  watch: {
    day(v){
      this.$store.dispatch('updateCurrentDay',v)
    }
  },
  created() {
    this.day = this.$store.state.currentDay
  }
};
</script>

<style lang="scss" scoped>
</style>
