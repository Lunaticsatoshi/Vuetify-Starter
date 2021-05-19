<template>
  <div>
    <v-app-bar flat app color='purple lighten-4'>
      <v-app-bar-nav-icon @click="pressHomeIcon">
        <slot v-if="this.$route.name !== 'Home'">
          <v-icon>mdi-arrow-left</v-icon>
        </slot>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-regular">{{$t(this.$route.name)}}</span>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-icon v-if="this.$route.name !== 'Home' && this.$route.name !== 'About'" @click="rightDrawer = !rightDrawer">mdi-calendar-today</v-icon>
        <slot v-else>
          <v-icon @click="changeLanguage">mdi-translate</v-icon>
        </slot>
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

<!--    Day list-->
    <v-navigation-drawer app right  v-model="rightDrawer" >
      <v-list nav dense>
        <v-list-item v-for="day in days" :key="day.value" @click=changeDay(day)>{{day.text}}</v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState} from "vuex"

export default {
  name: "AppBar",
  data() {
    return {
      drawer: false,
      rightDrawer: false,
      items: [
        { icon: "dashboard", text: this.$t('Home'), route: "/" },
        { icon: "folder", text: this.$t('About'), route: "/about" }
      ],

  }
  },
  computed:{
    ...mapState({
      currentDay: state=>state.currentDay
    }),
    days(){
      let array = []
      array = this.$t('days')
      return array.map((a,i)=> {
        return {value: i, text: a}
      })
    }
  },
  watch: {
    day(v){
      this.$store.dispatch('updateCurrentDay',v)
    }
  },
  methods: {
    changeLanguage(){
      this.$i18n.locale = this.$i18n.locale ==='en'?'hi':'en'
      localStorage.setItem('language',this.$i18n.locale)
      window.location.reload(true);

    },
    changeDay(day){
      this.rightDrawer = false
      this.$store.dispatch('updateCurrentDay',day.value)
    },
    pressHomeIcon(){
      if (this.$route.name !== 'Home')
        this.$router.go(-1)
      else
        this.drawer = !this.drawer

    }
  },
  created() {
  }
};
</script>

<style lang="scss" scoped>
</style>
