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
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: Helvetica Neue, Helvetica, Hiragino Sans GB, Microsoft YaHei,
    \\5fae\8f6f\96c5\9ed1, Arial, sans-serif;
  background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/img/2zrdI1g.jpg)
    no-repeat 50%;
  background-size: cover;
}

body,
html {
  height: 100%;
}

body,
dd,
dl,
fieldset,
h1,
h2,
h3,
h4,
h5,
h6,
ol,
p,
textarea,
ul {
  margin: 0;
}

body {
  -webkit-font-smoothing: antialiased;
  line-height: 1.6;
}

a,
button,
input,
textarea {
  outline: 0;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  background-color: #c3c3c3;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

#app {
  height: 100%;
}
</style>
