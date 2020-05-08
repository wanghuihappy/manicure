<template>
    <!-- <el-header> -->
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#dcd0c0"
            text-color="#909399"
            active-text-color="#c0b283">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">预约服务</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">优惠活动</template>
                <el-submenu index="2-1">
                    <template slot="title">会员体系</template>
                    <el-menu-item index="2-4-1">会员级别</el-menu-item>
                    <el-menu-item index="2-4-2">优惠券</el-menu-item>
                    <el-menu-item index="2-4-3">会员积分兑换</el-menu-item>
                </el-submenu>
                <el-menu-item index="2-2">充值赠送</el-menu-item>
                <el-menu-item index="2-3">砍价商城</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">门店查询</el-menu-item>
        </el-menu>
    <!-- </el-header> -->
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
.el-menu{
  padding-left: 80px;
}
</style>
