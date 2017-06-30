<style scoped lang="scss" src="./ChapterThree.scss"></style>

<template>
  <div class="slide-container" v-bind:class="{ 'video-ready' : video_ready }">
    <header class="header-container">
      <div class="logo-container">
        <a class="logo-link" href="#"><img src="../../../assets/images/logo.png" alt="Logo"></a>
      </div>
      <div class="sound-container">
        <button class="sound-button"><img src="../../../assets/images/icons/sound.svg" alt="Sound button"></button>
      </div>
    </header>
    <img class="image-placeholder" src="../../../assets/images/home/background-3.jpg">

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
      <div class="menu-chapter menu-chapter-3">
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
            <div class="chapter-number">III</div>
            <div class="chapter-title">Folie - Des usages pharaoniques</div>
            <div class="separator"></div>
            <p class="text-introduction">Les villes du monde venaient à manquer de place, les buildings ne suffisaient plus, c’est pourquoi nous avons voulu faire reculer la mer.<br><br>Il n'y avait pas pire choix que celui-ci.</p>
          </div>
          <video ref="video" @canplay="hide_placeholder" src="../../../../static/videos/chapter-3.mp4" autoplay loop></video>
        </div>
      </div>

      <div class="slides slide-2 slide-def">
        <div class="slide-content-container">
          <div class="text-content">
            <div class="part-name">Introduction</div>
            <div class="text-separator"></div>
            <div class="main-text">La folie des grandeurs</div>
            <div class="text-description">Dubaï représentait peut-être la plus grande manifestation de notre inconscience. Face à une situation économique difficile et une soif de croissance insatisfaisable, Ils avaient décidé de construire des îles artificielles.<br>Le but : faire de Dubaï la destination touristique de luxe par excellence. C’était moins cher sur le court-terme que d’acheter des terres, mais le prix à payer fut fort sur le long-terme.</div>
          </div>
          <div class="picture-content">
            <img src="../../../assets/images/chapter-3/intro-pic.jpg" alt="Batiments">
          </div>
        </div>
      </div>

      <div class="slides slide-3 slide-data">
        <div class="slide-content-container">
          <div class="slide-content-container">
            <p class="slide-title">« C’était sûrement la façon la plus irresponsable pour l’environnement de dépenser nos ressources en sable. »</p>
            <div class="data-container">
              <div class=" data data-1">
                <div class="graph"></div>
                <div class="description">210 millions de m3 de mélange de sable et roches</div>
              </div>
              <div class=" data data-2">
                <div class="graph"></div>
                <div class="description">5.5 millions de m3 de roches provenant des carrières</div>
              </div>
              <div class=" data data-3">
                <div class="graph"></div>
                <div class="description">2/3 des constructions sont en bétôn armé</div>
              </div>
            </div>
            <img class="background" src="../../../assets/images/chapter-2/slide-3.jpg">
          </div>
        </div>
      </div>

      <div class="slides slide-4 slide-title">
        <p>« The World était sans nul doute la quintessence de cette démesure »</p>
      </div>

      <div class="slides slide-5 slide-video">
        <div class="slide-content-container">
          <div class="video-content">
            <video src="../../../../static/videos/chapter-3-slide-video.mp4" loop poster="posterimage.jpg" ref="slide2" v-on:play="seek"></video>
          </div>
          <div class="video-controller">
            <button type="button" name="button" @click="play_pause"><img v-bind:src="play_icon" alt="Bouton de lecture de la vidéo"></button>
            <div class="duration-controller">
              <div class="duration-controller-bar" ref="bar" @click="move_duration"></div>
              <div class="duration-controller-seek" ref="seek_bar" @click="move_duration"></div>
            </div>
            <span>{{ current_time }}/{{ duration }}</span>
          </div>
        </div>
      </div>

      <div v-bind:class="answer" class="slides slide-5 slide-quizz">
        <div class="slide-content-container">
          <div class="quizz-content">
            <div class="question-infos-container">
              <p class="quizz-question">Quelle est la superficie de Singapour ?</p>
              <div class="answers-container">
                <div @click="wrong_answer" class="answer-case answer-1">650m²</div>
                <div @click="right_answer" class="right-answer answer-case answer-2">750m²</div>
                <div @click="wrong_answer" class="answer-case answer-3">1360m²</div>
                <div @click="wrong_answer" class="answer-case answer-4">2680m²</div>
              </div>
            </div>
            <div class="answer-infos-container">
              <p class="right-answer-text">Bonne réponse</p>
              <p class="wrong-answer-text">Mauvaise réponse</p>
              <p class="answer-infos">L'expension de la cité-État à travers la conquête du sable fut très mal percue en Orient.</p>
            </div>
          </div>
          <img class="background" src="../../../assets/images/chapter-3/quizz-superficie.jpg">
        </div>
      </div>

      <div class="slides slide-6 slide-chiffres">
        <div class="slide-content-container">
          <div class="picture-content">
            <img src="../../../assets/images/chapter-3/singapour.jpg" alt="Carte de singapour">
          </div>

          <div class="text-content">
            <div class="main-text">
              L'expension de Singapour entre 2010 et 2030
            </div>
            <div class="text-description">
              Nous étions aussi fautif à Singapour, le problème de la surpopulation se faisait urgent, c’est pourquoi nous avons voulu agrandir la ville en mer<br>Nous décidions alors de récolter le sable sur les territoires marins des pays voisins, cela apporta son lot de conflits.<br>Les 5 pays voisins montèrent un embargo contre l'île, en vain.
            </div>
          </div>
        </div>
      </div>

      <div class="slides slide-7 slide-transition">
        <img class="background" src="../../../assets/images/home/background-4.jpg">
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
          <div class="footer-link footer-link-6" @click="change_slide(4)">
            <div class="footer-link-inner">
            </div>
          </div>
          <div class="footer-link footer-link-7" @click="change_slide(4)">
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
    <audio src="../../../../static/sounds/musics/chapter_3.mp3" loop autoplay ref="music"></audio>
    <audio src="../../../../static/sounds/musics/clic.mp3" ref="noise"></audio>
    <audio src="../../../../static/sounds/voices/chapter-3/1.mp3" ref="voice"></audio>
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
      current_time : '',
      answer : '',
      video_ready : false,
      menu_active : false,
      change_page: '',
      pages: ['ChapterOne','ChapterTwo','ChapterThree','ChapterFour','ChapterFive'],
      mute: false,
      audio : ''
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
        console.log('hello');

      }
    })

    if(this.slide_index == 0){
      this.audio = new Audio('../../../../static/sounds/voices/chapter-3/1.mp3')
      this.audio.autoplay = true
    }

    window.addEventListener('keydown', (e) => {

      if(e.keyCode === 39)
        _this.slide_down()
      else if(e.keyCode === 37)
        _this.slide_up()

    })
  },
  methods: {
    slide_down() {

      this.scroll_control()

      if(this.slide_index != 6){
          this.slide_index += 1
      } else if(this.slide_index == 6){

        this.slide_index += 1

        let _this = this
        window.setTimeout( () => {
          _this.$router.push(_this.pages[3])
        }, 600)
      }
      if(this.slide_index == 0){
        this.audio = new Audio('../../../../static/sounds/voices/chapter-3/1.mp3')
        this.audio.autoplay = true
      } else if(this.slide_index == 2 ){
        this.audio = new Audio('../../../../static/sounds/voices/chapter-3/2.mp3')
        this.audio.autoplay = true
      } else {
        this.audio.pause()
      }

      this.$refs.music.volume = 0.2;
      this.$refs.music.volume.play()
      this.$refs.voice.play()

      if(this.slide_index == 4){
        this.play()
      } else {
        this.pause()
      }

    },

    hide_placeholder () {
      this.video_ready = true
      this.$refs.video.play()
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

      if(this.slide_index == 0){
        this.audio = new Audio('../../../../static/sounds/voices/chapter-3/1.mp3')
        this.audio.autoplay = true
      } else if(this.slide_index == 2 ){
        this.audio = new Audio('../../../../static/sounds/voices/chapter-3/2.mp3')
        this.audio.autoplay = true
      } else {
        this.audio.pause()
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

      },500)
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
    },

    right_answer () {
      this.answer = 'right-answer';
    },

    wrong_answer () {
      this.answer = 'wrong-answer';
    }
  }
}

</script>
