<template>
  <div>
    <el-row type="flex" class="header" justify="space-between">
      <el-col :span="2"><a @click="menuShow = !menuShow"><i class="fa fa-bars fa-lg"></i></a></el-col>
      <el-col :span="18"><router-link to="/"><img src="../assets/logo.png" width="220px" @click="menuShow = false"></router-link></el-col>
      <el-col :span="2"><a @click="openSearch"><i class="fa fa-search fa-lg"></i></a></el-col>
    </el-row>
    <transition name="el-zoom-in-top">
      <div v-show="menuShow" id="menu-wrapper" class="menu-wrapper">
        <div id="menu" class="menu">
          <ul class="mui-table-view">
            <li class="menu-item">
              <router-link to="/about"><span @click="menuShow = false">協會簡介</span></router-link>
            </li>
            <li class="menu-item">
              <router-link to="/state"><span @click="menuShow = false">協會動態</span></router-link>
            </li>
            <li class="menu-item">
              <router-link to="/news"><span @click="menuShow = false">行業動態</span></router-link>
            </li>
            <li class="menu-item">
              <a href="policy_page.html">政策法規</a>
            </li>
            <li class="menu-item">
              <router-link to="/apply"><span @click="menuShow = false">入會申請</span></router-link>
            </li>
            <li class="menu-item">
              <router-link to="/contact"><span @click="menuShow = false">聯繫我們</span></router-link>
            </li>
          </ul>
        </div>
        <div @click="menuShow = !menuShow" id="menu-backdrop" class="menu-backdrop"></div>
      </div>
    </transition>
  </div>
</template>
 
<script>
export default {
  name: 'Header',
  data(){
    return{
      menuShow:false,
    }
  },
  methods:{
    openSearch() {
      this.$prompt('请输入关键字', '搜索', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '暂时还没有搜索功能(⊙o⊙)？ ' 
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    }
  }
}

</script>
<style scoped >
  .header{
    position:fixed;
    height:50px;
    align-items:center;
    top: 0;
    -webkit-box-shadow: 0 1px 6px #ccc;
    box-shadow: 0 1px 6px #ccc;
    width: 100%;
    z-index: 9;
    background: #fff;
  }
  .header>div{
    text-align:center;
  }
  .menu-open {
  height: 100%;
  width: 100%;
}

.menu-open .mui-scroll-wrapper {
  position: absolute;
  top: 48;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
}

.menu-backdrop {
  display: none;
}

.menu-backdrop {
  position: fixed;
  top: 50px;
  bottom: 0;
  height: 100vh;
  width: 100%;
  display: block;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
}

.menu-wrapper {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 3;
  /*text-align: center;*/
  /*background-color: #333;*/
  width: 100%;
}


.menu {
  position:relative;
  width: 100%;
  z-index:3;
}

.menu .mui-table-view-inverted {
  color: gray;
  font-size: 19px;
}

.menu .mui-table-view-inverted .mui-table-view-cell:after {
  height: 2px;
  left: 0;
  right: 0;
}

.menu-wrapper.mui-active,
.menu-wrapper.mui-active .menu {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

#menu-wrapper .menu-item {
  display: inline-flex;
  flex-direction: column;
  margin: 4px 5px;
}

#menu-wrapper .menu-item a {
  display: block;
  font-size: 14px;
  color: #3b3b3b;
  padding: 4px 8px;
}

#menu-wrapper .mui-table-view {
  padding: 10px 10px;
  background: #fff;
}


#menu-wrapper .menu-item a.router-link-active {
  color: #fff;
  background: #f41652;
  border-radius: 12px;
}

</style>