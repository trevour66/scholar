<template>
    <LoginModal/>
    <RegisterModal/>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <FooterPart/>
</template>

<script>
import LoginModal from '@/components/modals/LoginModal.vue'
import RegisterModal from '@/components/modals/RegisterModal.vue'
import FooterPart from '@/components/FooterPart.vue'
export default {
  components: {
    LoginModal,
    FooterPart,
    RegisterModal
  },
}
</script>

<style>

</style>
