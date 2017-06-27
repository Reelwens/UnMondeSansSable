<style scoped lang="scss" src="./Slide.scss"></style>

<template>
  <div>
    <transition name="appears">
      <div class="background">
        <h1>Chapitre 1 - Slide 1</h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      prev: '1',
      next : '2',
      scrolling : true,
      animation : ''
    }
  },
  created() {
    window.setTimeout( () => {
      this.scrolling = false
      this.animation = 'appears'
    }, 500)
  },
  mounted() {

    let lethargy = new Lethargy()

    let y = 1

    let _this = this

    window.addEventListener('mousewheel', (e) => {
      e.preventDefault()
      e.stopPropagation()

      // Scrolling down
      if(lethargy.check(e) === 1 && _this.scrolling === false){

        _this.slide_down()

      } else if(lethargy.check(e) === -1 && _this.scrolling === false) {

        _this.slide_up()

      }
    })
  },
  methods: {
    slide_down() {

      this.scroll_control()
      this.$router.push(this.next)

    },
    slide_up() {

      this.scroll_control()
      this.$router.push(this.prev)

    },
    scroll_control() {
      this.scrolling = true

      window.setTimeout(() => {

        this.scrolling = false

      },1000)
    }
  }
}

</script>
