<style scoped lang="scss" src="./ChapterTwo.scss"></style>

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
    <img class="image-placeholder" src="../../../assets/images/home/background-2.jpg">

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
            <div class="chapter-number">II</div>
            <div class="chapter-title">Inconscience - Une ressource non renouvelable mais surexploitée</div>
            <div class="separator"></div>
            <p class="text-introduction">Dans une course effrénée à la croissance, l’homme ne se rendait pas compte des conséquences de ses actes. Le sable n’était pas une ressource infinie, mais personne ne s’en souciait.<br><br> Ce désir de surexploiter, nous mena à puiser inconsciemment les ressources disponibles.</p>
          </div>
          <video ref="video" @canplay="hide_placeholder" src="../../../../static/videos/chapter-2.mp4" autoplay loop></video>
        </div>
      </div>

      <div class="slides slide-2 slide-video">
        <div class="slide-content-container">
          <div class="video-content">
            <video src="../../../../static/videos/chapter-2-slide-video.mp4" loop poster="posterimage.jpg" ref="slide2" v-on:play="seek"></video>
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

      <div v-bind:class="answer" class="slides slide-3 slide-quizz">
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
      <div class="slides slide-4 slide-data">
        <div class="slide-content-container">
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
      </div>
      <div class="slides slide-5 slide-def">
        <div class="slide-content-container">
          <div class="slide-content-container">
            <div class="text-content">
              <div class="main-text">Une extraction surréaliste</div>
              <div class="text-description">Pour répondre à leurs besoins, les hommes se sont tournés vers d’autres sites que les déserts. En effet, le sable du désert est trop arrondi pour être utilisé en construction, contrairement aux grains issus des carrières, plus granuleux. L’extraction se concentra dans les rivières et les mers.</div>
            </div>
            <div class="picture-content">
              <img src="../../../assets/images/chapter-2/slide-4.jpg" alt="Sand definition">
            </div>
          </div>
        </div>
      </div>
      <div class="slides slide-6 slide-video">
        <div class="slide-content-container">
          <div class="video-content">
            <video src="../../../../static/videos/chapter-2-slide-video2.mp4" loop poster="posterimage.jpg" ref="slide3" v-on:play="seek2"></video>
          </div>
          <div class="video-controller">
            <button type="button" name="button" @click="play_pause2"><img v-bind:src="play_icon" alt="Bouton de lecture de la vidéo"></button>
            <div class="duration-controller">
              <div class="duration-controller-bar" ref="bar2" @click="move_duration2"></div>
              <div class="duration-controller-seek" ref="seek_bar2" @click="move_duration2"></div>
            </div>
            <span>{{ current_time2 }}/{{ duration2 }}</span>
          </div>
        </div>
      </div>
      <div class="slides slide-7">
        <div class="slide-content-container">
          <div class="slide-content-container">
            <p class="slide-title">Les conséquences sur les littoraux</p>
            <div class="data-container">
              <div class=" data data-1" id="data-1">
                <div class="number">¼ du littoral français</div>
                <div class="description"> est en voie de disparition</div>
              </div>
              <div class=" data data-2" id="data-2">
                <div class="number">9 plages sur 10</div>
                <div class="description">en Floride risquent de disparaître.</div>
              </div>
            </div>
            <div class="slide-description">
              Cette consommation abusive a eu pour première conséquence de faire disparaître nos plages, la première catastrophe écologique alarmante.
            </div>
            <img class="background" src="../../../assets/images/chapter-2/slide-3.jpg">
          </div>
        </div>
      </div>
      <div class="slides slide-8 slide-video">
        <div class="slide-content-container">
          <div class="video-content">
            <video src="../../../../static/videos/chapter-2-slide-video3.mp4" loop poster="posterimage.jpg" ref="slide4" v-on:play="seek3"></video>
          </div>
          <div class="video-controller">
            <button type="button" name="button" @click="play_pause3"><img v-bind:src="play_icon" alt="Bouton de lecture de la vidéo"></button>
            <div class="duration-controller">
              <div class="duration-controller-bar" ref="bar3" @click="move_duration3"></div>
              <div class="duration-controller-seek" ref="seek_bar3" @click="move_duration3"></div>
            </div>
            <span>{{ current_time3 }}/{{ duration3 }}</span>
          </div>
        </div>
      </div>
      <div class="slides slide-9 slide-def">
        <div class="slide-content-container">
          <div class="slide-content-container">
            <div class="text-content">
              <div class="main-text" id="main">Panique en mer, la biodiversité menacée</div>
              <div class="text-description" id="description">En extrayant du sable en mer, différents organismes vivants ont été arrachés à leur milieu. De plus, cette mobilisation du sable entraina un trouble des eaux. La lumière vitale de toutes les espèces marines fut masquée.
En outre, cela affecta certaines populations, à l’image de l’Indonésie où de nombreuses familles vivaient de la pêche.
</div>
            </div>
            <div class="picture-content">
              <img src="../../../assets/images/chapter-2/slide-9.jpg" alt="Sand definition">
            </div>
          </div>
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
          <div class="footer-link footer-link-5" @click="change_slide(5)">
            <div class="footer-link-inner">
            </div>
          </div>
          <div class="footer-link footer-link-6" @click="change_slide(6)">
            <div class="footer-link-inner">
            </div>
          </div>
          <div class="footer-link footer-link-7" @click="change_slide(7)">
            <div class="footer-link-inner">
            </div>
          </div>
          <div class="footer-link footer-link-8" @click="change_slide(8)">
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
    <audio src="../../../../static/sounds/musics/chapter_2.mp3" loop autoplay ref="music"></audio>
    <audio src="../../../../static/sounds/musics/.mp3" ref="noise"></audio>
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
      pages: ['ChapterOne','ChapterTwo','ChapterThree','ChapterFour','ChapterFive'],
      play_icon : '../../../assets/images/icons/play.svg',
      ratio : 0,
      duration_minutes : 0,
      duration_seconds : 0,
      duration : '',
      current_minutes : 0,
      current_seconds : 0,
      current_time : '',
      answer : '',
      ratio2 : 0,
      duration_minutes2 : 0,
      duration_seconds2 : 0,
      duration2 : '',
      current_minutes2 : 0,
      current_seconds2 : 0,
      current_time2 : '',
      ratio3 : 0,
      duration_minutes3 : 0,
      duration_seconds3 : 0,
      duration3 : '',
      current_minutes3 : 0,
      current_seconds3 : 0,
      current_time3 : '',
      volume : 0.5
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

      if(this.slide_index != 8){
          this.slide_index += 1
      }
      if(this.slide_index == 1){
        this.play()
      } else {
        this.pause()
      }
      if(this.slide_index == 5){
        this.play2()
      } else {
        this.pause2()
      }
      if(this.slide_index == 7){
        this.play3()
      } else {
        this.pause3()
      }
      this.scroll_control()

    },

    slide_up() {

      if(this.slide_index != 0){
          this.slide_index -= 1
      }
      if(this.slide_index == 1){
        this.play()
      } else {
        this.pause()
      }
      if(this.slide_index == 5){
        this.play2()
      } else {
        this.pause2()
      }
      if(this.slide_index == 7){
        this.play3()
      } else {
        this.pause3()
      }
      this.scroll_control()

    },

    scroll_control() {
      this.duration_minutes = Math.floor(this.$refs.slide2.duration/60)
      this.duration_seconds = Math.floor(this.$refs.slide2.duration%60)

      this.duration = '' + this.duration_minutes + ':' + (this.duration_seconds < 10 ? '0' : '') + '' + this.duration_seconds

      this.duration_minutes2 = Math.floor(this.$refs.slide3.duration/60)
      this.duration_seconds2 = Math.floor(this.$refs.slide3.duration%60)

      this.duration2 = '' + this.duration_minutes2 + ':' + (this.duration_seconds2 < 10 ? '0' : '') + '' + this.duration_seconds2

      this.duration_minutes3 = Math.floor(this.$refs.slide4.duration/60)
      this.duration_seconds3 = Math.floor(this.$refs.slide4.duration%60)

      this.duration3 = '' + this.duration_minutes3 + ':' + (this.duration_seconds3 < 10 ? '0' : '') + '' + this.duration_seconds3

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
      this.volume = 0
      this.$refs.music.volume = this.volume
    },
    pause() {
      this.play_icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxLjk5OSA0MS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxLjk5OSA0MS45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBkPSJNMzYuMDY4LDIwLjE3NmwtMjktMjBDNi43NjEtMC4wMzUsNi4zNjMtMC4wNTcsNi4wMzUsMC4xMTRDNS43MDYsMC4yODcsNS41LDAuNjI3LDUuNSwwLjk5OXY0MCAgYzAsMC4zNzIsMC4yMDYsMC43MTMsMC41MzUsMC44ODZjMC4xNDYsMC4wNzYsMC4zMDYsMC4xMTQsMC40NjUsMC4xMTRjMC4xOTksMCwwLjM5Ny0wLjA2LDAuNTY4LTAuMTc3bDI5LTIwICBjMC4yNzEtMC4xODcsMC40MzItMC40OTQsMC40MzItMC44MjNTMzYuMzM4LDIwLjM2MywzNi4wNjgsMjAuMTc2eiIgZmlsbD0iI2ZlZmVmZSIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
      this.$refs.slide2.pause()
      this.volume = 0.5
      this.$refs.music.volume = this.volume
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
    play_pause2() {
      if(this.$refs.slide3.paused == false){
        this.pause2()
      } else {
        this.play2()
      }
    },
    play_pause3() {
      if(this.$refs.slide4.paused == false){
        this.pause3()
      } else {
        this.play3()
      }
    },
    play2() {
      this.volume = 0
      this.$refs.music.volume = this.volume
      this.play_icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUzNS41NzggNTM1LjU3OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTM1LjU3OCA1MzUuNTc4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTIzMS42LDUxNi4yNzhjMCwxMC42NTgtOC42NDEsMTkuMy0xOS4zLDE5LjNIMTA2LjE1Yy0xMC42NTksMC0xOS4zLTguNjQxLTE5LjMtMTkuM1YxOS4zICAgICBjMC0xMC42NTksOC42NDEtMTkuMywxOS4zLTE5LjNoMTA2LjE1YzEwLjY1OSwwLDE5LjMsOC42NDEsMTkuMywxOS4zVjUxNi4yNzh6IiBmaWxsPSIjZmVmZWZlIi8+CgkJCTxwYXRoIGQ9Ik00NDguNzI4LDUxNi4yNzhjMCwxMC42NTgtOC42NDEsMTkuMy0xOS4zLDE5LjNoLTEwNi4xNWMtMTAuNjU5LDAtMTkuMy04LjY0MS0xOS4zLTE5LjNWMTkuMyAgICAgYzAtMTAuNjU5LDguNjQxLTE5LjMsMTkuMy0xOS4zaDEwNi4xNWMxMC42NTksMCwxOS4zLDguNjQxLDE5LjMsMTkuM1Y1MTYuMjc4eiIgZmlsbD0iI2ZlZmVmZSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
      this.$refs.slide3.play()
    },
    play3() {
      this.volume = 0
      this.$refs.music.volume = this.volume
      this.play_icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUzNS41NzggNTM1LjU3OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTM1LjU3OCA1MzUuNTc4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTIzMS42LDUxNi4yNzhjMCwxMC42NTgtOC42NDEsMTkuMy0xOS4zLDE5LjNIMTA2LjE1Yy0xMC42NTksMC0xOS4zLTguNjQxLTE5LjMtMTkuM1YxOS4zICAgICBjMC0xMC42NTksOC42NDEtMTkuMywxOS4zLTE5LjNoMTA2LjE1YzEwLjY1OSwwLDE5LjMsOC42NDEsMTkuMywxOS4zVjUxNi4yNzh6IiBmaWxsPSIjZmVmZWZlIi8+CgkJCTxwYXRoIGQ9Ik00NDguNzI4LDUxNi4yNzhjMCwxMC42NTgtOC42NDEsMTkuMy0xOS4zLDE5LjNoLTEwNi4xNWMtMTAuNjU5LDAtMTkuMy04LjY0MS0xOS4zLTE5LjNWMTkuMyAgICAgYzAtMTAuNjU5LDguNjQxLTE5LjMsMTkuMy0xOS4zaDEwNi4xNWMxMC42NTksMCwxOS4zLDguNjQxLDE5LjMsMTkuM1Y1MTYuMjc4eiIgZmlsbD0iI2ZlZmVmZSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
      this.$refs.slide4.play()
    },
    pause2() {
      this.volume = 0.5
      this.$refs.music.volume = this.volume
      this.play_icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxLjk5OSA0MS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxLjk5OSA0MS45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBkPSJNMzYuMDY4LDIwLjE3NmwtMjktMjBDNi43NjEtMC4wMzUsNi4zNjMtMC4wNTcsNi4wMzUsMC4xMTRDNS43MDYsMC4yODcsNS41LDAuNjI3LDUuNSwwLjk5OXY0MCAgYzAsMC4zNzIsMC4yMDYsMC43MTMsMC41MzUsMC44ODZjMC4xNDYsMC4wNzYsMC4zMDYsMC4xMTQsMC40NjUsMC4xMTRjMC4xOTksMCwwLjM5Ny0wLjA2LDAuNTY4LTAuMTc3bDI5LTIwICBjMC4yNzEtMC4xODcsMC40MzItMC40OTQsMC40MzItMC44MjNTMzYuMzM4LDIwLjM2MywzNi4wNjgsMjAuMTc2eiIgZmlsbD0iI2ZlZmVmZSIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
      this.$refs.slide3.pause()
    },
    pause3() {
      this.volume = 0.5
      this.$refs.music.volume = this.volume
      this.play_icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxLjk5OSA0MS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxLjk5OSA0MS45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBkPSJNMzYuMDY4LDIwLjE3NmwtMjktMjBDNi43NjEtMC4wMzUsNi4zNjMtMC4wNTcsNi4wMzUsMC4xMTRDNS43MDYsMC4yODcsNS41LDAuNjI3LDUuNSwwLjk5OXY0MCAgYzAsMC4zNzIsMC4yMDYsMC43MTMsMC41MzUsMC44ODZjMC4xNDYsMC4wNzYsMC4zMDYsMC4xMTQsMC40NjUsMC4xMTRjMC4xOTksMCwwLjM5Ny0wLjA2LDAuNTY4LTAuMTc3bDI5LTIwICBjMC4yNzEtMC4xODcsMC40MzItMC40OTQsMC40MzItMC44MjNTMzYuMzM4LDIwLjM2MywzNi4wNjgsMjAuMTc2eiIgZmlsbD0iI2ZlZmVmZSIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
      this.$refs.slide4.pause()
    },
    seek2() {
      let _this = this
      window.setInterval(() => {

        _this.seek_animation2()

        _this.current_minutes2 = Math.floor(_this.$refs.slide3.currentTime/60)
        _this.current_seconds2 = Math.floor(_this.$refs.slide3.currentTime%60)

        _this.current_time2 = '' + _this.current_minutes2 + ':' + (_this.current_seconds2 < 10 ? '0' : '') + '' + _this.current_seconds2

      }, 100)
    },
    seek3() {
      let _this = this
      window.setInterval(() => {

        _this.seek_animation2()

        _this.current_minutes3 = Math.floor(_this.$refs.slide4.currentTime/60)
        _this.current_seconds3 = Math.floor(_this.$refs.slide4.currentTime%60)

        _this.current_time3 = '' + _this.current_minutes3 + ':' + (_this.current_seconds3 < 10 ? '0' : '') + '' + _this.current_seconds3

      }, 100)
    },
    move_duration2(event) {
      let rect = this.$refs.bar2.getBoundingClientRect()
      this.$refs.slide3.currentTime = ((event.clientX - rect.left ) / this.$refs.bar2.offsetWidth ) * this.$refs.slide3.duration
      this.seek_animation2()
    },
    move_duration3(event) {
      let rect = this.$refs.bar3.getBoundingClientRect()
      this.$refs.slide4.currentTime = ((event.clientX - rect.left ) / this.$refs.bar3.offsetWidth ) * this.$refs.slide4.duration
      this.seek_animation2()
    },
    seek_animation2() {
      this.ratio2 = this.$refs.slide3.currentTime/this.$refs.slide3.duration
      this.$refs.seek_bar2.style.transform = `scaleX(${this.ratio2})`
    },
    seek_animation3() {
      this.ratio3 = this.$refs.slide4.currentTime/this.$refs.slide4.duration
      this.$refs.seek_bar3.style.transform = `scaleX(${this.ratio3})`
    }
  }
}

</script>
