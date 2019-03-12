<template>
  <v-app>
    <Navbar></Navbar>
    <v-content class="mx-3 mt-2">
        <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
 import Navbar from '@/components/Navbar.vue'
 import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
   Navbar,
   Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
