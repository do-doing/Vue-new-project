<template>
  <div>
    <Swiper v-if="carousel_img.length > 0" interval="4500">
      <Slide v-for="(item,index) in carousel_img" :key="index">
        <a href="" :title="item.title"><img :src="item.src"></a>
      </Slide>
    </Swiper>
    <div id="newsContents" class="content-layout">
        <div class="mui-table-view-cell" v-for="(item,index) in news_contents" :key="index">
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="8"><a href="" :title="item.title"><img :src="item.src"></a></el-col>
            <el-col :span="14">
              <div class="media-title"><a href="" :title="item.title">{{item.title}}</a></div>
              <p class="mui-ellipsis">{{item.time}}</p><p class="new-tag">{{item.tag}}</p>
            </el-col>
          </el-row>
      </div>
      <a class="more-btn" href="">查看更多</a>
    </div>
    <div class="content-layout">
      <div class="article">
      	<h4 class="content-title">協會簡介</h4>
        <div class="articleArea">
        	<p class="artcleText">協會旨在通過綜合互聯網金融行業發展資源，搭建臺灣同行與內地同行之間合作交流的平臺，實現協會成員優勢互補、合作共贏、協同創新、規範自律，促進兩岸互聯網金融教育及交流，推動行業健康有序發展。</p>
        </div>
      </div>
    </div>
    <div class="content-layout">
      <div class="article">
        <h4 class="content-title">協會公告</h4>
        <div class="articleArea">
          <div class="mui-table-view-cell">
            <a class="mui-navigate-right" href=""><p class="artcleList">小蠻腰科技大會即將隆重召開</p><i class="fa fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="content-layout">
      <div class="article">
        <h4 class="content-title">行業動態</h4>
        <div class="articleArea">
          <div class="articleimgArea">
			      <a href="view.php?aid=66">
              <img :src="news2_contents[0].src">
              <p class="articleimgTitle">{{news2_contents[0].title}}</p>
            </a>
          </div>
          <div class="mui-table-view-cell" v-for="(item,index) in news2_contents" v-if='index!=0'>
            <a class="mui-navigate-right" href=""><p class="artcleList">{{item.title}}</p><i class="fa fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { Swiper, Slide } from 'vue-swiper-component';
export default {
  name: 'Main',
  components: {
    Swiper,
    Slide
  },
  data(){
    return{
      carousel_img:[
        {
          title:'會長張文生出席2017廣州國際創新節 推動臺灣青年創業實習',
          src:'http://www.ccsifa.org/style/images/banner033.png'
        },{
          title:'會長張文生帶隊訪問臺灣政治大學 共探金融科技發展',
          src:'http://www.ccsifa.org/style/images/banner-xieh.png'
        },{
          title:'協會會長張文生即將出席小蠻腰科技大會',
          src:'http://www.ccsifa.org/style/images/banner1.png'
        }
      ],
      news_contents:[
        {
          src:'http://www.ccsifa.org/uploads/180323/2-1P32316404X56.jpg',
          tag:'协会动态',
          time:'2018-03-23',
          title:'中華兩岸互金協會會長張文生：臺灣金融科技的瞭望者'
        },{
          src:'http://www.ccsifa.org/uploads/180316/2-1P316101233158.jpg',
          tag:'协会动态',
          time:'2018-03-16',
          title:'廣州臺協天河分會全體大會召開 張文生當選理事'
        },{
          src:'http://www.ccsifa.org/uploads/180312/2-1P31210344WB.png',
          tag:'协会动态',
          time:'2018-03-16',
          title:'重磅！國台辦發佈31條惠臺措施'
        },
      ],
      news2_contents:[
        {
          src:'http://www.ccsifa.org/uploads/180409/2-1P40912050Y12.jpg',
          title:'央行下了鐵命令，6月30日大終結！'
        },{
          title:'LinkedIn聯合創始人發起區塊鏈專案Hub，已獲矽谷科技高管和機構'
        },{
          title:'近500家P2P平臺被淘汰 2018備案年迎來決勝局'
        },{
          title:'網貸平臺年報比拼：借款更小額分散 但逾期率上升'
        },{
          title:'美國保護主義可能引發數字貿易戰'
        },{
          title:'美電商巨頭欲進軍銀行業 支付業務與中國差距大'
        }
      ]
    }
  },
}

</script>

<style>
img{
  max-width:100%;
}
.wh_show_bgcolor{
  background:#fff!important;
}
.content-layout {
    position: relative;
    border-bottom: 6px solid #f5f5f5;
}
.mui-table-view-cell{
  position: relative;
  padding: 10px 0;
}
.mui-table-view-cell:after{
  position: absolute;
  right: 0;
  bottom: 0;
  left: 15px;
  height: 1px;
  content: '';
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
  background-color: #c8c7cc;
  left: 0;
  background: #e5e5e5;
}

#newsContents .media-title a{
  white-space: normal;
  font-size: 15px;
  color: #3b3b3b;
}

#newsContents .mui-ellipsis {
  position: absolute;
  bottom: 0px;
  font-size: 12px;
  color: #999;
}

#newsContents .new-tag {
  position: absolute;
  bottom: 0px;
  right: 10px;
  font-size: 10px;
  color: #fff;
  background: #67a1f1;
  border-radius: 2px;
  padding: 0 5px;
  line-height: 1.5;
}

#newsContents .mui-table-view-cell:after {
  left: 0;
  background: #e5e5e5;
}
.more-btn {
  display: block;
  color: #999;
  font-size: 14px;
  text-align: center;
  padding: 12px 0;
}
.article .content-title {
  position: relative;
  font-weight: inherit;
  font-size: 16px;
  color: #3b3b3b;
  border-left: 3px solid #e70f20;
  padding-left: 6px;
  margin: 14px 15px;
}
.article .content-title:after{
  content:'';
  left: 0;
  background: #e5e5e5;
  height:1px;
  width:100%;  
}
.article .content-title .more-link{
  color: #999;
  line-height: 1.2;
  font-size: 14px;
}
.articleArea {
    border-top: 1px solid #e5e5e5;
    padding: 0 15px;
}
.artcleText {
  position: relative;
    padding: 10px 0px 5px;
    color: #212121;
    font-size: 14px;
    line-height: 1.6;
}
.mui-navigate-right{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.mui-navigate-right i{
  color: #bbb;
  font-size:12px;
}
.artcleList{
  font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 5px 20px 5px 0px;
    color: #212121;

}
.articleimgArea {
  position: relative;
      margin: 10px 0 0;
}

.articleimgTitle {
    box-sizing: border-box;
    position: absolute;
    font-size: 14px;
    width: 100%;
    bottom: 0px;
    color: #fff;
    background: rgba(0, 0, 0, .4);
    margin-bottom: 2px;
    padding: 6px 10px;
}
</style>