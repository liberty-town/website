<template>
  <div>

    <nav class="navbar main-nav navbar-expand-lg px-2 px-sm-0 py-2 py-lg-0">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="/static/img/libertytown-logo.png" alt="liberty town logo">
        </router-link>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                @click="menu = !menu">
          <img src="/static/img/hamburger.png" alt="hamburger menu" width="15"/>
          <span class="ti-menu"></span>
        </button>
        <div id="navbarNav" :class="`collapse navbar-collapse ${menu ? 'show' : ''}`">
          <ul class="navbar-nav ml-auto">
            <li :class="`nav-item ${route === '/' ? 'active' : ''}`" @click="menu=false">
              <router-link :to="{  path: '/', hash: '' }" class="nav-link">
                Home
              </router-link>
            </li>
            <li :class="`nav-item ${route === '/#access' ? 'active' : ''}`" @click="menu=false">
              <router-link :to="{  path: '/', hash: '#access' }" class="nav-link">
                Access Darknet
              </router-link>
            </li>
            <li :class="`nav-item ${route === '/articles' ? 'active' : ''}`" @click="menu=false">
              <router-link to="/articles" class="nav-link">
                Articles
              </router-link>
            </li>
            <li :class="`nav-item ${route === '/#contact' ? 'contact' : ''}`" @click="menu=false">
              <router-link to="/#contact" class="nav-link">
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <slot/>

    <footer>
      <div class="footer-main">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 m-md-auto align-self-center">
              <div class="block">
                <router-link to="/">
                  <img src="/static/img/libertytown-logo-alt.png" alt="liberty town logo alt">
                </router-link>
                <!-- Social Site Icons -->
                <ul class="social-icon list-inline">
                  <li class="list-inline-item">
                    <a href="https://discord.com/invite/Fndv63dejC" style="padding-right: 10px"  target="_blank" rel="noopener noreferrer" >
                      <img src="/static/img/social/discord.png" alt="discord" class="social" style="max-width: 36px"/>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://t.me/PandoraCashOfficial"  target="_blank" rel="noopener noreferrer">
                      <img src="/static/img/social/telegram.png" alt="telegram" class="social" style="max-width: 36px"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
              <div class="block-2">
                <!-- heading -->
                <router-link :to="{  path: '/', hash: '#access' }">
                  <h6>Access Darknet</h6>
                </router-link>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
              <div class="block-2">
                <!-- heading -->
                <router-link :to="{  path: '/', hash: '#unstoppable' }">
                  <h6>Unstoppable</h6>
                </router-link>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
              <div class="block-2">
                <!-- heading -->
                <router-link :to="{  path: '/articles', hash: '' }">
                  <h6>Articles</h6>
                </router-link>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
              <div class="block-2">
                <!-- heading -->
                <router-link :to="{  path: '/', hash: '#contact' }">
                  <h6>Contact</h6>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {

  data(){
    return {
      menu: false,
    }
  },

  computed:{
    route(){
      return this.$route.path
    }
  },

}
</script>

<style scoped>
nav{
  position: fixed !important;
  top: 0;
  width: 100%;
  border-bottom: 2px solid #eaeaec;
}
</style>