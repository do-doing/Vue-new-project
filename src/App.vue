<template>
  <div id="app">
    <!-- 头部 -->
    <Header/>
    <div class="main">
        <transition  name="fade" mode="out-in">
            <router-view/>   
        </transition>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  data() {
    return {
      
    };
  },
  components:{
    Header
  }
}
</script>

<style>
/* 
html5doctor.com Reset Stylesheet
v1.4.1 
2010-03-01
Author: Richard Clark - http://richclarkdesign.com
*/
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

:focus {
	outline: 1;
}

article,aside,canvas,details,figcaption,figure,
footer,header,hgroup,menu,nav,section,summary { 
    display:block;
}
ol,ul{
    list-style:none;
}
nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    border:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
    text-decoration:none;
}

ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

mark {
    background-color:#ff9;
    color:#000; 
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted #000;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

hr {
    display:block;
    height:1px;
    border:0;   
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}
.main{
    margin-top:50px;
}
.el-message-box{
  width:auto;
}
.el-tabs__header{
  padding-top: 10px;
}
.el-tabs__active-bar{
    background: #dd524d;
}
.el-tabs__item:hover,.el-tabs__item.is-active{
    color:#dd524d;
}
.el-tabs__nav-next, .el-tabs__nav-prev{
    line-height: 40px;
    font-size: 16px;
}
.centerTab .el-tabs__nav-scroll{
    display: flex;
    justify-content: space-around;
}
.page-title {
    font-size: 18px;
    color: #212121;
    font-weight: bold;
    height: 45px;
    text-align: center;
    line-height: 45px;
    border-bottom: 1px solid #e5e5e5;
}
/*文章詳情*/
.article-details{
  padding: 15px;
}
.article-details .article-title{
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  padding: 0 10px;
}
.article-meta{
  color: #999;
  font-size: 12px;
  margin: 20px 0 10px;
}
.mui-card-content-inner{
  border-radius: 4px;
  background: #f7f7f7;
  font-size: 14px;
  padding: 10px 15px;
  color: #212121;

}
.artcle-text{
  text-indent: 2em;
  color: #212121;
  font-size: 14px;
}
.article-content{
    margin: 10px 0;
    padding-bottom: 10px;
    
}
.article-content{
  border-bottom: 1px solid #e5e5e5;
}
.artcle-pager{
  font-size: 14px;
}
.tab-menu{
  border-bottom: 1px solid #e5e5e5;
  padding: 0 10px;
}

.mui-segmented-control-negative.mui-segmented-control-inverted .mui-control-item{
  position: relative;
  font-size: 16px;
  line-height: 50px;
  border:none;
}
.tab-menu-sm .mui-segmented-control-negative.mui-segmented-control-inverted .mui-control-item{
  display: inline-block;
  width: 33%;
}
.mui-segmented-control-negative.mui-segmented-control-inverted .mui-control-item.mui-active{
  border:none;
}
.mui-segmented-control-negative.mui-segmented-control-inverted .mui-control-item.mui-active:after{
  content: '';
  position: absolute;
  height: 2px;
  background: #e60012;
  width: 30px;
  bottom: 0;
  left: 50%;
  margin-left: -15px;
}
.tab-content{
  border-top: 7px solid #f5f5f5;
}
.content-text{
  padding:0 15px 10px;
  font-size: 14px;
  color: #212121;
}

.apply-step .mui-badge{

  font-size: 14px;
  width: 30px;
  height: 30px;
  line-height: 24px;
  background: #f41652;
  text-align: center;
  margin-top: 5px;
  z-index: 2;
}
.apply-step li{
  position: relative;
  margin-bottom: 20px;
}
.apply-step li:not(:last-child):before{
  content: '';
    position: absolute;
    width: 2px;
    height: 65px;
    z-index: 0;
    background: #f6f6f6;
    left: 14px;
    top: 10px;
}
.tab-content .articleArea{
  border-top: none;
}
.aboutText{
  color: #212121;
  margin: 0;
  line-height:1.4;
}
.about-content ul{
  padding: 0;
  margin: 0;
}
ul.point-ul li{
  line-height:1.4;
}
ul.point-ul li:before{
  content: '○';
  margin-right: 2px;
  font-size:12px;
  color: #e71f19;
}
.img-center{
  text-align: center;
  width: 150px;
  margin:10px auto;
}
.img-center img{
  width: 100%;
}
.el-message{
  min-width:auto;
  top:50px;
}
.badge-list li{
  display: inline-block;
  background: #f5f5f5;
  border-radius: 1px;
  color: #212121;
  padding: 4px 10px;
  margin: 20px 4px 0 0;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .2s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .2s;
}
</style>
