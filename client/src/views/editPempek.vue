<template>
<div>
  <navbar />
  <div class="container">
    <form @submit.prevent='editSubmit'>
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
  name: 'editPempek',
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
    ...mapActions('pempeks', ['getOnePempek', 'updatePempek']),
    editSubmit () {
      Object.assign(this.data, { id: this.$route.params.id })
      this.updatePempek(this.data)
    }
  },
  created () {
    console.log(this.$route.params.id, '>>> ini params id ')
    this.getOnePempek(this.$route.params.id)
      .then(({ data }) => {
        this.data.name = data.name
        this.data.image_url = data.image_url
        this.data.price = data.price
        this.data.stock = data.stock
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

}
</script>

<style>

</style>
