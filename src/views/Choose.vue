<template>
    <div style="margin-top: 15px;">
      <el-row>
        <el-col :span="12" :offset="6">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select" size="medium">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="22" :offset="1">
          <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="日系美甲"><Sample></Sample></el-tab-pane>
            <el-tab-pane label="韩系美甲">韩系美甲</el-tab-pane>
            <el-tab-pane label="春夏美甲">春夏美甲</el-tab-pane>
            <el-tab-pane label="秋冬美甲">秋冬美甲</el-tab-pane>
          </el-tabs>
      </el-col>
    </el-row>
    </div>
</template>
<script>
import Sample from '@/components/Sample.vue'

export default {
  name: 'Choose',
  components: {
    Sample
  },
  data () {
    return {
      input3: '',
      select: '',
      tabPosition: 'left'
    }
  }
}
</script>
<style>
.el-select .el-input {
    width: 130px;
}
.input-with-select .el-input-group__prepend {
    background-color: #fff;
}
.el-tabs{
  margin-top: 30px;
}
.el-tabs .is-active{
  color: rgb(192, 178, 131);
}
.el-tabs__active-bar{
  background-color: rgb(192, 178, 131);
}
.el-tabs__content{
  padding: 30px;
}
</style>
