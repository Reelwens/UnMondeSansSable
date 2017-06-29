<style scoped lang="scss" src="./ChapterTwo.scss"></style>

<template>
  <div class="slide-container" v-bind:class="{ 'video-ready' : video_ready }">
    <header class="header-container">
      <div class="logo-container">
        <a class="logo-link" href="#"><span class="big">2050</span> : Pénurie de sable</a>
      </div>
      <div class="sound-container">
        <button class="sound-button"><img src="../../../assets/images/icons/sound.svg" alt="Sound button"></button>
      </div>
    </header>
    <img class="image-placeholder" src="../../../assets/images/home/background-2.jpg">

    <div class="menu-container" v-bind:class="[{ 'active' : menu_active}, change_page]">
      <div @click="change_the_page(0)" class="menu-chapter menu-chapter-1">
        <div class="chapter-number">I</div>
        <div class="chapter-title">Souvenirs : Avant le pénurie</div>
        <img class="background" src="../../../assets/images/home/background-1.jpg">
      </div>
      <div @click="change_the_page(1)" class="menu-chapter menu-chapter-2">
        <div class="chapter-number">II</div>
        <div class="chapter-title">Inconscience : Une ressource surexploité</div>
        <img class="background" src="../../../assets/images/home/background-2.jpg">
      </div>
      <div @click="change_the_page(2)" class="menu-chapter menu-chapter-3">
        <div class="chapter-number">III</div>
        <div class="chapter-title">Folie : Le manque de place</div>
        <img class="background" src="../../../assets/images/home/background-3.jpg">
      </div>
      <div @click="change_the_page(3)" class="menu-chapter menu-chapter-4">
        <div class="chapter-number">IV</div>
        <div class="chapter-title">Dérive : Exploitation clandestine</div>
        <img class="background" src="../../../assets/images/home/background-4.jpg">
      </div>
      <div @click="change_the_page(4)" class="menu-chapter menu-chapter-5">
        <div class="chapter-number">V</div>
        <div class="chapter-title">Espoir : Perspective d'avenir</div>
        <img class="background" src="../../../assets/images/home/background-5.jpg">
      </div>
    </div>

    <div class="slides-container" v-bind:data-slide="slide_index">

      <div class="slides slide-1 slide-intro">
        <div class="slide-content-container">
        <div class="black-background"></div>
          <div class="text-content">
            <div class="chapter-number">II</div>
            <div class="chapter-title">Inconscience - Une ressource non renouvelable mais surexploitée</div>
            <div class="separator"></div>
            <p class="text-introduction">Le sable faisait rêver car il évoquait la plage, les vacances, les îles paradisiaques, mais l'envers du décor n'était peut-être pas aussi paradisiaque qu'il n'y paraissait.<br><br> Contrairement à l’or noir, le sable était perçu comme inépuisable et fut exploité à outrance</p>
          </div>
          <video ref="video" @canplay="hide_placeholder" src="../../../../static/videos/chapter-2.mp4" autoplay loop></video>
        </div>
      </div>

      <div v-bind:class="answer" class="slides slide-2 slide-quizz">
        <div class="slide-content-container">
          <div class="quizz-content">
            <div class="question-infos-container">
              <p class="quizz-question">Où trouve t-on le plus de sable dans le monde ?</p>
              <div class="answers-container">
                <div @click="wrong_answer" class="answer-case answer-1">Dans des carrières</div>
                <div @click="right_answer" class="answer-case answer-2">Dans les déserts</div>
                <div @click="wrong_answer" class="answer-case answer-3">Sur les plages</div>
                <div @click="wrong_answer" class="answer-case answer-4">Dans les rivières</div>
              </div>
            </div>
            <div class="answer-infos-container">
              <p class="right-answer-text">Bonne réponse</p>
              <p class="wrong-answer-text">Mauvaise réponse</p>
              <p class="answer-infos">Néanmoins le sable de désert, ne s'agrège pas et donc ne peut être utilisé pour la construction. Les promoteurs de Dubaï en ont fait les frais lorsqu'ils ont dus faire apporter du sable d’Australie alors qu’ils se trouvent au milieu du desert.</p>
            </div>
          </div>
          <img class="background" src="../../../assets/images/chapter-2/slide-2.jpg">
        </div>
      </div>

      <div class="slides slide-3 slide-data">
        <div class="slide-content-container">
          <p class="slide-title">Les ressources de sable dans le monde</p>
          <div class="data-container">
            <div class=" data data-1">
              <div class="number">120 millions de milliards</div>
              <div class="description">de tonnes de sable dans le monde</div>
            </div>
            <div class=" data data-2">
              <img class="graph" src="../../../assets/images/graphs/one-third.png">
              <div class="description">La sable représente 1/3 du total des sédiments dans le monde</div>
            </div>
            <div class=" data data-3">
              <img class="graph" src="../../../assets/images/graphs/85.png">
              <div class="description">Le désert contient 85,5% des reserves de sable exploitables</div>
            </div>
          </div>
          <div class="slide-description">
            Pour répondre à leurs besoins, les hommes se sont tournés vers d’autres sites que les déserts. En effet, le sable du désert est trop arrondi pour être utilisé en construction, contrairement aux grains issus des carrières, plus granuleux. L’extraction se concentra dans les rivières et les mers.
          </div>
          <img class="background" src="../../../assets/images/chapter-2/slide-3.jpg">
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
    </div>
    <footer>
      <div class="footer-title">
        <h2>Chapitre 2</h2>
        <h2 class="part">Une ressource surexploitée</h2>
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
        </div>
      </div>
      <div class="footer-menu" v-bind:class="{'menu-up' : menu_active}">
        <img @click="show_menu" class="burger menu" src="../../../assets/images/icons/burger.svg">
        <img @click="show_menu" class="burger cross" src="../../../assets/images/icons/cross.svg">
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
      is_active : '',
      video_ready: false,
      answer: '',
      menu_active: false,
      change_page: '',
      pages: ['ChapterOne','ChapterTwo','ChapterThree','ChapterFour','ChapterFive']
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

        _this.slide_up()

      } else if(lethargy.check(e) === -1 && _this.scrolling === false) {

        _this.slide_down()

      }
    })
  },
  methods: {

    slide_down() {

      if(this.slide_index != 4){
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

      },500)
    },

    change_slide(index) {
      this.slide_index = index
    },

    hide_placeholder () {
      this.video_ready = true
      this.$refs.video.play()
    },

    right_answer () {
      this.answer = 'right-answer';
    },

    wrong_answer () {
      this.answer = 'wrong-answer';
    },

    show_menu () {
      if(this.menu_active == false)
        this.menu_active = true
      else
        this.menu_active = false
    },

    change_the_page (index) {
      this.change_page = 'page-' + index

      let _this = this
      window.setTimeout( () => {
        _this.$router.push(_this.pages[index])
      }, 600)
    }
  }
}

</script>
