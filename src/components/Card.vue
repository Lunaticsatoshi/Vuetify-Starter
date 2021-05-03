<template>
  <v-card class="text-center" @click.stop="changeWindow">
    <!-- <v-row>
      <v-col class="text-center mt-5">
        <v-avatar size="50">
          <img src="https://images.unsplash.com/photo-1619958405137-8dc6281021bb?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </v-avatar>
        <v-card-text>
          <div class="text-subtitle mt-1">
            {{ card.name }}
          </div>
        </v-card-text>
      </v-col>
    </v-row> -->
    <v-responsive class="pt-4">
      <v-avatar size="80">
        <img
          src="https://images.unsplash.com/photo-1619958405137-8dc6281021bb?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </v-avatar>
    </v-responsive>
    <v-card-text>
      <div class="heading mt-1">
        {{ card.name }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: ["card"],
  methods: {
    changeWindow(){
      this.$router.push('/scratch',)
    }
  }
};
</script>

<style>
</style>