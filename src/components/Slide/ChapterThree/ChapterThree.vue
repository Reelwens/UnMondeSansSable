<style scoped lang="scss" src="./ChapterThree.scss"></style>
<style scoped src="./hamburger.min.css"></style>

<template>
  <div class="slide-container">
    <header class="header-container">
      <div class="logo-container">
        <a class="logo-link" href="#"><span class="big">2050</span> : Pénurie de sable</a>
      </div>
      <div class="sound-container">
        <button class="sound-button"><img src="../../../assets/images/icons/sound.svg" alt="Sound button"></button>
      </div>
    </header>
    <div class="slides-container" v-bind:data-slide="slide_index">
      <div class="slides slide-1">
        <div class="slide-content-container">
          <video src="../../../../static/videos/chapter-3.mp4" autoplay loop poster="../../../assets/images/home/background-1.jpg"></video>
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
        <h2>Chapitre 3</h2>
        <h2 class="part">Des usages pharaoniques</h2>
      </div>
      <div class="footer-links">
        <div class="footer-links-container" v-bind:data-slide="slide_index">
          <div class="footer-link footer-link-1" @click="change_slide(0)">
            <div class="footer-link-inner">
            </div>
          </div>
          <div class="footer-link footer-link-2" @click="change_slide(1)">
            <div class="footer-link-inner">
            </div>
          </div>
          <div class="footer-link footer-link-3" @click="change_slide(2)">
            <div class="footer-link-inner">
            </div>
          </div>
          <div class="footer-link footer-link-4" @click="change_slide(3)">
            <div class="footer-link-inner">
            </div>
          </div>
          <div class="footer-link footer-link-5" @click="change_slide(4)">
            <div class="footer-link-inner">
            </div>
          </div>
          <div class="footer-link footer-link-6" @click="change_slide(5)">
            <div class="footer-link-inner">
            </div>
          </div>
          <div class="footer-link footer-link-7" @click="change_slide(6)">
            <div class="footer-link-inner">
            </div>
          </div>
        </div>
      </div>
      <div class="footer-menu">
        <div class="hamburger hamburger--slider" @click="change_menu" v-bind:class="is_active">
          <div class="hamburger-box">
            <div class="hamburger-inner hamburger--slider"></div>
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
      slide_index : 0,
      is_active : ''
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
    },
    change_slide(index) {
      this.slide_index = index
    },
    change_menu() {
      if(this.is_active === ''){
        this.is_active = 'is-active'
      } else{
        this.is_active = ''
      }
    }
  }
}

</script>
