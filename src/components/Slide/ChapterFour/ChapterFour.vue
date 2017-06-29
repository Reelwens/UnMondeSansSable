@@ -1,373 +0,0 @@
<style scoped lang="scss" src="./ChapterFour.scss"></style>

<template>
  <div class="slide-container" v-bind:class="{ 'video-ready' : video_ready }">
    <header class="header-container">
      <div class="logo-container">
        <a class="logo-link" href="#"><span class="big">2050</span> : Un monde sans sable</a>
      </div>
      <div class="sound-container">
        <button class="sound-button"><img src="../../../assets/images/icons/sound.svg" alt="Sound button"></button>
      </div>
    </header>

    <img class="image-placeholder" src="../../../assets/images/home/background-4.jpg">

    <div class="menu-container" v-bind:class="[{ 'active' : menu_active}, change_page]">
      <div @click="change_the_page(0)" class="menu-chapter menu-chapter-1">
        <div class="chapter-number">I</div>
        <div class="chapter-title">Souvenirs : Avant le pénurie</div>
        <img class="background" src="../../../assets/images/home/background-1.jpg">
      </div>
      <div class="menu-chapter menu-chapter-2">
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
            <div class="chapter-number">IV</div>
            <div class="chapter-title">Dérive - L'exploitation clandestine</div>
            <div class="separator"></div>
            <p class="text-introduction">Cette surexploitation du sable sous entendait la raréfaction de cette ressource si précieuse. Ainsi, les prix augmentèrent de manière exponentielle.<br><br>Cette surenchère donna naissance à une mafia du sable, qui sévissait particulièrement en Asie. On la retrouvait également en Inde et au Maroc.</p>
          </div>
          <video ref="video" @canplay="hide_placeholder" src="../../../../static/videos/chapter-4.mp4" autoplay loop></video>
        </div>
      </div>

      <div class="slides slide-2 slide-data">
        <div class="slide-content-container">
          <div class="slide-content-container">
            <p class="slide-title">Le sable était si cher qu’il était difficile de s’en procurer, nous ne reconnaissons que maintenant que sa valeur n’avait pas de prix.</p>
            <div class="data-container">
              <div class=" data data-1">
                <div class="number">50€</div>
                <div class="description">pour l’achat d’un mètre cube de sable</div>
              </div>
              <div class=" data data-2">
                <div class="number">70 Md$</div>
                <div class="description">comme chiffre d’affaires du marché du sable</div>
              </div>
            </div>
            <div class="slide-description">
              La forte demande du sable, associée à sa rareté, est à l’origine de gros échanges internationaux.
            </div>
            <img class="background" src="../../../assets/images/chapter-2/slide-3.jpg">
          </div>
        </div>
      </div>
      
      <div class="slides slide-3 slide-def">
        <div class="slide-content-container">
            <div class="text-content">
              <div class="main-text">Le business du sable en Asie</div>
              <div class="text-description">Le continent asiatique vivait un rythme de construction vertigineux car sa population avait augmenté de 20 % en l'espace de quarante ans.<br>Un commerce parallèle s’était notamment mis en place en Inde, où l’exploitation illégale y était monnaie courante.</div>
            </div>
            <div class="picture-content">
              <img src="../../../assets/images/chapter-4/illegal.jpg" alt="Sand illegal">
            </div>
        </div>
      </div>
      
      <div v-bind:class="answer" class="slides slide-4 slide-quizz">
        <div class="slide-content-container">
          <div class="quizz-content">
            <div class="question-infos-container">
              <p class="quizz-question">Combien de tonnes de sable sont exploitées illégalement chaque année en Inde ?</p>
              <div class="answers-container">
                <div @click="wrong_answer" class="answer-case answer-1">1 tonne</div>
                <div @click="wrong_answer" class="answer-case answer-2">2 mns de tonnes</div>
                <div @click="wrong_answer" class="answer-case answer-3">200 mns de tonnes</div>
                <div @click="right_answer" class="answer-case answer-4">2 mds de tonnes</div>
              </div>
            </div>
            <div class="answer-infos-container">
              <p class="right-answer-text">Bonne réponse</p>
              <p class="wrong-answer-text">Mauvaise réponse</p>
              <p class="answer-infos">L'importation illégale de sable fait rage et impacte sa régulation. Chaque année, 2 milliards de tonnes de sable sont exploitées illégalement en Inde.</p>
            </div>
          </div>
          <img class="background" src="../../../assets/images/chapter-1/slide-quizz.jpg">
        </div>
      </div>
      
      <div class="slides slide-5 slide-video">
        <div class="slide-content-container">
          <div class="video-content">
            <video src="../../../../static/videos/chapter-4-slide-video.mp4" loop poster="posterimage.jpg" ref="slide2" v-on:play="seek"></video>
          </div>
          <div class="video-controller">
            <button type="button" name="button" @click="play_pause"><img v-bind:src="play_icon" alt="Bouton de lecture de la vidéo"></button>
            <div class="duration-controller">
              <div class="duration-controller-bar" ref="bar" @click="move_duration"></div>
              <div class="duration-controller-seek" ref="seek_bar" @click="move_duration"></div>
            </div>
            <span>{{ current_time }}/{{ duration }}</span>
          </div>
          <div class="video-title">
          </div>
        </div>
      </div>

      <div class="slides slide-6 slide-def">
        <div class="slide-content-container">

        </div>
      </div>
      <div class="slides slide-7">
        <div class="slide-content-container">
          <div class="text-content">
            <div class="main-text">Le vol du sable marocain</div>
            <div class="text-description">Au Maroc le tourisme était alors en plein essor, la surexploitation du sable était donc à son paroxysme. On estimait que 40 % du sable utilisé avait été volé sur les plages marocaines.<br>De plus, celui-ci était bien souvent mal traité. Il n’était donc pas débarrassé du sodium présent dans l’eau de mer, ce qui rendait les constructions vulnérables à la corrosion.</div>
          </div>
          <div class="picture-content">
              <img src="../../../assets/images/chapter-4/marocain.jpg" alt="Sand illegal">
          </div>
        </div>
      </div>
      
    </div>
    <footer>
      <div class="footer-title">
        <h2>Chapitre 4</h2>
        <h2 class="part">Exploitation clandestine</h2>
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
      play_icon : '../../../assets/images/icons/play.svg',
      ratio : 0,
      duration_minutes : 0,
      duration_seconds : 0,
      duration : '',
      current_minutes : 0,
      current_seconds : 0,
      answer: '',
      current_time : '',
      video_ready: false,
      menu_active: false,
      change_page: '',
      pages: ['ChapterOne','ChapterTwo','ChapterThree','ChapterFour','ChapterFive'],
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

    window.addEventListener('keydown', (e) => {


      if(e.keyCode === 39)
        _this.slide_down()
      else if(e.keyCode === 37)
        _this.slide_up()

    })
  },
  methods: {
    slide_down() {

      if(this.slide_index != 5){
          this.slide_index += 1
      }
      if(this.slide_index == 4){
        this.play()
      } else {
        this.pause()
      }
      this.scroll_control()

    },
    right_answer () {
      this.answer = 'right-answer';
    },

    wrong_answer () {
      this.answer = 'wrong-answer';
    },

    slide_up() {

      if(this.slide_index != 0){
          this.slide_index -= 1
      }
      if(this.slide_index == 4){
        this.play()
      } else {
        this.pause()
      }
      this.scroll_control()

    },

    scroll_control() {
      this.duration_minutes = Math.floor(this.$refs.slide2.duration/60)
      this.duration_seconds = Math.floor(this.$refs.slide2.duration%60)

      this.duration = '' + this.duration_minutes + ':' + (this.duration_seconds < 10 ? '0' : '') + '' + this.duration_seconds

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
    },

    hide_placeholder () {
      this.video_ready = true
      this.$refs.video.play()
    },

    play_pause() {
      if(this.$refs.slide2.paused == false){
        this.pause()
      } else {
        this.play()
      }
    },

    play() {
      this.play_icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUzNS41NzggNTM1LjU3OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTM1LjU3OCA1MzUuNTc4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTIzMS42LDUxNi4yNzhjMCwxMC42NTgtOC42NDEsMTkuMy0xOS4zLDE5LjNIMTA2LjE1Yy0xMC42NTksMC0xOS4zLTguNjQxLTE5LjMtMTkuM1YxOS4zICAgICBjMC0xMC42NTksOC42NDEtMTkuMywxOS4zLTE5LjNoMTA2LjE1YzEwLjY1OSwwLDE5LjMsOC42NDEsMTkuMywxOS4zVjUxNi4yNzh6IiBmaWxsPSIjZmVmZWZlIi8+CgkJCTxwYXRoIGQ9Ik00NDguNzI4LDUxNi4yNzhjMCwxMC42NTgtOC42NDEsMTkuMy0xOS4zLDE5LjNoLTEwNi4xNWMtMTAuNjU5LDAtMTkuMy04LjY0MS0xOS4zLTE5LjNWMTkuMyAgICAgYzAtMTAuNjU5LDguNjQxLTE5LjMsMTkuMy0xOS4zaDEwNi4xNWMxMC42NTksMCwxOS4zLDguNjQxLDE5LjMsMTkuM1Y1MTYuMjc4eiIgZmlsbD0iI2ZlZmVmZSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
      this.$refs.slide2.play()
    },
    pause() {
      this.play_icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxLjk5OSA0MS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxLjk5OSA0MS45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBkPSJNMzYuMDY4LDIwLjE3NmwtMjktMjBDNi43NjEtMC4wMzUsNi4zNjMtMC4wNTcsNi4wMzUsMC4xMTRDNS43MDYsMC4yODcsNS41LDAuNjI3LDUuNSwwLjk5OXY0MCAgYzAsMC4zNzIsMC4yMDYsMC43MTMsMC41MzUsMC44ODZjMC4xNDYsMC4wNzYsMC4zMDYsMC4xMTQsMC40NjUsMC4xMTRjMC4xOTksMCwwLjM5Ny0wLjA2LDAuNTY4LTAuMTc3bDI5LTIwICBjMC4yNzEtMC4xODcsMC40MzItMC40OTQsMC40MzItMC44MjNTMzYuMzM4LDIwLjM2MywzNi4wNjgsMjAuMTc2eiIgZmlsbD0iI2ZlZmVmZSIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
      this.$refs.slide2.pause()
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
    },

    seek() {
      let _this = this
      window.setInterval(() => {

        _this.seek_animation()

        _this.current_minutes = Math.floor(_this.$refs.slide2.currentTime/60)
        _this.current_seconds = Math.floor(_this.$refs.slide2.currentTime%60)

        _this.current_time = '' + _this.current_minutes + ':' + (_this.current_seconds < 10 ? '0' : '') + '' + _this.current_seconds

      }, 100)
    },

    move_duration(event) {
      let rect = this.$refs.bar.getBoundingClientRect()
      this.$refs.slide2.currentTime = ((event.clientX - rect.left ) / this.$refs.bar.offsetWidth ) * this.$refs.slide2.duration
      this.seek_animation()
    },

    seek_animation() {
      this.ratio = this.$refs.slide2.currentTime/this.$refs.slide2.duration
      this.$refs.seek_bar.style.transform = `scaleX(${this.ratio})`
    }
  }
}

</script>