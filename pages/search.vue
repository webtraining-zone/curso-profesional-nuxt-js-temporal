<template>
  <section class="container">
    <h1>Search</h1>

    <div class="row mb-4">
      <div class="col-12">
        <form @submit.prevent="searchMovies()">
          <div class="form-group">
            <label for="movieName">Movie name</label>
            <input type="text" class="form-control" id="movieName"
                   placeholder="Type a movie name like 'spiderman'" v-model="movieName" required/>
          </div>
          <button type="submit" class="btn btn-primary" :disabled="movieName.length < 2">
            Search
          </button>
        </form>
      </div>
    </div>

    <div class="row">

      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="movie in movies">
        <div class="b-movie mb-3">
          <div class="card text-white bg-dark mb-4">
            <img class="card-img-top" :src="movie.Poster" :alt="movie.Title">

            <div class="card-header">
              {{ movie.Year }}
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ movie.Title }}</h5>
              <button @click="openMovieDetails(movie)" class="btn btn-warning">Read more</button>
            </div>

          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        movieName: 'Batman',
        movies: [],
      };
    },
    methods: {
      searchMovies() {
        const serviceURL = `http://www.omdbapi.com/?s=${this.movieName}&apikey=a7de0943`;
    // Esto se ejecuta del lado del cliente (desde el navegador web)
        this.$axios.$get(serviceURL).then(response => {
          this.movies = response.Search;
        });
      },
      openMovieDetails(movie) {
        this.$router.push({
          name: 'movies-id',
          params: {id: movie.imdbID},
        });
      },
    },
    asyncData({params, app}) {
      const serviceURL = `http://www.omdbapi.com/?s=Batman&apikey=a7de0943`;

      return app.$axios.$get(serviceURL).then(response => {
        // @TODO: This doesn't work!!!
        // this.movies = response.Search
        return {
          movies: response.Search,
        };
      });
    },
  };
</script>

<style>

</style>
