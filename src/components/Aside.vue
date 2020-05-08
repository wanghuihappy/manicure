<template>
    <div class="aside">
        <el-row type="flex" justify="center">
          <el-col :span="8"><h3>优惠活动</h3></el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="8"><h2>优惠活动</h2></el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="8"><el-button size="medium" @click="toChoose">开始预约</el-button></el-col>
        </el-row>
        <el-divider></el-divider>
        <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
        <el-row type="flex" justify="center">
          <el-col :span="8"><el-button size="medium">兑换</el-button></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  name: 'Aside',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    toChoose () {
      this.$router.push({ path: '/Choose' })
    }
  }
}
</script>
<style>
.aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    padding: 20px;
}
.aside .el-row {
    margin-top: 30px;
  }
</style>
