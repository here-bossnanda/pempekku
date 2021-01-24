<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link tag="li" to="/" v-show="isAuth" class="nav-item">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" to="/addPempek" v-show="isAuth" class="nav-item">
            <a class="nav-link">Add Pempek</a>
          </router-link>
          <router-link tag="li" to="/login" class="nav-item" v-show="!isAuth">
            <a class="nav-link">Login</a>
          </router-link>
          <li class="nav-item" v-show="isAuth">
            <a class="nav-link" @click.prevent='logout' href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'navbar',
  methods: {
    logout () {
      this.$store.commit('setToken', localStorage.getItem('access_token'))
      // this.setToken(localStorage.getItem('access_token'))
      this.$toasted.show('are you sure?', {
        action: [
          {
            text: 'yes',
            onClick: (e, toastObject) => {
              localStorage.clear()
              this.$router.push('/login')
            }
          },
          {
            text: 'no',
            onClick: (e, toastObject) => {
              toastObject.goAway(0)
            }
          }
        ]
      })
    }
  },
  computed: {
    ...mapGetters(['isAuth'])
  }
}
</script>

<style>

</style>
