<style scoped lang="scss" src="./Home.scss"></style>

<template>
  <div v-bind:class="[{'change-page': change_page}, {'trailer-up': trailer_up}, {'trailer-done': trailer_done}]" class="home-container">

    <audio loop class="audio-music" ref="audioMusic" src="/static/sounds/musics/home.mp3"></audio>
    <audio class="audio-noise" ref="audioNoise" src="/static/sounds/noises/swipe.mp3"></audio>

    <div class="loader-container">
      <p>Loading...</p>
    </div>

    <div class="trailer-container">
      <video ref="trailer" @canplaythrough="hide_loader" @ended="hide_trailer" src="/static/videos/intro.mp4">Trailer de "2050 : Un monde sans sable"</video>
      <p @click="hide_trailer" class="skip-intro">Passer l'introduction</p>
    </div>

    <header class="header-container">
      <div class="logo-container">
        <a class="logo-link" href="#"><span class="big">2050</span> : Un monde sans sable</a>
      </div>
      <div class="sound-container">
        <button class="sound-button"><img src="../../assets/images/icons/sound.svg" alt="Sound button"></button>
      </div>
    </header>

    <div class="slider-container" v-bind:data-slide="slide_index">
      <div class="slides-container">
        <div class="slide slide-1" @click="change_the_page">
          <div class="slide-content-container">
            <img class="slide-background" src="../../assets/images/home/background-1.jpg">
            <p class="slide-chapter-number">Chapitre 01</p>
            <div class="slide-text-separator"></div>
            <h2 class="slide-text-title">Souvenirs</h2>
            <p class="slide-text-subtitle">Avant la pénurie</p>
          </div>
        </div>
        <div class="slide slide-2" @click="change_the_page">
          <div class="slide-content-container">
            <img class="slide-background" src="../../assets/images/home/background-2.jpg">
            <p class="slide-chapter-number">Chapitre 02</p>
            <div class="slide-text-separator"></div>
            <h2 class="slide-text-title">Inconscience</h2>
            <p class="slide-text-subtitle">Une ressource non-renouvable mais surexploité</p>
          </div>
        </div>
        <div class="slide slide-3" @click="change_the_page">
          <div class="slide-content-container">
            <img class="slide-background" src="../../assets/images/home/background-3.jpg">
            <p class="slide-chapter-number">Chapitre 03</p>
            <div class="slide-text-separator"></div>
            <h2 class="slide-text-title">Folie</h2>
            <p class="slide-text-subtitle">Des usages pharaoniques</p>
          </div>
        </div>
        <div class="slide slide-4" @click="change_the_page">
          <div class="slide-content-container">
            <img class="slide-background" src="../../assets/images/home/background-4.jpg">
            <p class="slide-chapter-number">Chapitre 04</p>
            <div class="slide-text-separator"></div>
            <h2 class="slide-text-title">Dérive</h2>
            <p class="slide-text-subtitle">L'exploitation clandestine</p>
          </div>
        </div>
        <div class="slide slide-5" @click="change_the_page">
          <div class="slide-content-container">
            <img class="slide-background" src="../../assets/images/home/background-5.jpg">
            <p class="slide-chapter-number">Chapitre 05</p>
            <div class="slide-text-separator"></div>
            <h2 class="slide-text-title">Espoir</h2>
            <p class="slide-text-subtitle">Perspectives d'avenir</p>
          </div>
        </div>
      </div>

      <div @click="next_slide" class="nav-button-right nav-button"><img src="../../assets/images/icons/arrow-right.svg" alt="Arrow right"></div>
      <div @click="previous_slide" class="nav-button-left nav-button"><img src="../../assets/images/icons/arrow-left.svg" alt="Arrow left"></div>

      <div class="backgrounds-container" v-bind:data-slide="slide_index">
        <video autoplay loop class="background background-1" src="/static/videos/chapter-1.mp4">Le desert de Dubaï</video>
        <video autoplay loop class="background background-2" src="/static/videos/chapter-2.mp4">Le desert de Dubaï</video>
        <video autoplay loop class="background background-3" src="/static/videos/chapter-3.mp4">Le desert de Dubaï</video>
        <video autoplay loop class="background background-4" src="/static/videos/chapter-4.mp4">Le desert de Dubaï</video>
        <video autoplay loop class="background background-5" src="/static/videos/chapter-5.mp4">Le desert de Dubaï</video>
        <div class="background-black-overlay"></div>
      </div>

      <a class="discover-button" href="#">
        <img src="../../assets/images/icons/mouse.svg" alt="Mouse">
        <p>Dérouler pour découvrir</p>
      </a>
    </div>

    <div class="navbar-container" v-bind:data-slide="slide_index">
      <p class="navbar-title">Chapitres</p>

      <nav class="navbar-nav">
        <ul>
          <li><a class="nav-link" @click="change_slide(0)" href="#" data-index="0">I</a></li>
          <li>
            <div class="nav-separator">
              <div class="separator-dot"></div>
              <div class="separator-dot"></div>
              <div class="separator-dot"></div>
            </div>
          </li>
          <li><a class="nav-link" @click="change_slide(1)" href="#" data-index="1">II</a></li>
          <li>
            <div class="nav-separator">
              <div class="separator-dot"></div>
              <div class="separator-dot"></div>
              <div class="separator-dot"></div>
            </div>
          </li>
          <li><a class="nav-link" @click="change_slide(2)" href="#" data-index="2">III</a></li>
          <li>
            <div class="nav-separator">
              <div class="separator-dot"></div>
              <div class="separator-dot"></div>
              <div class="separator-dot"></div>
            </div>
          </li>
          <li><a class="nav-link" @click="change_slide(3)" href="#" data-index="3">IV</a></li>
          <li>
            <div class="nav-separator">
              <div class="separator-dot"></div>
              <div class="separator-dot"></div>
              <div class="separator-dot"></div>
            </div>
          </li>
          <li><a class="nav-link" @click="change_slide(4)" href="#" data-index="4">V</a></li>
        </ul>
      </nav>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      slide_index: 0,
      change_page: false,
      trailer_up: false,
      trailer_done: false,
      scroll_allowed: true,
      pages: ['ChapterOne','ChapterTwo','ChapterThree','ChapterFour','ChapterFive']
    }
  },

  mounted() {

    let lethargy = new Lethargy(7, 100, 0.05)

    window.addEventListener('mousewheel', (e) => {
        e.preventDefault()
        e.stopPropagation()
        if(lethargy.check(e) !== -1) {
            this.change_the_page()
        }
    })

    window.addEventListener('keydown', (e) => {


      if(e.keyCode === 39)
        this.next_slide()
      else if(e.keyCode === 37)
        this.previous_slide()

    })

  },

  methods: {

    next_slide () {
      if (this.slide_index != 4) {
        this.slide_index ++
        this.change_slide(this.slide_index)
      }
    },

    previous_slide () {
      if (this.slide_index != 0) {
        this.slide_index --
        this.change_slide(this.slide_index)
      }
    },

    change_slide (index) {
      this.slide_index = index

      this.$refs.audioNoise.load()
      this.$refs.audioNoise.src = '/static/sounds/noises/clic.mp3';
      this.$refs.audioNoise.play()
    },

    change_the_page () {
      if (this.scroll_allowed == true && this.trailer_done == true) {
        this.change_page = true
        this.scroll_allowed = false

        this.$refs.audioNoise.load()
        this.$refs.audioNoise.src = '/static/sounds/noises/swipe.mp3';
        this.$refs.audioNoise.play()

        let _this = this
        window.setTimeout( () => {
          _this.$router.push(_this.pages[_this.slide_index])
        }, 600)
      }
    },

    hide_loader () {
      this.trailer_up = true
      this.$refs.trailer.play()
    },

    hide_trailer () {
      this.trailer_done = true
      this.$refs.trailer.pause()
      this.$refs.audioMusic.play()
    },


  }
}
</script>
