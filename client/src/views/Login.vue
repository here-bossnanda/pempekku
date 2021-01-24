<template>
<div>
  <navbar />
  <div class="container">
    <form @submit.prevent='loginSubmit'>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" v-model="data.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" v-model="data.password" class="form-control" id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</div>
</template>

<script>
import navbar from '../components/navbar'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    navbar
  },
  methods: {
    ...mapActions('auth', ['login']),
    loginSubmit () {
      this.login(this.data)
    }
  },
  computed: {
    ...mapGetters(['isAuth'])
  },
  created () {
    if (this.isAuth) { // kalau true, maka router push ke home
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
