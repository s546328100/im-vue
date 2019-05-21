<template>
  <!-- <div>
    <p v-for="message in messages" v-bind:key="message">{{ message }}</p>
  </div>-->

  <el-container>
    <el-aside>Aside</el-aside>
    <el-container>
      <el-main>
        聊天
        <ul id="messages">
          <li class="right">
            <img src="../image/user4.jpg">
            <div>
              <span>温恩</span>
              <p style="color: #000000;">
                <span>二人若若</span>
              </p>
            </div>
          </li>
        </ul>
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
    let data: any = {
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

    this.$socket.on('message', (data: any) => {
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

#messages {
  height: 346px;
  padding: 20px 10px 0px 10px;
  overflow-y: auto;

  /*滚动条样式*/
  ::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
  }

  ::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
  }

  li {
    list-style: none;
    width: 100%;
    float: left;
    margin-bottom: 5px;

    img {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }

    p {
      img {
        width: 30px;
        height: 30px;
        margin: 0;
        padding: 0;
        vertical-align: bottom;
      }

      .sendImg {
        max-width: 300px;
        max-height: 188px;
        width: auto;
        height: auto;
        border-radius: 5px;
      }

      span {
        padding-top: 7px;
      }
    }

    div > span {
      display: block;
      color: #555;
      padding-left: 2px;
    }

    div {
      p {
        display: flex;
        max-width: 300px;
        height: auto;
        padding: 10px;
        margin-top: 5px;
        word-wrap: break-word; /* 文本自动换行 */
        font-size: 15px;
        border-radius: 5px;
      }
    }
  }
}

.left {
  img {
    margin-right: 8px;
  }

  img,
  div {
    float: left;
  }

  span {
    text-align: left;
  }

  p {
    background-color: #d5d3d3;
  }
}

.right {
  img {
    margin-left: 8px;
  }

  span {
    text-align: right;
  }

  p,
  img,
  div {
    float: right;
  }

  p {
    background-color: #86bdf8;
  }
}
</style>
