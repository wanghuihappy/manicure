<template>
    <div class="details">
        <el-row>
            <el-col :span="16" :offset="4">
                <el-card>
                    <div slot="header" class="clearfix">
                      <span><i class="el-icon-s-order"></i>预约</span>
                    </div>
                    <div class="survey">
                        <el-divider content-position="left">到店时间</el-divider>
                        <el-row>
                            <el-col :span="6" :offset="2">
                                <span>营业时间XXX-XXX</span>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6" :offset="2">
                                <span>门店面积XXX</span>
                            </el-col>
                            <el-col :span="6" :offset="2">
                                <span>开业时间XXX-XXX</span>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6" :offset="2">
                                <span>美甲师XXX</span>
                            </el-col>
                            <el-col :span="6" :offset="2">
                                <span>座位XXX</span>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="facilities">
                        <el-divider content-position="left">美甲师</el-divider>
                        <el-row>
                            <el-col :span="6" :offset="2">
                                <span>免费WIFI</span>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="service">
                        <el-divider content-position="left">预约人信息</el-divider>
                        <el-row>
                            <el-col :span="6" :offset="2">
                                <span>会员免费补色</span>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="evaluate">
                        <el-divider content-position="left">历史评价</el-divider>
                        <el-row>
                            <el-col :span="6" :offset="2">
                                <el-rate v-model="value" disabled show-score score-template="{value}" text-color="#ff9900"></el-rate>
                            </el-col>
                            
                        </el-row>
                    </div>
                  </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  name: 'Details',
  data () {
    return {
      value: 3.7
    }
  }
}
</script>
<style>
.details .el-card .el-col{
    text-align: left;
}
</style>
