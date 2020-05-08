<template>
  <div class="home">
    <Menu></Menu>
    <div class="main">
      <el-row>
        <el-col :span="18"><SlideShow></SlideShow></el-col>
        <el-col :span="6"><Aside></Aside></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import SlideShow from '@/components/SlideShow.vue'
import Aside from '@/components/Aside.vue'

export default {
  name: 'Home',
  components: {
    Menu,
    SlideShow,
    Aside
  }
}
</script>
