<style scoped lang="scss" src="./ChapterOne.scss"></style>

<template>
  <div class="slide-container">
    <div class="slides-container" v-bind:data-slide="slide_index">
      <div class="slides slide-1">
        <div class="slide-content-container">
          <video src="../../../../static/videos/chapter-1.mp4" autoplay loop poster="../../../assets/images/home/background-1.jpg"></video>
        </div>
      </div>
      <div class="slides slide-2">
        <div class="slide-content-container">

        </div>
      </div>
      <div class="slides slide-3">
        <div class="slide-content-container">

        </div>
      </div>
      <div class="slides slide-4">
        <div class="slide-content-container">

        </div>
      </div>
      <div class="slides slide-5">
        <div class="slide-content-container">

        </div>
      </div>
      <div class="slides slide-6">
        <div class="slide-content-container">

        </div>
      </div>
      <div class="slides slide-7">
        <div class="slide-content-container">

        </div>
      </div>
    </div>
    <footer>
      <div class="footer-title">
        <h2>Chapitre 1</h2>
        <h2 class="part">Avant la pénurie de l'eau</h2>
      </div>
      <div class="footer-links">
        <div class="footer-links-container" v-bind:data-slide="slide_index">
          <div class="footer-link footer-link-1">
            <div class="footer-link-inner">
            </div>
          </div>
        </div>
      </div>
    </footer>
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

      if(this.slide_index != 6){
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
