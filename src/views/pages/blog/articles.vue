<template>
  <layout>

    <section class="section page-title">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 m-auto">
            <!-- Page Title -->
            <h1>Liberty Town Articles</h1>
            <!-- Page Description -->
            <h2>Liberty Town privacy articles</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="post-grid section pt-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6"
               v-for="(article, k) in articles" :key="k">
            <article class="post-sm">
              <!-- Post Image -->
              <div class="post-thumb">
                <router-link :to="article.link">
                  <img class="w-100" :src="article.img" :alt="article.title">
                </router-link>
              </div>
              <!-- Post Title -->
              <div class="post-title">
                <router-link :to="article.link">
                <h2>{{article.title}}</h2>
                </router-link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

  </layout>
</template>

<script>
import Layout from "../../layout";
import Meta from "../../../meta";

export default {
  components: {Layout},

  data(){
    return {
      articles: [
        {
          title: "Dark Web Browser",
          description: "",
          img: "/static/img/articles/dark-web-browser.jpeg",
          link: "/dark-web-browser",
        },
        {
          title: "Tor Dark Web",
          description: "",
          img: "/static/img/articles/tor-dark-web.jpeg",
          link: "/tor-dark-web",
        },
        {
          title: "How to access the Dark Web?",
          description: "",
          img: "/static/img/articles/how-to-access-the-dark-web.jpeg",
          link: "/how-to-access-the-dark-web",
        },
        {
          title: "How to access the Deep Web?",
          description: "",
          img: "/static/img/articles/how-to-access-the-deep-web.jpg",
          link: "/how-to-access-the-deep-web",
        },
        {
          title: "How to access Darknet?",
          description: "",
          img: "/static/img/articles/how-to-access-darknet.jpg",
          link: "/how-to-access-darknet",
        },
      ],
    }
  },

  mounted() {
    window.scrollTo(0, 0)
  },
  beforeCreate(){
    Meta.SetTitle("LibertyTown Privacy Articles")
    Meta.SetDescription("Liberty Town Privacy Articles. Learn more about Computer Security, Darknet, Deep Web, Dark Web! How to access the darknet, deep web, dark web markets")
    Meta.SetKeywords("articles, article, blog,computer security, darknet, dark web, dark net, markets")
    Meta.SetImage()
    Meta.SetUrl("/articles")
  }
}
</script>