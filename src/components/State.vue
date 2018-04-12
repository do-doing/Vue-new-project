<template>
  <div class="centerTab">
    <el-tabs  v-model="activeName">
      <el-tab-pane label="協會動態" name="協會動態">
        <div class="page-title">協會動態</div>
        <div class="content-layout">
          <div class="article">
            <div class="articleArea">
              <div class="mui-table-view-cell" v-for="(item,index) in news2_contents" v-if='index!=0 && index!=(news2_contents.length-1)'>
                <router-link :to="{path:`/article/${item.id}`,query:{ID:item.id,title:item.title}}" :title="item.title" class="mui-navigate-right" ><p class="artcleList">{{item.title}}</p><i class="fa fa-chevron-right"></i></router-link>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="重要公告" name="重要公告">
        <div class="page-title">重要公告</div>
        <div class="content-layout">
          <div class="article">
            <div class="articleArea">
              <div class="mui-table-view-cell" v-for="(item,index) in news2_contents" v-if='index==(news2_contents.length-1)'>
                <router-link :to="{path:`/article/${item.id}`,query:{ID:item.id,title:item.title}}" :title="item.title" class="mui-navigate-right" ><p class="artcleList">{{item.title}}</p><i class="fa fa-chevron-right"></i></router-link>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="會員動態" name="會員動態">
        <div class="page-title">會員動態</div>
        <div class="content-layout">
          <div class="article">
            <div class="articleArea">
              <a class="more-btn" >查看更多</a>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        activeName:'協會動態',
        news2_contents:[
          {
            id:9,
            src:'http://i2.bvimg.com/640851/e41cef7c3f8dd510.jpg',
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

<style scoped>

</style>