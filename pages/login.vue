<template>
  <section class="container">
    <notifications group="api"/>

    <h1>Login</h1>

    <div class="row">
      <div class="col-12">

        <form @submit.prevent="loginUser">

          <div class="form-group">
            <label for="username">Username*: </label>
            <input type="text" class="form-control" id="username"
                   placeholder="Type a username'" v-model="user.username" required/>
          </div>

          <div class="form-group">
            <label for="password">Password*: </label>
            <input type="password" class="form-control" id="password"
                   placeholder="Type a password'" v-model="user.password" required/>
          </div>

          <button type="submit" class="btn btn-primary" :disabled="user.name < 2">
            Login
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
          username: 'ady',
          password: 'ady',
        },
      };
    },
    components: {},
    methods: {
      async login() {
        try {
          // @TODO: Store the user in a "store"


        } catch (e) {
          console.log(e);
        }
      },
      loginUserClientSide() {
        const serviceURL = `${USERS_BASE_URL}/users/login`;
        const data = this.user;
        const requestConfig = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        this.$axios.$post(serviceURL, data, requestConfig).then(userData => {
          console.log(userData);

          // notify the user everything was good!
          this.$notify({
            group: 'api',
            title: 'Success',
            text: 'Login was successful!',
            duration: 5000,
            type: 'success',
          });

        }).catch(err => {
          console.error(err);

          this.$notify({
            group: 'api',
            title: 'Error',
            text: 'Unable to login!',
            duration: 5000,
            type: 'error',
          });
        });
      },
    },
  };
</script>

<style>

</style>
