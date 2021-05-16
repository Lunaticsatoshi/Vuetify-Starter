<template>
<v-container>
  <div class="about">
    <h1>{{$t('about_title_1')}}</h1>
    <v-container class="my-5"> {{$t('about_title_2')}}</v-container>
  </div>

    <h5>{{$t('gratitude_title_6')}}</h5>
    <WhatsApp-button v-bind:isBlank="false" btnText
    v-bind:shareUrl="this.$t('title_social')"
    />
    <twitter-button v-bind:isBlank="false" btnText
    v-bind:shareUrl="this.$t('title_social')"
    />
    <facebook-button v-bind:isBlank="false" btnText
    v-bind:shareUrl="this.$t('title_social')"
    />
    </v-container>
</template>

<script>
import WhatsAppButton from "vue-share-buttons/src/components/WhatsAppButton";
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
import FacebookButton from "vue-share-buttons/src/components/FacebookButton";

export default {
  name: 'About',

  components: {
    WhatsAppButton,
    TwitterButton,
    FacebookButton,

     },
};

</script>
