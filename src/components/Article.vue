<template>
  <div>
    <div class="page-title"><a v-on:click="goBack" class="back-icon"><i class="fa fa-angle-left fa-lg"></i></a> 行業動態</div>
    <div class="article-details">
      <div class="article-title">{{$route.query.title}}</div>
      <div class="article-meta mui-clearfix">
        <span class="mui-pull-left"> 於：{{artcle.time}}</span>
      </div>
      <div class="mui-card-content-inner">{{artcle.summary}}</div>
      <div class="article-content">
        <div v-html='artcle.details'></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
        return{
          artcle:{
            title:'央行下了鐵命令，6月30日大終結！',
            time:'2018-04-09 12:04',
            summary:'摘要： 於無聲處聽驚雷！ 銀行，終於要叫停第三方支付代扣通道了！ 最近，一則消息在金融圈炸開了鍋：網聯又有新動作了，發文...',
            details:`<div class="dc"><div>	　　於無聲處聽驚雷！</div><div>	&nbsp;</div><div>	　　銀行，終於要叫停第三方支付代扣通道了！</div><div>	&nbsp;</div><div>	　　最近，一則消息在金融圈炸開了鍋：網聯又有新動作了，發文督促第三方機構接入網聯管道，並於6月30號前“斷直連”。<br>	&nbsp;</div><div style="text-align: center;">	<img alt="" src="http://i2.bvimg.com/640851/e41cef7c3f8dd510.jpg"></div><div>	&nbsp;</div><div>	　　第三方支付監管再出重文</div><div>	&nbsp;</div><div>	　　何謂“斷直連”？就是銀行關閉第三方支付機構直接代扣通道。</div><div>	&nbsp;</div><div>	　　就在3月20日，網聯下發了42號文督促第三方支付機構接入網聯管道，並規定6月30日前，所有第三方支付機構與銀行的直連都將被切斷，之後銀行不會再單獨直接為第三方支付機構提供代扣通道。</div><div>	&nbsp;</div><div>	　　其實說白了，就是這樣的：</div><div>	&nbsp;</div><div>	　　在過去，第三方支付走的是銀行直連模式，包括代收代扣、快捷支付和網銀支付。現在，第三方支付公司的每一筆交易中途必須通過“網聯支付平臺”處理，讓網聯留存交易記錄、進行監管！<br>	&nbsp;</div><div style="text-align: center;">	<img alt="" src="http://i1.bvimg.com/640851/add3f769cd0e233f.png"></div><div>	&nbsp;</div><div>	　　第三方支付、網聯、銀行關係</div><div>	&nbsp;</div><div>	　　有人說，第三方支付不經過“網聯”又如何呢？對不起，銀行屆時將主動關閉直接代扣通道，你不走網聯的路，那就“無路可走”了！</div><div>	&nbsp;</div><div>	　　其實，銀行已經開始陸續停掉代扣通道。</div><div>	&nbsp;</div><div>	　　3月，一則某銀行停止P2P、消費金融等支付通道的新聞在行業裏掀起了軒然大波。而事實上，停止代收介面的不止一家。</div><div>	&nbsp;</div><div>	　　這次銀行支付端口關停首當其衝的就是互聯網金融公司，多家P2P公司及消費金融公司發佈公告提醒用戶更換銀行卡。被關停的支付端口主要是快捷支付和代扣。</div><div>	&nbsp;</div><div>	　　互金行業遭受“降維打擊”</div><div>	&nbsp;</div><div>	　　毫無疑問，銀行突然關停代扣及快捷支付介面對互金行業的衝擊是巨大的，特別是消費金融公司，無法代扣簡直可以說是“降維打擊”。</div><div>	&nbsp;</div><div>	　　目前，線上支付方式中被應用最廣泛的就是快捷支付和代扣。對P2P來講，銀行關停支付端口也就意味著用戶購買或充值時無法使用該銀行卡進行快捷支付，只能跳轉到網銀支付或換用其他銀行卡。</div><div>	&nbsp;</div><div>	　　增加的操作成本無疑會造成一定的用戶流失。對消費金融公司來講，打擊面則更廣。因為一般情況下90%的用戶都不會主動還款，而是等著消費金融公司直接從銀行卡扣款。</div><div>	&nbsp;</div><div>	　　要知道，培養用戶主動還款的習慣是非常艱難的，代扣通道的關閉不僅意味著逾期率的增長，更意味著後期提醒、催收的成本都會大幅增加。</div><div>	&nbsp;</div><div>	　　在管道優勢消失的情況下，能比拼的就只有價格和服務了。更可怕的是，代扣通道的關閉已是大勢所趨，也就是說消費金融公司的噩夢才剛剛開始。</div><div>	&nbsp;</div><div>	　　規範發展的新時代到來了</div><div>	&nbsp;</div><div>	　　其實，網聯已經不是什麼新機構了，它已經成立半年多了。</div><div>	&nbsp;</div><div>	　　網聯的成立，背後有著深遠的考慮。金融是一個國家經濟的心臟和根本，牽一發而動全身，出不得一點閃失。而隨著第三方支付越做越大，必須引入監管，避免出現黑天鵝或灰犀牛事件。</div><div>	&nbsp;</div><div>	　　1、第三方支付模式存在越線嫌疑，監管必開刀</div><div>	&nbsp;</div><div>	　　根據第三方支付的定位，其本質意義上是一個資金的中轉和搬運平臺。</div><div>	&nbsp;</div><div>	　　由於第三方支付機構直接跟各銀行對接，監管機構只能看到銀行帳戶金額的變動，看不到資金流轉的詳細資訊，存在違法違規的隱患。這就像一個倉庫沒有曬到陽光，時間長了，難免弊端叢生。而第三方支付機構大量的資金流動規模，只有納入有效監管，才能確保金融長治久安！</div><div>	&nbsp;</div><div>	　　2、第三方支付掌握大量金融大數據，易造成“數據寡頭”壟斷</div><div>	&nbsp;</div><div>	　　互聯網時代，最重要的資源，不再是石油、天然氣，而是數據。如果一個國家的金融、支付、消費數據等，本國政府無法掌握，是非常危險的。</div><div>	&nbsp;</div><div>	　　現在，央行設立了一個“網聯”，等於在第三方支付和用戶間插了一杠，直接打破了Jack們通過第三方支付對金融和消費大數據的壟斷，所有的支付清算數據，最終都通過網聯匯總到央行來了。</div><div>	&nbsp;</div><div>	　　的確，維護金融安全，這是當前國家最關心的一件大事。在國家利益和國家安全面前，任何個人和機構，都應該盡力而為！</div><div>	&nbsp;</div><div>	　　今天，野蠻發展的舊時代過去了，規範發展的新時代到來了。俗話說得好：沒有規矩，不成方圓。</div><div>	&nbsp;</div><div>	　　當然，對咱們這些吃瓜群眾來講，自當樂見其成：無論咱們今後用哪種支付方式，依然是一樣的方便，只不過我們手裏的錢，央行會幫我們監管得更穩當、更安全。</div></div>`
          }
        }
      },
    methods:{
      goBack(){
        this.$router.go(-1);
      },
    }
  }
</script>

<style scoped>

/*文章詳情*/
.article-details{
  padding: 15px;
}
.back-icon{
  position: absolute;
    left: 10px;
    color: #999;
}
.article-details .article-title{
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  padding: 0 10px;
  line-height:1.6;
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
  line-height:1.4;
}
.artcle-text{
  text-indent: 2em;
  color: #212121;
  font-size: 14px;
}
.article-content{
    margin: 10px 0;
    padding-bottom: 10px;
    line-height:1.4;
    font-size:14px;
}
.article-content img {
    width: 100%!important;
    height: initial!important;
    overflow: hidden;
}
</style>