<template>
  <div>
    <div class="page-title"> 行業動態</div>
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
    </div>
    <div class="content-layout">
      <div class="article">
        <h4 class="content-title">每日熱點</h4>
        <div class="articleArea">
          <div class="mui-table-view-cell" v-for="(item,index) in news2_contents" v-if='index!=0'>
            <a class="mui-navigate-right" href=""><p class="artcleList">{{item.title}}</p><i class="fa fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="content-layout">
      <div class="article">
        <h4 class="content-title">每週推薦</h4>
        <div class="articleArea">
          <div class="mui-table-view-cell" v-for="(item,index) in news2_contents" v-if='index!=0'>
            <router-link :to="{path:`/article/${item.id}`,query:{ID:item.id,title:item.title}}" :title="item.title" class="mui-navigate-right" ><p class="artcleList">{{item.title}}</p><i class="fa fa-chevron-right"></i></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'news',
    data(){
      return{
        news_contents:[
        {
          id:6,
          src:'http://www.ccsifa.org/uploads/180323/2-1P32316404X56.jpg',
          tag:'协会动态',
          time:'2018-03-23',
          title:'中華兩岸互金協會會長張文生：臺灣金融科技的瞭望者'
        },{
          id:7,
          src:'http://www.ccsifa.org/uploads/180316/2-1P316101233158.jpg',
          tag:'协会动态',
          time:'2018-03-16',
          title:'廣州臺協天河分會全體大會召開 張文生當選理事'
        },{
          id:8,
          src:'http://www.ccsifa.org/uploads/180312/2-1P31210344WB.png',
          tag:'协会动态',
          time:'2018-03-16',
          title:'重磅！國台辦發佈31條惠臺措施'
        },
      ],
      news2_contents:[
        {
          id:9,
          src:'http://www.ccsifa.org/uploads/180409/2-1P40912050Y12.jpg',
          title:'央行下了鐵命令，6月30日大終結！'
        },{
          id:10,
          title:'LinkedIn聯合創始人發起區塊鏈專案Hub，已獲矽谷科技高管和機構'
        },{
          id:11,
          title:'近500家P2P平臺被淘汰 2018備案年迎來決勝局'
        },{
          id:12,
          title:'網貸平臺年報比拼：借款更小額分散 但逾期率上升'
        },{
          id:13,
          title:'美國保護主義可能引發數字貿易戰'
        },{
          id:14,
          title:'美電商巨頭欲進軍銀行業 支付業務與中國差距大'
        },{
          id:15,
          title:'小蠻腰科技大會即將隆重召開'
        }
      ]
      }
    },
  }
</script>

<style>

</style>