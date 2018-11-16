<template>
  <section class="container">
    <a href="#" @click.prevent="goBack()" class="btn btn-warning mt-3">
      <i class="fas fa-hand-point-left"></i>
      Go back
    </a>
    <article>

      <h1> Movie detail</h1>
      {{ movie.Title }}
      <div class="alert alert-warning">
        {{ movie.Plot }}
      </div>
    </article>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        movie: false,
      };
    },
    methods: {
     goBack() {
       this.$router.back();
     }
    },
    asyncData({app, params}) {

      if (!!params.id) {
        const serviceURL = `http://www.omdbapi.com/?i=${params.id}&apikey=a7de0943`;

        return app.$axios.$get(serviceURL).then(response => {

          return {
            movie: response,
          };
        });
      }

    },
  };
</script>
