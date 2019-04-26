<template>
  <div>
    <p v-for="message in messages" v-bind:key="message">{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import io from '../common/Socket';

@Component({})
export default class Message extends Vue {
  public messages = [];

  private mounted() {
    const socket = io();
    socket.on('message', (data: string) => {
      console.log(data);
    });
  }
}
</script>

