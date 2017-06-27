<style scoped lang="scss" src="./Home.scss"></style>

<template>
    <div class="background">
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      wesh: '',
      y : 1
    }
  },
  methods: {
    log() {
      this.wesh = 'wesh'
    },
    slide() {
      this.$router.push('Slide')
    }
  }

}
</script>
