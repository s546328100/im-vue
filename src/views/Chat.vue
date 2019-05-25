<template>
  <div class="main">
    <div class="main_inner">
      <div class="panel give_me">
        <!-- header start -->
        <div class="header">
          <div class="avatar">
            <img class="img" :src="user.avatar">
          </div>
          <div class="info">
            <h3 class="nickname">
              <span class="display_name">{{user.name}}</span>
              <a class="opt" href="javascript:;">
                <i class="web_wechat_add"></i>
              </a>
            </h3>
          </div>
        </div>
        <!-- header end -->
        <div class="search_bar">
          <i class="web_wechat_search"></i>
          <input type="text" class="frm_search" placeholder="搜索">
        </div>
        <div class="tab">
          <div class="tab_item">
            <a class="chat" title="聊天" href="#">
              <i class="web_wechat_tab_chat web_wechat_tab_chat_hl"></i>
            </a>
          </div>
          <div class="tab_item">
            <a class="chat" title="阅读" href="#">
              <i class="web_wechat_tab_public"></i>
            </a>
          </div>
          <div class="tab_item">
            <a class="chat" title="通讯录" href="#">
              <i class="web_wechat_tab_friends"></i>
            </a>
          </div>
        </div>
        <div class="nav_view" style="visibility: visible; width: auto;">
          <div class="scroll-wrapper chat_list scrollbar-dynamic" style="position: relative;">
            <div
              class="chat_list scrollbar-dynamic scroll-content scroll-scrolly_visible"
              style="margin-bottom: 0px; margin-right: 0px; height: 563px;"
            >
              <div>
                <!-- chatItem start -->
                <div v-for="(chatItem, index) in chatItems" v-bind:key="index">
                  <div class="chat_item slide-left active">
                    <div class="ext">
                      <!-- <p class="attr">14:05</p> -->
                    </div>
                    <div class="avatar">
                      <img class="img" :src="chatItem.avatar" alt>
                      <!-- <i class="icon web_wechat_reddot_middle">1</i> -->
                    </div>
                    <div class="info">
                      <h3 class="nickname">
                        <span class="nickname_text">{{chatItem.name}}</span>
                      </h3>
                      <p class="msg">
                        <!-- <span>哈哈哈</span> -->
                      </p>
                    </div>
                  </div>
                </div>
                <!-- end -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="height: 100%">
        <div class="box chat">
          <div class="box_hd">
            <div class="title_wrap">
              <div class="title poi">
                <a class="title_name">{{currChatItem.name}}&nbsp;</a>
                <span>({{currChatItem.number}})&nbsp;</span>
                <i class="web_wechat_down_icon"></i>
              </div>
            </div>
          </div>
          <div class="scroll-wrapper box_bd chat_bd scrollbar-dynamic" style="position: absolute">
            <div
              id="box"
              class="box_bd chat_bd scrollbar-dynamic scroll-content"
              style="margin-bottom: 0px;margin-right: 0px;height: 486px;"
            >
              <div>
                <!-- 消息 start me -->
                <div v-for="(message, index) in messages" v-bind:key="index">
                  <div class="clearfix">
                    <div style="overflow: hidden;">
                      <div class="message" :class="{me: message.me}">
                        <div class="message_system">
                          <div class="content">{{message.time}}</div>
                        </div>
                        <img class="avatar" :src="message.avatar" alt>
                        <div class="content">
                          <div
                            class="bubble js_message_bubble ng-scope bubble_primary"
                            :class="{right: message.me, left: !message.me}"
                          >
                            <div class="bubble_cont">
                              <div class="plain">
                                <pre class="js_message_plain ng-binding">{{message.content}}</pre>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 消息 end -->
                <!-- 消息 start left -->
                <!-- <div>
                  <div class="clearfix">
                    <div style="overflow: hidden;">
                      <div class="message">
                        <div class="message_system">
                          <div class="content">19:34</div>
                        </div>
                        <img class="avatar" src="../image/user1.jpg" alt>
                        <div class="content">
                          <div class="bubble js_message_bubble ng-scope bubble_default left">
                            <div class="bubble_cont">
                              <div class="plain">
                                <pre class="js_message_plain ng-binding">呜呜呜呜呜呜呜呜无无无无无无无无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无无</pre>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>-->
                <!-- 消息 end -->
              </div>
            </div>
          </div>
          <div class="box_ft">
            <div class="toolbar">
              <a class="web_wechat_face" href="javascript:;" title="表情"></a>
              <a class="web_wechat_screencut" href="javascript:;" title="截屏"></a>
              <a class="web_wechat_pic" href="javascript:;" title="图片和文件"></a>
            </div>
            <div class="content">
              <pre
                class="flex edit_area"
                @keydown="editAreaKeydown($event)"
                contenteditable-directive
                contenteditable="true"
                id="inputTxtArea"
              ></pre>
            </div>
            <div class="action">
              <span class="desc">按下Ctrl+Enter换行</span>
              <a class="btn btn_send" href="javascript:;" @click="sendTextMessage">发送</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Chat extends Vue {
  public user = {
    name: sessionStorage.getItem('user'),
    avatar: require(`../image/user${Math.floor(Math.random() * 4) + 1}.jpg`),
  };

  public chatItems = [
    {
      name: '公共聊天室',
      avatar: require('../image/bg3.jpg'),
      number: 0,
    },
  ];

  public currChatItem = {
    name: '公共聊天室',
    number: 0,
  };

  public messages: any = [];

  public inputTxtArea = '';

  public sendTextMessage() {
    let inputTxtArea = document.getElementById('inputTxtArea')!;
    if (!inputTxtArea.innerText) {
      return;
    }
    this.messages.push({
      avatar: require(`../image/user${Math.floor(Math.random() * 4) + 1}.jpg`),
      content: inputTxtArea.innerText,
      time: '19:48',
      me: true,
    });
    inputTxtArea.innerHTML = '';
    // 滚动条总是在最底部
    document.getElementById('box').scrollTop = document.getElementById(
      'box',
    ).scrollHeight + 500;
    console.log(document.getElementById(
      'box',
    ).scrollHeight);
  }

  public editAreaKeydown(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
        console.log(123123);
        let inputTxtArea = document.getElementById('inputTxtArea')!;
        if (this.browserType() === 'IE' || this.browserType() === 'Edge') {
          let div = document.createElement('div');
          inputTxtArea.appendChild(div);
        } else if (this.browserType() === 'FF') {
          let br = document.createElement('br');
          inputTxtArea.appendChild(br);
        } else {
          let br = document.createElement('br');
          let div = document.createElement('div');
          div.appendChild(br);
          inputTxtArea.appendChild(div);
        }
        let o = inputTxtArea.lastChild!;
        let textbox = inputTxtArea;
        let sel = window.getSelection()!;
        let range = document.createRange()!;
        range.selectNodeContents(textbox);
        range.collapse(false);
        range.setEndAfter(o);
        range.setStartAfter(o);
        sel.removeAllRanges();
        sel.addRange(range);
        // 滚动条总是在最底部
        inputTxtArea.scrollTop = inputTxtArea.scrollHeight;
      } else {
        this.sendTextMessage();
        e.preventDefault();
        return false;
      }
    }
  }

  private browserType() {
    let userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
    let isOpera = false;
    if (userAgent.indexOf('Edge') > -1) {
      return 'Edge';
    }
    if (userAgent.indexOf('.NET') > -1) {
      return 'IE';
    }
    if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
      isOpera = true;
      return 'Opera';
    } // 判断是否Opera浏览器
    if (userAgent.indexOf('Firefox') > -1) {
      return 'FF';
    } // 判断是否Firefox浏览器
    if (userAgent.indexOf('Chrome') > -1) {
      return 'Chrome';
    }
    if (userAgent.indexOf('Safari') > -1) {
      return 'Safari';
    } // 判断是否Safari浏览器
    if (
      userAgent.indexOf('compatible') > -1 &&
      userAgent.indexOf('MSIE') > -1 &&
      !isOpera
    ) {
      return 'IE';
    } // 判断是否IE浏览器
  }
}
</script>

<style lang="scss" scoped>
@media (max-height: 800px), (max-width: 1000px) {
  .main {
    padding-top: 0;
    height: 100%;
  }

  .main .copyright {
    display: none;
  }
}

.main {
  // height: 80%;
  min-height: 600px;
  // padding-top: 100px;
  -webkit-transition: padding 0.3s linear;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.main_inner {
  max-width: 1000px;
  min-width: 800px;
  height: 100%;
  margin: 0 auto;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  overflow: hidden;
}

.main_inner:after {
  content: '.';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

// 左侧
// -- 1 -- header
.panel {
  position: relative;
  width: 280px;
  height: 100%;
  float: left;
  background: #2e3238;

  &.give_me {
    .tab:after {
      left: 20px;
      right: 20px;
    }
  }
}

.header {
  padding: 18px;
  position: relative;

  .avatar {
    display: table-cell;
    vertical-align: middle;
    word-wrap: break-word;
    word-break: break-all;
    white-space: nowrap;
    padding-right: 10.625px;

    .img {
      width: 40px;
      height: 40px;
      border-radius: 2px;
      -moz-border-radius: 2px;
      -webkit-border-radius: 2px;
      display: block;
      cursor: pointer;
    }
  }

  .info {
    display: table-cell;
    vertical-align: middle;
    word-wrap: break-word;
    word-break: break-all;
    width: 2000px;

    .nickname {
      .display_name {
        display: inline-block;
        font-weight: 400;
        width: 156px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        color: #fff;
        font-size: 18px;
        vertical-align: top;
        line-height: 31px;
        text-decoration: none;
      }

      .opt {
        display: inline-block;
        vertical-align: top;
      }
    }
  }
}

// -- 2 -- search
.search_bar {
  position: relative;
  width: 244px;
  margin: 0 auto 6px;

  .web_wechat_search {
    position: absolute;
    z-index: 101;
    top: 1px;
  }

  .frm_search {
    width: 214px;
    height: 32px;
    line-height: 32px;
    border: 0;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    background-color: #26292e;
    color: #fff;
    padding-left: 30px;
    font-size: 12px;
  }
}

// -- 3 -- tab
.tab {
  overflow: hidden;
  position: relative;
  padding-bottom: 4px;

  &:after {
    content: '';
    position: absolute;
    border-bottom: 1px solid #24272c;
    height: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .tab_item {
    float: left;
    width: 33.33333%;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 7px;
      right: 0;
      width: 0;
      height: 20px;
      border-right: 1px solid #24272c;
    }

    a {
      display: block;
      text-align: center;
    }
  }
}

// -- 4 -- nav
.nav_view {
  position: absolute;
  top: 154px;
  right: 0;
  bottom: 0;
  left: 0;
}

.chat_list {
  height: 100%;
}

.scroll-wrapper > .scroll-content {
  border: none !important;
  box-sizing: content-box !important;
  height: auto;
  left: 0;
  margin: 0;
  max-height: none !important;
  max-width: none !important;
  overflow: scroll !important;
  padding: 0;
  position: relative !important;
  top: 0;
  width: auto !important;
}

.scroll-wrapper > .scroll-content::-webkit-scrollbar {
  height: 0;
  width: 0;
}

.chat_item {
  overflow: hidden;
  padding: 12px 18px 11px;
  border-bottom: 1px solid #292c33;
  cursor: pointer;
  position: relative;

  .ext {
    float: right;
    color: #6b6f7c;
    font-size: 13px;
    text-align: right;

    .attr {
      height: 19px;
      line-height: 1.5;
    }
  }

  .avatar {
    float: left;
    margin-right: 10px;
    position: relative;

    .img {
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 2px;
      -moz-border-radius: 2px;
      -webkit-border-radius: 2px;
    }

    .icon {
      position: absolute;
      top: -6px;
      right: -6px;
      color: #fff;
      font-style: normal;
      font-size: 12px;
      text-align: center;
    }
  }

  .info {
    overflow: hidden;

    .nickname {
      font-weight: 400;
      font-size: 13px;
      color: #fff;
      line-height: 20px;
    }

    .nickname_text {
      display: inline-block;
      *display: inline;
      *zoom: 1;
      vertical-align: top;
    }

    .nickname_text {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }

    .msg {
      color: #989898;
      font-size: 13px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      height: 1.5em;
    }
  }
}

// 右侧
.box {
  position: relative;
  background-color: #eee;
  height: 100%;
  overflow: hidden;
}

.box_hd {
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  line-height: 30px;

  .title_wrap {
    position: relative;
    padding: 10px 0;
    margin: 0 19px;
    border-bottom: 1px solid #d6d6d6;
    background-color: #eee;
    z-index: 1024;
  }

  .title {
    font-weight: 400;
    height: 25px;
    display: inline-block;
    font-size: 14px;

    &.poi {
      cursor: pointer;
    }

    .title_name {
      display: inline-block;
      vertical-align: middle;
      max-width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      text-decoration: none;
      color: #000;
      font-weight: 400;
    }
  }
}

.scroll-wrapper {
  overflow: hidden !important;
  padding: 0 !important;
  position: relative;
}

.chat {
  .box_bd {
    bottom: 180px;
    padding: 0 19px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .box_ft {
    height: 180px;
    margin-right: 19px;
    border-top: 1px solid #d6d6d6;

    .toolbar {
      height: 30px;
      padding: 5px 17px;
    }

    .content {
      .flex {
        height: 6em;
        overflow-y: auto;
        overflow-x: hidden;
        padding-left: 20px;
        outline: none;
        border: 0;
        font-size: 14px;
      }
    }

    .action {
      text-align: right;
      margin-top: 5px;
    }

    .desc {
      color: #888;
      font-size: 12px;
      margin-left: 10px;
      margin-right: 7px;
    }
  }
}

.box_bd {
  position: absolute;
  top: 51px;
  right: 0;
  bottom: 0;
  left: 0;
}

.clearfix:after {
  content: ' ';
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}

.message {
  margin-bottom: 16px;
  float: left;
  width: 100%;

  &.me {
    float: right;
    text-align: right;
    clear: right;

    .avatar {
      float: right;
    }

    .content {
      overflow: hidden;
    }
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    float: left;
    cursor: pointer;
  }
}

.message_system {
  text-align: center;
  margin: 10px auto;
  max-width: 50%;

  .content {
    display: inline-block;
    font-size: 12px;
    padding: 1px 18px;
    color: #b2b2b2;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
  }
}

.bubble {
  max-width: 500px;
  min-height: 1em;
  display: inline-block;
  vertical-align: top;
  position: relative;
  text-align: left;
  font-size: 14px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  margin: 0 10px;

  &.bubble_primary {
    background-color: #b2e281;
  }
}

.bubble.right:after,
.bubble.right:before {
  left: 100%;
}

.bubble:after,
.bubble:before {
  position: absolute;
  top: 14px;
  border: 6px solid transparent;
  content: ' ';
}

.bubble.bubble_primary.right.arrow_primary:before,
.bubble.bubble_primary.right:after {
  border-left-color: #b2e281;
  border-left-width: 4px;
}

.bubble.right:after {
  border-left-color: #fff;
}
.bubble.right:after,
.bubble.right:before {
  left: 100%;
}

.bubble:after,
.bubble:before {
  position: absolute;
  top: 14px;
  border: 6px solid transparent;
  content: ' ';
}

.bubble.left:after,
.bubble.left:before {
  right: 100%;
}

.bubble.left:after {
  border-right-color: #fff;
  border-right-width: 4px;
}

.bubble.left:after,
.bubble.left:before {
  right: 100%;
}

.bubble.bubble_default {
  background-color: #fff;
}

.bubble_cont {
  word-wrap: break-word;
  word-break: break-all;
  min-height: 25px;

  .plain {
    padding: 9px 13px;
  }
}

pre {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  white-space: pre-wrap;
  word-break: normal;
}

// box_ft
.box_ft {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}

pre {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  white-space: pre-wrap;
  word-break: normal;
}

a {
  &.btn {
    text-decoration: none;
  }
}

.btn_send {
  background-color: #fff;
  color: #222;
  padding-left: 30px;
  padding-right: 30px;
}

.btn {
  display: inline-block;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  padding: 3px 20px;
  font-size: 14px;
}

// i
.web_wechat_down_icon {
  display: inline-block;
  vertical-align: middle;
}

.web_wechat_down_icon {
  width: 10px;
  height: 10px;
  background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png)
    no-repeat;
  background-position: -477px -65px;
  -webkit-background-size: 487px 462px;
  background-size: 487px 462px;
}

.web_wechat_add,
.web_wechat_addfriend {
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;
}

.web_wechat_add {
  background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png)
    no-repeat;
  background-position: -434px -398px;
  -webkit-background-size: 487px 462px;
  background-size: 487px 462px;
}

.web_wechat_search {
  background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png)
    no-repeat;
  background-position: -60px -432px;
  -webkit-background-size: 487px 462px;
  background-size: 487px 462px;
}

.web_wechat_screencut,
.web_wechat_search {
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;
}

.web_wechat_tab_chat_hl {
  background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png)
    no-repeat;
  background-position: -185px -96px;
  -webkit-background-size: 487px 462px;
  background-size: 487px 462px;
}

.web_wechat_tab_chat,
.web_wechat_tab_chat_hl {
  display: inline-block;
  vertical-align: middle;
  width: 35px;
  height: 35px;
}

.web_wechat_tab_public,
.web_wechat_tab_public_hl {
  display: inline-block;
  vertical-align: middle;
  width: 35px;
  height: 35px;
}

.web_wechat_tab_public {
  background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png)
    no-repeat;
  background-position: -376px -322px;
  -webkit-background-size: 487px 462px;
  background-size: 487px 462px;
}

.web_wechat_tab_friends,
.web_wechat_tab_friends_hl {
  display: inline-block;
  vertical-align: middle;
  width: 35px;
  height: 35px;
}

.web_wechat_tab_friends {
  background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png)
    no-repeat;
  background-position: -220px -96px;
  -webkit-background-size: 487px 462px;
  background-size: 487px 462px;
}

.web_wechat_reddot_big,
.web_wechat_reddot_middle {
  display: inline-block;
  vertical-align: middle;
  width: 22px;
  height: 16px;
}

.web_wechat_reddot_middle {
  background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png)
    no-repeat;
  background-position: -451px -380px;
  -webkit-background-size: 487px 462px;
  background-size: 487px 462px;
}

.web_wechat_down_icon,
.web_wechat_face {
  display: inline-block;
  vertical-align: middle;
}

.web_wechat_face {
  width: 30px;
  height: 30px;
  background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png)
    no-repeat;
  background-position: -404px -398px;
  -webkit-background-size: 487px 462px;
  background-size: 487px 462px;
}

.web_wechat_screencut,
.web_wechat_search {
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;
}

.web_wechat_screencut {
  background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png)
    no-repeat;
  background-position: -30px -432px;
  -webkit-background-size: 487px 462px;
  background-size: 487px 462px;
}

.web_wechat_pic,
.web_wechat_profile_loc {
  display: inline-block;
  vertical-align: middle;
}

.web_wechat_pic {
  width: 30px;
  height: 30px;
  background: url(//res.wx.qq.com/a/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png)
    no-repeat;
  background-position: -120px -432px;
  -webkit-background-size: 487px 462px;
  background-size: 487px 462px;
}

.webuploader-container {
  position: relative;
}
</style>
