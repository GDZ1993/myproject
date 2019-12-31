<template>
  <div class="login login-row">
    <div class="login-Form">
      <p style="margin-bottom: 33px;font-size: 14px;">仓储管理系统</p>
      <Form ref="formItem" :model="formItem" :rules="ruleItem">
        <FormItem label="" prop="code">
          <Input v-model="formItem.code" placeholder="账号">
            <Icon type="ios-contact" slot="prepend" size="20"/>
          </Input>
        </FormItem>
        <FormItem label="" prop="password">
          <Input v-model="formItem.password" type="password" placeholder="密码">
            <Icon type="md-lock" slot="prepend" size="20"/>
          </Input>
        </FormItem>
        <FormItem >
          <Button type="warning" long style="height: 40px" class="login-Button" @click="on_login" :loading="buttomLogding">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      buttomLogding: false,
      formItem: {
        code: '',
        password: ''
      },
      ruleItem: {
        code: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    on_login () {
      this.$refs['formItem'].validate((valid) => {
        if (valid) {
          this.loginRequest()
        } else {
          this.$Modal.warning({
            title: '错误提示',
            content: '请输入用户名或密码'
          })
        }
      })
    },
    loginRequest () {
      this.buttomLogding = true
      this.$ajax.post('/user/login', this.formItem).then(res => {
        console.log(res)
        if (res.data.code === 200) {
          this.$cookies.set('token', res.data.data)
        }
        this.buttomLogding = false
      }).catch((e) => {
        this.buttomLogding = false
        console.log(e, '/user/login')
        this.$Notice.warning({title: '警告', desc: '接口错误,请与系统管理员联系,/user/login'})
      })
    }
  }
}
</script>

<style scoped >
  .login-row{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  .login{
    width: 100vw;
    height: 100vh;
    background-image: url("../../assets/3@2x.png");
    background-size: 100% 100%;
  }
  .login-Form{
    width: 300px;
    margin-right: 20%;
  }
  .login-register-p{
    color:  #888888;
  }
  .login-register-p>span{
    color:  #333333;
  }
  .login-register-p:hover>span{
    color: red;
  }
  .login--p-hover:hover{
    cursor: pointer;
  }
  .login-Button{
    letter-spacing: 5px;
    font-size: 16px;
  }
</style>
