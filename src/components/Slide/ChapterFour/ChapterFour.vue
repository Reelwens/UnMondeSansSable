<style scoped lang="scss" src="./ChapterFour.scss"></style>

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

      <div class="slides slide-1 slide-intro">
        <div class="slide-content-container">
        <div class="black-background"></div>
          <div class="text-content">
            <div class="chapter-number">IV</div>
            <div class="chapter-title">Dérive - L'exploitation clandestine</div>
            <div class="separator"></div>
            <p class="text-introduction">Qui dit surexploitation du sable dit raréfaction et donc prix qui augmentent.<br><br>Cette surenchère donna naissance à une mafia du sable, qui sévissait particulièrement en Asie. On la retrouvait également en Inde et au Maroc.</p>
          </div>
          <video ref="video" @canplay="hide_placeholder" src="../../../../static/videos/chapter-4.mp4" autoplay loop></video>
        </div>
      </div>

      <div class="slides slide-2">
        <div class="slide-content-container">

        </div>
      </div>
      <div class="slides slide-3 slide-video">
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
            <h2>LA MAFIA DU SABLE EN INDE</h2>
            <h3>"Ils ont la mainmise ici, un réseau secondaire est apparu, les populations sont impuissantes."</h3>
          </div>
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
        <h2>Chapitre 4</h2>
        <h2 class="part">L'exploitation clandestine</h2>
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
      is_active : '',
      play_icon : '../../../assets/images/icons/play.svg',
      ratio : 0,
      duration_minutes : 0,
      duration_seconds : 0,
      duration : '',
      current_minutes : 0,
      current_seconds : 0,
      current_time : ''
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

      if(this.slide_index != 6){
          this.slide_index += 1
      }
      if(this.slide_index == 2){
        this.play()
      } else {
        this.pause()
      }
      this.scroll_control()

    },
    slide_up() {

      if(this.slide_index != 0){
          this.slide_index -= 1
      }
      if(this.slide_index == 2){
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
    }
  }
}

</script>
