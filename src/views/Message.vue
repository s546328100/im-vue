<template>
  <!-- <div>
    <p v-for="message in messages" v-bind:key="message">{{ message }}</p>
  </div>-->

  <el-container>
    <el-aside>Aside</el-aside>
    <el-container>
      <el-main>
        聊天
        <div class="triangle">
          <ul v-for="message in messages" v-bind:key="message.id">
            <li :class="message.classObject">
              <div>{{ message.name }}</div>
              <span>{{message.test}}</span>
            </li>
          </ul>
        </div>
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

@Component({})
export default class Message extends Vue {
  public sysMessages: string[] = [];
  public messages: any[] = [];
  public form = {
    test: '',
  };

  private onSubmit() {
    let data = {
      id: this.guid(),
      name: sessionStorage.getItem('user'),
      test: this.form.test,
    };
    this.$socket.emit('message', data);
    data.classObject = { textRight: true };
    this.messages.push(data);
    this.form.test = '';
  }

  private mounted() {
    this.$socket.on('sysMessage', (data: string) => {
      if (!this.sysMessages.includes(data)) {
        this.sysMessages.push(data);
      }
    });

    this.$socket.on('message', (data: string) => {
      console.log(data);
      data.classObject = { textLeft: true };
      this.messages.push(data);
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

.triangle {
  margin: auto;
}
.triangle ul {
  padding: 5px;
}
.triangle li {
  padding: 0px;
  margin-bottom: 0px;
}
.triangle li span {
  position: relative;
  top: 10px;
  border-radius: 7px;
  background-color: #a6e860;
  padding: 6px 10px 8px 10px;
  z-index: 1;
}
.triangle .textLeft span {
  background-color: white;
}
.triangle li.textLeft:before {
  // content: url('images/tx1.jpg');
  box-sizing: border-box;
  position: relative;
  left: -10px;
  top: 9px;
}
.triangle li.textLeft span:before {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-right: 8px solid white;
  position: absolute;
  top: 8px;
  left: -16px;
}
.triangle li.textRight:after {
  // content: url('images/tx2.jpg');
  box-sizing: border-box;
  position: relative;
  right: -10px;
  top: 9px;
}
.triangle li.textRight span:after {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-left: 8px solid #a6e860;
  position: absolute;
  top: 8px;
  right: -16px;
}
li {
  list-style: none;
}
.textRight {
  text-align: right;
}
</style>

