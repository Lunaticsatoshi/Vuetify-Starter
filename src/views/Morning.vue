<template>
   <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-toolbar
      color="purple"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Morning Routine</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list
      subheader
      three-line
    >
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Monitor & Regulate Your Routine</v-list-item-title>
          <v-list-item-subtitle>Start your day on the right foot</v-list-item-subtitle>
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
        v-model="settings"
        multiple
        active-class=""
      >
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Gargles</v-list-item-title>
              <v-list-item-subtitle>Gargling with warm salt water will help ease the discomfort and irritation caused by a dry cough.</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Medicine</v-list-item-title>
              <v-list-item-subtitle>Take Prescribed Medicines on Time</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Breathing Exercises</v-list-item-title>
              <v-list-item-subtitle>Deep breathing can help reduce stress & increase lung capacity.</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Body Temperature</v-list-item-title>
              <v-list-item-subtitle>Take your temperature via thermometer or Infra Scanner</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Blood Pressure</v-list-item-title>
              <v-list-item-subtitle>Monitor BP If Prescribed by your doctor</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Pulse Rate</v-list-item-title>
              <v-list-item-subtitle>Monitor Pulse rate as prescribed by your doctor</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Oxygen Saturation</v-list-item-title>
              <v-list-item-subtitle>Monitor O2 Saturation as prescribed by your doctor</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Breakfast</v-list-item-title>
              <v-list-item-subtitle>Have a nutritious breakfast on time focusing on whole foods</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>