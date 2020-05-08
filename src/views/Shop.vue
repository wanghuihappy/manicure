<template>
    <div class="shop">
        <el-row>
            <el-col :span="16" :offset="4">
                <el-card>
                    <div slot="header" class="clearfix">
                      <span><i class="el-icon-s-shop"></i>店铺名称</span>
                      <el-rate v-model="value" disabled show-score score-template="{value}" text-color="#ff9900"></el-rate>
                    </div>
                    <div class="trim">
                        <el-divider content-position="left">门店环境</el-divider>
                        <p class="image">
                            <el-image :src="url" :fit="fit"></el-image>
                            <el-image :src="url" :fit="fit"></el-image>
                            <el-image :src="url" :fit="fit"></el-image>
                        </p>
                    </div>
                    <div class="time">
                        <el-divider></el-divider>
                        <p>
                            <span><i class="el-icon-time"></i>营业至XXX</span>
                            <el-divider direction="vertical"></el-divider>
                            <span><i class="el-icon-map-location"></i>地址：XXX</span>
                            <el-divider direction="vertical"></el-divider>
                            <span @click="toDetails">店铺详情&&历史评价<i class="el-icon-d-arrow-right"></i></span>
                        </p>
                    </div>
                    <div class="list">
                        <el-divider content-position="left">商品列表</el-divider>
                        <div class="man">
                            <el-row>
                                <el-col :span="8">
                                    <el-image :src="url" :fit="fit"></el-image>
                                </el-col>
                                <el-col :span="10">
                                    <p>商品名字</p>
                                    <p><span>价格</span><span>会员价</span></p>
                                    <el-button size="medium" @click="toOrder">安心预约<el-divider direction="vertical"></el-divider>XX人订过<i class="el-icon-d-arrow-right"></i></el-button>
                                </el-col>
                            </el-row> 
                        </div>
                    </div>
                  </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  name: 'Shop',
  data () {
    return {
      value: 3.7,
      fits: 'fill',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  methods: {
    toOrder () {
      this.$router.push({ path: '/Shop/Order' })
    },
    toDetails () {
      this.$router.push({ path: '/Shop/Details' })
    }
  }
}
</script>
<style>
.trim h2{
    float: left;
    padding: 10px;
    border-bottom: 1px solid #000;
}
.el-image{
    width: 200px;
    height: 100px;
    margin: 20px;
}
.time span{
    padding: 20px;
}
.man .el-col-10{
    margin-top: 20px;
}
.man p{
    margin-bottom: 12px;
}
</style>

