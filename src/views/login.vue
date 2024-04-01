<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="email" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="password" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            <router-link :to="{path : 'register'}" class="text-dark"> go to Register</router-link>
        </form>
    </div>
  </template>

  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login(){
        axios.post('http://localhost:8000/api/login',{
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        })
      }
    }
  }
</script>