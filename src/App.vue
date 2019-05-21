<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  private mounted() {
    const user = sessionStorage.getItem('user');
    if (user) {
      this.$socket.init(user, () => {
        if (this.$route.name !== 'login') {
          this.$router.push('/login');
        }
      });
    }
  }
}
</script>


<style lang="scss">
// html,
// body {
//   height: 100%;
//   width: 100%;
//   margin: 0;
//   padding: 0;
// }

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   height: 100%;
//   width: 100%;
//   margin: 0;
//   padding: 0;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
