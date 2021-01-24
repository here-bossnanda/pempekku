<template>
<div>
  <navbar />
  <div class="container">
    <form @submit.prevent='addSubmit'>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input type="text" v-model="data.name" class="form-control">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Image URL</label>
        <input type="text" v-model="data.image_url" class="form-control">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Price</label>
        <input type="text" v-model="data.price" class="form-control">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Stock</label>
        <input type="text" v-model="data.stock" class="form-control">
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import navbar from '../components/navbar'
export default {
  name: 'addPempek',
  data () {
    return {
      data: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  components: {
    navbar
  },
  methods: {
    ...mapActions('pempeks', ['addPempek']),
    addSubmit () {
      console.log('kepencet')
      this.addPempek(this.data)
    }
  }

}
</script>

<style>

</style>
