<template>
  <div>
    <!-- Conditionally render the signup button -->
    <button v-if="!showPopup" @click="showPopup = true">Sign Up</button>

    <!-- SignUpPopUp component -->
    <SignUpPopUp :isVisible="showPopup" @close="showPopup = false" />
    
    <!-- Add router-view for navigation -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SignUpPopUp from './components/SignUpPopUp.vue';

export default defineComponent({
  components: {
    SignUpPopUp,
  },
  data() {
    return {
      showPopup: false,
    };
  },
});
</script>
