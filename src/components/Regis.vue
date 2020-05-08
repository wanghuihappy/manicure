<template>
    <div class="regis">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" >
            <el-form-item label="手机号码" prop="number">
                <el-input v-model="ruleForm.number"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户类型" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                  <el-radio label="个人（客户）"></el-radio>
                  <el-radio label="店铺（商户）"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="店铺地址" prop="address">
                <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
            <el-form-item label="店铺简介" prop="details">
                <el-input v-model="ruleForm.details"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  name: 'Regis',
  data () {
    return {
      ruleForm: {
        number: '',
        name: '',
        pass: '',
        checkPass: '',
        resource: '',
        address: '',
        details: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        resource: [
          { required: true, message: '请选择用户类型', trigger: 'change' }
        ],
        details: [
          { required: true, message: '请填写店铺简介', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
