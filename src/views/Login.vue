<template>
  <el-form :model="loginParams" status-icon :rules="rules" ref="ruleForm" label-width="100px">
    <el-form-item label="昵称" prop="name">
      <el-input type="name" v-model="loginParams.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { userLogin } from '@/views/request/Request';
import { ILoginParams } from '@/contracts/ICommon';

@Component({})
export default class Login extends Vue {
  public loginParams: ILoginParams = {
    name: '',
    // password: '',
  };

  public rules = {
    name: [
      {
        validator: (rule: any, value: string, callback: any) => {
          if (value === '') {
            callback(new Error('请输入昵称'));
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
          console.log(item);
          sessionStorage.setItem('user', item);

          // io('http://127.0.0.1:3001', (err, socket) => {
          //   if (err) {
          //     sessionStorage.removeItem('token');
          //     return this.$router.push('/login');
          //   }
          //   socket.emit('login', item);
          // });
          this.$socket.init(item, () => {
            console.log('user无效！');
          });
          console.log(this.$socket);

          // this.$router.push('/message');
        });
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
}
</script>
