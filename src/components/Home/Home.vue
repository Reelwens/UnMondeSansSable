<style scoped lang="scss" src="./Home.scss"></style>

<template>
  <div v-bind:class="{'change-page': change_page}" class="home-container">
    
    <header class="header-container">
      <div class="logo-container">
        <a class="logo-link" href="#"><span class="big">2050</span> : Pénurie de sable</a>
      </div>
      <div class="sound-container">
        <button class="sound-button"><img src="../../assets/images/icons/sound.svg" alt="Sound button"></button>
      </div>
    </header>

    <div class="slider-container" v-bind:data-slide="slide_index">
      <div class="slides-container">
        <div class="slide slide-1">
          <div class="slide-content-container">
            <img class="slide-background" src="../../assets/images/home/background-1.jpg">
            <p class="slide-chapter-number">Chapter 01</p>
            <div class="slide-text-separator"></div>
            <h2 class="slide-text-title">Souvenirs</h2>
            <p class="slide-text-subtitle">Le sable : une ressource inestimable</p>
          </div>
        </div>
        <div class="slide slide-2">
          <div class="slide-content-container">
            <img class="slide-background" src="../../assets/images/home/background-2.jpg">
            <p class="slide-chapter-number">Chapter 02</p>
            <div class="slide-text-separator"></div>
            <h2 class="slide-text-title">Inconscience</h2>
            <p class="slide-text-subtitle">Une ressource non-renouvable mais surexploité</p>
          </div>
        </div>
        <div class="slide slide-3">
          <div class="slide-content-container">
            <img class="slide-background" src="../../assets/images/home/background-3.jpg">
            <p class="slide-chapter-number">Chapter 03</p>
            <div class="slide-text-separator"></div>
            <h2 class="slide-text-title">Folie</h2>
            <p class="slide-text-subtitle">Des usages pharaoniques</p>
          </div>
        </div>
        <div class="slide slide-4">
          <div class="slide-content-container">
            <img class="slide-background" src="../../assets/images/home/background-4.jpg">
            <p class="slide-chapter-number">Chapter 04</p>
            <div class="slide-text-separator"></div>
            <h2 class="slide-text-title">Dérive</h2>
            <p class="slide-text-subtitle">L'exploitation clandestine</p>
          </div>
        </div>
        <div class="slide slide-5">
          <div class="slide-content-container">
            <img class="slide-background" src="../../assets/images/home/background-5.jpg">
            <p class="slide-chapter-number">Chapter 05</p>
            <div class="slide-text-separator"></div>
            <h2 class="slide-text-title">Espoir</h2>
            <p class="slide-text-subtitle">Perspectives d'avenir</p>
          </div>
        </div>
      </div>

      <div @click="next_slide" class="nav-button-right nav-button"><img src="../../assets/images/icons/arrow-right.svg" alt="Arrow right"></div>
      <div @click="previous_slide" class="nav-button-left nav-button"><img src="../../assets/images/icons/arrow-left.svg" alt="Arrow left"></div>

      <div class="backgrounds-container">
        <video autoplay loop class="background background-1" src="/static/videos/home/chapter.mp4">Le desert de Dubaï</video>
        <img class="background background-2" src="../../assets/images/home/background-2.jpg">
        <img class="background background-3" src="../../assets/images/home/background-3.jpg">
        <img class="background background-4" src="../../assets/images/home/background-4.jpg">
        <img class="background background-5" src="../../assets/images/home/background-5.jpg">
        <div class="background-black-overlay"></div>
      </div>
      
      <a class="discover-button main-button" href="#">Discover</a>
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
      scroll_allowed: true
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
    });

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
    },

    change_the_page () {
      if (this.scroll_allowed == true) {
        this.change_page = true
        this.scroll_allowed = false
      }
    }

  }
}
</script>
