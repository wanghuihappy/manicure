<template>
  <div id="app">
    <el-header>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <router-link :to="{path: '/'}">
              <img src="~@/assets/bg.jpg">
            </router-link>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-button size="small" icon="el-icon-warning-outline" type="text" plain @click="dialogFormVisible = true">请登录</el-button>
            <el-button size="small" icon="el-icon-s-order" class="order">我的预约订单</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-main>
    <el-footer>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="24"><p>© 2016 fishenal MIT</p></el-col>
      </el-row>
    </el-footer>
    <el-dialog title="Hi,everyone!" :visible.sync="dialogFormVisible">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="登录" name="first"><Login></Login></el-tab-pane>
        <el-tab-pane label="注册" name="second"><Regis></Regis></el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Regis from '@/components/Regis.vue'

export default {
  name: 'app',
  components: {
    Login,
    Regis
  },
  data () {
    return {
      dialogFormVisible: false,
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="less">
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-button{
  color: #909399;
}
.el-row{
  height: 100%;
}
.el-col-6{
  padding: 12px;
}
.el-main{
  padding: 0;
}
.el-footer{
  background: #dcd0c0;
}
.el-footer p{
  margin-top: 30px;
}
</style>
