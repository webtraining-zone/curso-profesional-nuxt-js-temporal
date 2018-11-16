<template>
  <section class="container">
    <h1>Sign-up</h1>

    <div class="row">
      <div class="col-12">

        <form @submit.prevent="createAccount">

          <div class="form-group">
            <label for="name">Name*: </label>
            <input type="text" class="form-control" id="name"
                   placeholder="Type a name'" v-model="user.name" required/>
          </div>

          <div class="form-group">
            <label for="username">Username*: </label>
            <input type="text" class="form-control" id="username"
                   placeholder="Type a username'" v-model="user.username" required/>
          </div>

          <div class="form-group">
            <label for="email">Email*: </label>
            <input type="text" class="form-control" id="email"
                   placeholder="Type an email'" v-model="user.email" required/>
          </div>

          <div class="form-group">
            <label for="name">Password*: </label>
            <input type="password" class="form-control" id="password"
                   placeholder="Type a password'" v-model="user.password" required/>
          </div>


          <button type="submit" class="btn btn-primary" :disabled="user.name < 2">
            Create account
          </button>
        </form>

      </div>
    </div>
  </section>
</template>

<script>
  import {USERS_BASE_URL} from '../config/api';

  export default {
    data() {
      return {
        user: {
          name: 'Ady',
          username: 'ady',
          email: 'ady@webtraining.zone',
          password: 'ady',
        },
      };
    },
    components: {},
    methods: {
      createAccount() {
        const serviceURL = `${USERS_BASE_URL}/users`;
        const data = this.user;
        const requestConfig = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        this.$axios.$post(serviceURL, data, requestConfig).then(userData => {
          console.log(userData);
        }).catch(err => {
          console.error(err);
        });
      },
    },
  };
</script>

<style>

</style>
