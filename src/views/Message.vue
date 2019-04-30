<template>
  <!-- <div>
    <p v-for="message in messages" v-bind:key="message">{{ message }}</p>
  </div>-->

  <el-container>
    <el-aside>Aside</el-aside>
    <el-container>
      <el-main>
        聊天
        <p v-for="message in messages" v-bind:key="message.id">{{ message.name }}：{{message.test}}</p>
      </el-main>
      <el-footer>
        <el-form :inline="true" :model="form">
          <el-input v-model="form.test" placeholder="发送内容" style="width: 78%;"></el-input>
          <el-button type="primary" @click="onSubmit">发送</el-button>
        </el-form>
      </el-footer>
    </el-container>
    <el-aside>
      系统消息
      <p v-for="message in sysMessages" v-bind:key="message">{{ message }}</p>
    </el-aside>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import io from '../common/Socket';

@Component({})
export default class Message extends Vue {
  public sysMessages: string[] = [];
  public messages: any[] = [];
  public form = {
    test: '',
  };

  private onSubmit() {
    io((err, socket) => {
      if (err) {
        sessionStorage.removeItem('token');
        return this.$router.push('/login');
      }
      socket.emit('message', {
        id: this.guid(),
        name: sessionStorage.getItem('user'),
        test: this.form.test,
      });

      this.form.test = '';
    });
  }

  private mounted() {
    io((err, socket) => {
      if (err) {
        sessionStorage.removeItem('token');
        return this.$router.push('/login');
      }
      socket.on('sysMessage', (data: string) => {
        this.sysMessages.push(data);
      });

      socket.on('message', (data: string) => {
        this.messages.push(data);
      });
    });
  }

  private S4() {
    // tslint:disable-next-line:no-bitwise
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  private guid() {
    return (
      this.S4() +
      this.S4() +
      '-' +
      this.S4() +
      '-' +
      this.S4() +
      '-' +
      this.S4() +
      '-' +
      this.S4() +
      this.S4() +
      this.S4()
    );
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: left;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
  padding: 20px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: left;
}
</style>

