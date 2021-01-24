<template>
<div>
  <navbar />
  <div class="container mt-5">
    <div class="row">
        <pempek-card
        v-for="pempek in listPempek"
        :key="pempek.id"
        :pempek='pempek'/>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import navbar from '../components/navbar'
import pempekCard from '../components/pempekCard'

export default {
  name: 'Home',
  components: {
    navbar,
    pempekCard
  },
  methods: {
    ...mapActions('pempeks', ['getPempeks'])
  },
  computed: {
    ...mapState('pempeks', ['listPempek'])
  },
  created () {
    this.getPempeks()
  }
}
</script>
