<template>
  <div class="login">
    <div class="login_box">
      <el-form
        :inline="true"
        class="form"
        :model="loginParams"
        status-icon
        :rules="rules"
        ref="ruleForm"
      >
        <el-form-item prop="name">
          <el-input type="name" v-model="loginParams.name" autocomplete="off" placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            :loading="loading"
          >{{loginState.text}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { userLogin } from '@/views/request/Request';
import { ILoginParams } from '@/contracts/ICommon';
import { timer } from 'rxjs';

@Component({})
export default class Login extends Vue {
  public loginParams: ILoginParams = {
    name: '',
    // password: '',
  };

  public loginState = {
    invalid: false,
    text: '进入',
  };

  public loading = false;

  public rules = {
    name: [
      {
        validator: (rule: any, value: string, callback: any) => {
          console.log(this.loginState);
          if (value === '') {
            callback(new Error('请输入昵称！'));
          } else if (this.loginState.invalid) {
            callback(new Error('昵称无效！'));
          } else {
            callback();
          }
        },
        trigger: 'blur',
      },
    ],
  };

  public submitForm(formName: string) {
    (this.$refs[formName] as any).validate((valid: any) => {
      if (valid) {
        userLogin(this.loginParams).subscribe((item: any) => {
          sessionStorage.setItem('user', item);
          this.$socket.init(item, () => {
            console.log('user无效！');
            this.loginState.invalid = true;
            this.loginState.text = '进入中';
            sessionStorage.removeItem('user');
            if ((this as any).$router.history.current.name !== 'login') {
              this.$router.push('/login');
            }
            return;
          });
          this.loading = true;
          timer(1000).subscribe((_) => {
            if (!this.loginState.invalid) {
              this.$router.push('/chat');
            } else {
              (this.$refs[formName] as any).validateField('name');
              this.loading = false;
            }
          });
        });
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }

  @Watch('loginParams.name')
  private name(value: string) {
    if (!value) {
      this.loginState.invalid = false;
      this.loginState.text = '进入';
      (this.$refs.ruleForm as any).resetFields();
    }
  }

  private mounted() {
    let user = sessionStorage.getItem('user');
    if (user) {
      this.$router.push('/chat');
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: block;
  height: 100%;
  min-width: 860px;
  min-height: 700px;
  overflow: auto;
  position: relative;
}

.login_box {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -190px;
  margin-top: -270px;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  background-color: #fff;
  width: 380px;
  height: 380px;
  box-shadow: 0 2px 10px #999;
  -moz-box-shadow: #999 0 2px 10px;
  -webkit-box-shadow: #999 0 2px 10px;

  .form {
    position: relative;
    top: 43%;
    text-align: center;
  }
}
</style>
