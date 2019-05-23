<template>
  <div class="main_inner">
    <div class="panel give_me">
      <div class="header">
        <div class="avatar">
          <img class="img" src="../image/user1.jpg">
        </div>
        <div class="info">
          <h3 class="nickname">
            <span class="display_name">污先森</span>
            <a class="opt" href="javascript:;">
              <i class="web_wechat_add"></i>
            </a>
          </h3>
        </div>
      </div>
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
              <div>
                <div class="chat_item slide-left active">
                  <div class="ext">
                    <p class="attr">14:05</p>
                  </div>
                  <div class="avatar">
                    <img class="img" src="../image/user2.jpg" alt>
                    <i class="icon web_wechat_reddot_middle">1</i>
                  </div>
                  <div class="info">
                    <h3 class="nickname">
                      <span class="nickname_text">大只猪</span>
                    </h3>
                    <p class="msg">
                      <span>哈哈哈</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div class="chat_item slide-left active">
                  <div class="ext">
                    <p class="attr">14:05</p>
                  </div>
                  <div class="avatar">
                    <img class="img" src="../image/user3.jpg" alt>
                  </div>
                  <div class="info">
                    <h3 class="nickname">
                      <span class="nickname_text">大只猪</span>
                    </h3>
                    <p class="msg">
                      <span>哈哈哈</span>
                    </p>
                  </div>
                </div>
              </div>
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
              <a class="title_name">水熊-互联网</a>
              <span>(108)</span>
              <i class="web_wechat_down_icon"></i>
            </div>
          </div>
        </div>
        <div class="scroll-wrapper box_bd" style="position: absolute">
          <div style="margin-bottom: 0px;margin-right: 0px;height: 486px;">456</div>
        </div>
        <div>789</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Chat extends Vue {}
</script>

<style lang="scss" scoped>
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
}

.box_bd {
  position: absolute;
  top: 51px;
  right: 0;
  bottom: 0;
  left: 0;
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
</style>
