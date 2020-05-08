<template>
    <el-row>
        <el-col :span="7" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0">
          <el-card>
            <el-row>
                <el-col :span="10">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                </el-col>
                <el-col :span="14">
                    <p>店铺名字</p>
                    <p>
                        <el-rate v-model="value" disabled text-color="#ff9900"></el-rate>
                    </p>
                    <p>店铺地址</p>
                </el-col>
            </el-row>
            <el-row class="goods">
                <el-col :span="8">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                </el-col>
                <el-col :span="14">
                    <p>名字</p>
                    <p><span>价格</span><span>已售</span></p>
                </el-col>
            </el-row>
            <el-link href="/Shop"><i class="el-icon-view el-icon--right"></i>点击查看更多</el-link>
          </el-card>
        </el-col>
    </el-row>
</template>
<script>
export default {
  name: 'Sample',
  data () {
    return {
      value: 3.7
    }
  }
}
</script>
<style>
.image {
    width: 100%;
    display: block;
    margin-top: 10px;
}
p{
    margin-top: 10px;
}
.goods span{
    margin: 20px;
}
.el-link{
    float: right;
    margin-bottom: 20px;
}
</style>
