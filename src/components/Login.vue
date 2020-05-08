<template>
  <div class="login">
    <el-form :model="form">
      <el-form-item label="用户名" :label-width="formLabelWidth">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass" :label-width="formLabelWidth">
        <el-input type="password" v-model="form.pass" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <span>没有账号？亲，请先去注册哦 -->></span>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    // var checkAge = (rule, value, callback) => {
    //   if (!value) {
    //     return callback(new Error('账号不能为空'))
    //   }
    //   setTimeout(() => {
    //     if (!Number.isInteger(value)) {
    //       callback(new Error('请输入数字值'))
    //     } else {
    //       callback()
    //     }
    //   }, 1000)
    // }
    // var validatePass = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入密码'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      form: {
        name: '',
        pass: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '100px'
      // rules: {
      //   pass: [
      //     { validator: validatePass, trigger: 'blur' }
      //   ],
      //   age: [
      //     { validator: checkAge, trigger: 'blur' }
      //   ]
      // }
    }
  }
  // methods: {
  //   submitForm (formName) {
  //     this.$refs[formName].validate((valid) => {
  //       if (valid) {
  //         alert('submit!')
  //       } else {
  //         console.log('error submit!!')
  //         return false
  //       }
  //     })
  //   },
  //   resetForm (formName) {
  //     this.$refs[formName].resetFields()
  //   }
  // }
}
</script>
<style>
.el-form{
  padding-right: 150px;
  padding-left: 50px;
}
span{
  color:#909399;
}
.dialog-footer{
  margin-top: 10px;
}
</style>
