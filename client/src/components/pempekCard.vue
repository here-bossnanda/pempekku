<template>
  <div class="col-4 my-1">
    <div class="card" style="width: 18rem;">
      <img :src="pempek.image_url" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ pempek.name }}</h5>
        <p class="card-text">Price: {{ pempek.price }}</p>
        <p class="card-text">Stock: {{ pempek.stock }}</p>
        <a href="#" class="btn btn-primary mx-1" @click.prevent='editPempek(pempek.id)'>Edit</a>
        <a href="#" class="btn btn-danger mx-1" @click.prevent='destroyPempek(pempek.id)'>Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'pempekCard',
  props: ['pempek'],
  methods: {
    ...mapActions('pempeks', ['deletePempek']),
    editPempek (id) {
      this.$router.push(`/${id}/edit`)
    },
    destroyPempek (id) {
      this.$toasted.info('are you sure?', {
        action: [
          {
            text: 'yes',
            onClick: (e, toastObject) => {
              this.deletePempek(id)
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
  }
}
</script>

<style>

</style>
