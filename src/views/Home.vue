<template>
  <div class="Home">
    <div class="test">

    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    ceshi() {
      this.$serve.getUser().then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>