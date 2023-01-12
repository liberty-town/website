<template>
  <layout>

    <section class="section blog-single">
      <div class="container">
        <div class="row">
          <div class="col-md-10 m-auto">
            <!-- Single Post -->
            <article class="single-post">
              <!-- Post title -->
              <div class="post-title text-center">
                <h1>{{ title }}</h1>
                <!-- Tags -->
                <ul class="list-inline post-tag">
                  <li class="list-inline-item">
                    January 7, 2023
                  </li>
                </ul>
              </div>
              <!-- Post body -->
              <div class="post-body">
                <!-- Feature Image -->
                <div class="feature-image">
                  <img v-if="img" :src="img" :alt="title">
                </div>

                <slot/>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

  </layout>
</template>

<script>
import layout from "../../layout"

export default {
  components: {layout},
  props: {
    title: {default: ""},
    img: {default: ""},
  },
  data(){
    return {
      page: window.location.href,
    }
  },
  mounted(){
    window.scrollTo(0, 0)
  }
}
</script>

<style>
.blog-single h2{
  padding-bottom: 0.4rem;
}
.blog-single h3{
  padding-bottom: 0.4rem;
}
.blog-single h4{
  padding-bottom: 0.4rem;
}
</style>
