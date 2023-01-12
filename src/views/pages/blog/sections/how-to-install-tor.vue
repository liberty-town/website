<template>
  <div>
    <router-link to=""><h3 class="h-5 pb-4" @click="windows=!windows">{{windows ? 'Hide' : 'Show'}} how to install Tor in Windows</h3></router-link>

    <div v-if="windows">

      <a href="https://www.torproject.org/download/"  target="_blank" rel="noopener noreferrer">Download Tor</a>

      <img class="img-fluid pb-4" src="/static/img/articles/install-tor/how-to-access-the-dark-web-tor-download-windows-1.png" alt="How to access the Dark Web Tor Download Windows 1"/>
      <img class="img-fluid pb-4" src="/static/img/articles/install-tor/how-to-access-the-dark-web-tor-download-windows-2.png" alt="How to access the Dark Web Tor Download Windows 2"/>
      <img class="img-fluid pb-4" src="/static/img/articles/install-tor/how-to-access-the-dark-web-tor-download-windows-3.png" alt="How to access the Dark Web Tor Download Windows 3"/>
      <img class="img-fluid pb-4" src="/static/img/articles/install-tor/how-to-access-the-dark-web-tor-download-windows-4.png" alt="How to access the Dark Web Tor Download Windows 4"/>
    </div>

    <router-link to=""><h3 class="h-5 pb-4" @click="macos=!macos">{{macos ? 'Hide' : 'Show'}} how to install Tor in MacOS</h3></router-link>
    <div v-if="macos">
      <a href="https://www.torproject.org/download/"  target="_blank" rel="noopener noreferrer">Download Tor</a>

      <img class="img-fluid pb-4" src="/static/img/articles/install-tor/how-to-access-the-dark-web-tor-download-macos-1.png" alt="How to access the Dark Web Tor Download MacOS 1"/>
      <img class="img-fluid pb-4" src="/static/img/articles/install-tor/how-to-access-the-dark-web-tor-download-macos-2.png" alt="How to access the Dark Web Tor Download MacOS 2"/>
      <img class="img-fluid pb-4" src="/static/img/articles/install-tor/how-to-access-the-dark-web-tor-download-macos-3.png" alt="How to access the Dark Web Tor Download MacOS 3"/>
    </div>

    <router-link to=""><h3 class="h-5 pb-4" @click="linux=!linux">{{linux ? 'Hide' : 'Show'}} how to install Tor in Linux</h3></router-link>
    <div v-if="linux">

      <a href="https://www.torproject.org/download/"  target="_blank" rel="noopener noreferrer">Download Tor</a>

      <img class="img-fluid pb-4" src="/static/img/articles/install-tor/how-to-access-the-dark-web-tor-download-linux-0.png" alt="How to access the Dark Web Tor Download Linux 1"/>
      <img class="img-fluid pb-4" src="/static/img/articles/install-tor/how-to-access-the-dark-web-tor-download-linux-1.png" alt="How to access the Dark Web Tor Download Linux 2"/>
      <img class="img-fluid pb-4" src="/static/img/articles/install-tor/how-to-access-the-dark-web-tor-download-linux-2.png" alt="How to access the Dark Web Tor Download Linux 3"/>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      windows: false,
      linux: false,
      macos: false,
    }
  }
}
</script>