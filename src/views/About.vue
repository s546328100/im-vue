<template>
  <div>
    {{count}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: mapState(['count']),
  methods: {
    increment() {
      this.$store.dispatch('incrementAsync');
    },
    decrement() {
      this.$store.commit('decrement');
    },
  },
})
export default class About extends Vue {}
</script>