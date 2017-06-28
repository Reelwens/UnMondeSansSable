<style scoped lang="scss" src="./ChapterOne.scss"></style>

<template>
  <div class="slide-container">
    <div class="slides-container">
      <div class="slides slide-1">
        <div class="slide-content-container">
          <video src="../../../../static/videos/home/chapter.mp4" autoplay poster="../../../assets/images/home/background-1.jpg">

          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      scrolling : true,
      animation : '',
      slide_index : 0
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

      if(this.slide_index != 7){
          this.slide_index += 1
      }
      this.scroll_control()

    },
    slide_up() {

      if(this.slide_index != 0){
          this.slide_index -= 1
      }
      this.scroll_control()

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
