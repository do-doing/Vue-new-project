<template>
  <div>
    <el-row type="flex" class="header" justify="space-between">
      <el-col :span="2"><el-button type="text" @click="menuShow = !menuShow"><i class="fa fa-bars"></i></el-button></el-col>
      <el-col :span="18"><a href="index.html"><img src="../assets/logo.png" width="220px"></a></el-col>
      <el-col :span="2"><i class="fa fa-search"></i></el-col>
    </el-row>
    <transition name="el-zoom-in-top">
      <div v-show="menuShow" id="menu-wrapper" class="menu-wrapper">
        <div id="menu" class="menu">
          <ul class="mui-table-view">
            <li class="menu-item">
              <a href="about_page.html" class="active">協會簡介</a>
            </li>
            <li class="menu-item">
              <a href="state_page.html">協會動態</a>
            </li>
            <li class="menu-item">
              <a href="news_page.html">行業動態</a>
            </li>
            <li class="menu-item">
              <a href="policy_page.html">政策法規</a>
            </li>
            <li class="menu-item">
              <a href="apply_page.html">入會申請</a>
            </li>
            <li class="menu-item">
              <a href="contact_page.html">聯繫我們</a>
            </li>
          </ul>
        </div>
        <div id="menu-backdrop" class="menu-backdrop"></div>
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
    toggleMenu:function () {

    }

  }
}

</script>
<style scoped >
  .header{
    padding:5px 0;
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

.menu-open .menu-backdrop {
  position: fixed;
  top: 50px;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: block;
  z-index: 998;
  background: rgba(0, 0, 0, 0.6);
}

.menu-wrapper {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 999;
  /*text-align: center;*/
  /*background-color: #333;*/
  width: 100%;
}


.menu {
  width: 100%;
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


#menu-wrapper .menu-item a.active {
  color: #fff;
  background: #f41652;
  border-radius: 12px;
}
</style>