<template>
  <div 
    v-if="display" 
    class="alert my-2" 
    :class="{
            'alert-danger': errorAlert,
            'alert-success': !errorAlert
        }" 
    role="alert">
    {{ message }}
    </div>
</template>

<script>
export default {
    props: {
        message: String,
        display: Boolean,
        errorAlert: Boolean
    }

}
</script>

<style>

</style>