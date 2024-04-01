<template>
    <div>
      <h1>Login</h1>
      <form>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
            <router-link :to="{path : 'register'}" class="text-dark"> go to Register</router-link>
        </form>
    </div>
  </template>

  <script>

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    }
  }
</script>