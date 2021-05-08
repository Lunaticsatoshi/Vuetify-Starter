<template>
  <v-container class="my-5 mx-auto">
    <h3>What are you most grateful for today</h3>
    <v-text-field
      label="Outlined"
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
                  <span class="font-weight-bold">share avatar</span>
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
                  <span class="font-weight-bold">share name</span>
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
    <v-btn block absolute bottom class="appBar">send and collect 2 points</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Gra'
};
</script>

<style>
</style>