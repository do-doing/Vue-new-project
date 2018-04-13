<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="協會簡介" name="協會簡介">
        <div class="page-title">協會簡介</div>
        <div class="content-text">
          <br>
          <p class="aboutText">協會簡介<br>中華兩岸互聯網金融協會是由兩岸互聯網金融業務的市場主體及相關領域的從業人員自願聯合發起成立的行業性非營利性社會組織。 於2017年9月籌畫成立，協會旨在通過綜合互聯網金融行業發展資源，搭建臺灣同行與內地同行之間合作交流的平臺， 實現協會成員優勢互補、合作共贏、協同創新、規範自律，促進兩岸互聯網金融教育及交流，推動行業健康有序發展。</p>
          <br>
          <p class="aboutText">成立背景<br>大陸地區以P2P網貸、第三方支付、眾籌、互聯網小貸公司等為代表的互聯網金融業態飛速發展，改變了普通群眾對金融的認識和投資習慣，也對 金融業的發展格局產生一定影響。 具有普惠金融、平臺金融、資訊金融、碎片金融特點的新金融模式，時下正在促進傳統金融產業變革。
          </p>
          <br>
          <p class="aboutText">成立目的</p>
          <ul class="mui-list-unstyled point-ul">
            <li>構築地方互聯網金融的先發優勢</li>
            <li>增强行業之間的交流合作,搭建兩岸互聯網金融行業溝通交流的橋樑</li>
            <li>促進兩岸互聯網金融的發展，推動行業健康有序發展</li>
          </ul>
          
        </div>
      </el-tab-pane>
      <el-tab-pane label="發起人與顧問團" name="發起人與顧問團">
        <div class="page-title">發起人與顧問團</div>
        <div class="content-text">
                <br>
                <div class="img-center">
                	<img src="../assets/p/p1.jpg">
                	發起人：張文生
                </div>
                <p class="aboutText">大陸知名網貸平臺禮德財富總經理，曾任奧微資訊創始人與總經理、微軟大型產品研討會講師、微軟出版社資深審稿人與專業譯作者。擁有多年的互聯網團隊管理經驗，曾作為傳統金融、B2C電商、TMT等不同行業的互聯網專案負責人。</p>
                <p class="aboutText">參與過荷蘭銀行、臺新銀行、網絡基金下單系統；花旗銀行衍生金融商品系統；臺灣上市公司研華電子全球網絡監控系統；臺灣最大女性電商PayeasyAPP系統、MTV電視臺APP等多個大型互聯網項目。</p>
                <br>
                <div class="img-center">
                  <img src="../assets/p/p2.jpg">
                  專家顧問：彭海涛
                </div>
                <p class="aboutText">从事软件开发工作15年，并拥有10年的金融行业软件开发经验，熟悉SDLC、Agile Methodologies，擅长系统整体架构设计，组织团队进行技术攻关。</p>
                <p class="aboutText">曾任汇丰银行研发中心管理职位，带领百人以上的团队进行研发工作，技术涉及面广，包括汇丰互联网银行、汇丰手机银行、股票沪港通、股票深港通等旗舰项目。</p>
                <br>
                <div class="img-center">
                  <img src="../assets/p/p3.jpg">
                  專家顧問：郭云骞
                </div>
                <p class="aboutText">广东省党校金融管理专业毕业，曾任中国农业银行广州分行信贷处副主任科员、广州市农村信用社计划资金部首席交易员及业务部总经理、广州穗粤船务公司财务总监、广东合润融资担保有限公司副总经理等重要职务。</p>
                <p class="aboutText">在传统金融、小额信贷、融资担保等领域拥有近30年从业经验、近20年高层管理经验，对企业中长期发展规划和实施，对金融机构的业务、营运、法律合规风险管理和公司治理有着丰富经验。</p>
                <br>
                <div class="img-center">
                  <img src="../assets/p/p8.jpg">
                  專家顧問：黃建翔
                </div>
                <p class="aboutText">投身財富管理從業經驗15年，歷經兩岸三地與西方金融市場，是智能投顧的推動者和踐行者。</p>
                <p class="aboutText">歷經美國投資銀行、臺灣與香港家族辦公室等高端財富管理領域。2011年開始參與國內金融市場，曾任招商銀行分行財富管理總經理，並持續任國內與港、澳地區銀行財富管理運營體系顧問。2016年12月加盟盈米財富，現任盈米財富副總裁。</p>
                <br>
                <div class="img-center">
                  <img src="../assets/p/p4.jpg">
                  專家顧問：蔡鎮州
                </div>
                <p class="aboutText">曾任臺灣網祿數碼科技集團總經理，是全球專業租箱寄賣連鎖專門店格子趣創始人、創業俱樂部微創邦創始人。</p>
                <p class="aboutText">20多年供應鏈行業實戰經驗，積累了豐富的風險管理和供應鏈金融的行業管理經驗，依託眾多的中小企業實踐和敏銳的觀察，在供應鏈金融方面擁有獨特見解，幫助眾多中小企業實現新零售升級。</p>
                <br>
                <div class="img-center">
                  <img src="../assets/p/p5.jpg">
                  專家顧問：徐北
                </div>
                <p class="aboutText">曾在多家典當、小貸、融資擔保公司擔任高管職位，是廣東南方金融創新研究院秘書長、廣州市普惠金融協會副秘書長。</p>
                <p class="aboutText">長期從事一線民間金融領域理論科技收集，政策分析解讀及農村基層和各類“無抵押擔保”融資服務研究和實操，有豐富的行業協會開拓及服務背景。熟悉廣東省小貸、擔保、典當、互聯網金融各等民間金融行業政策法規、發展狀況和趨勢；熟悉廣東省各種不同類型“類金融機構”經營操作管道方法、風控手段。</p>
                <br>
                <div class="img-center">
                  <img src="../assets/p/p6.jpg">
                  專家顧問：江曉
                </div>
                <p class="aboutText">畢業於中山大學，2006年進入證券行業，十餘年投資銀行從業經歷。曾任投資銀行總部TMT業務部副總經理、保算代表人。</p>
                <p class="aboutText">曾主辦勁嘉股份、奧拓電子、奧飛娛樂、星輝娛樂、國信證券首次公開募集及再融資專案，奧飛動漫、星輝娛樂、三七互娛、明家科技、驊威股份、華鵬飛、跨境通等並購重組戰略轉型專案。在上市、並購等產業佈局、宏觀經濟分析、企業戰略規劃與跨界創新、資本運作等方面具有豐富經驗。</p>
                <br>
                <div class="img-center">
                  <img src="../assets/p/p7.jpg">
                  專家顧問：江曉
                </div>
                <p class="aboutText">易簡財經創始人。曾任廣東衛視財經新聞工作者，12年財經記者的實戰經歷；是廣東衛視《財經郎眼》節目常駐嘉賓；是全國最大的財經記者社區之一深藍財經記者聯盟聯合創始人。</p>
                <p class="aboutText">深諳中國媒體運作，在業內擁有豐富的人脈資源，具有豐富的公共關係拓展和維護經驗，對互聯網金融行業擁有獨到的見解。</p>
            </div>
      </el-tab-pane>
      <el-tab-pane label="協會章程" name="協會章程">
        <div class="page-title">協會章程</div>
        <div class="content-text">
                <br>
                <p class="aboutText">第　一　章　總　　則</p>
                <p class="aboutText">第　一　條　本會名稱為中華兩岸互聯網金融協會。(以下簡稱為本會)。</p>
                <p class="aboutText">第　二　條　本會為依法設立、非以營利為目的之社會團體。為聯合並促進兩岸相關中小企業及電子商務，推動產業相互合作，建構兩岸互聯網及互助互惠的創業合作平台，拓展兩岸互聯網金融產業經濟發展，推動商業經貿交流合作，創造兩岸互聯網產業發展為宗旨。</p>
                <p class="aboutText">第　三　條　本會以臺灣行政區域為組織區域。</p>
                <p class="aboutText">第　四　條　本會會址設於主管機關所在地區，並得報經主管機關核准設分支機構。前項分支機構組織簡則由理事會擬訂，報請主管機關核准後行之。會址及分支機構之地址於設置及變更時應函報主管機關核備。</p>
                <p class="aboutText">第　五　條　本會之任務如下：</p>
                <p class="aboutText">一、建構兩岸互聯網資源互享平台。</p>
                <p class="aboutText">二、辦理兩岸中小企業及電子商務經貿交流活動。</p>
                <p class="aboutText">三、辦理兩岸相關互聯網經貿交流、觀摩及參訪活動。</p>
                <p class="aboutText">四、推動兩岸商業經貿交流合作，提昇台灣國際經貿競爭力及產業發展。</p>
                <p class="aboutText">五、培訓台灣電子商務創業課程，協助台灣中小企業轉型。</p>
                <p class="aboutText">六、結合台灣在地產業合作，促進兩岸互聯網及商務市場之合作機會。</p>
              </div>
      </el-tab-pane>
      <el-tab-pane label="協會成員" name="協會成員">
        <div class="page-title">協會成員</div>
        <div class="content-text">
                <ul class="mui-list-unstyled badge-list">
                	<li>網絡借貸</li>
                	<li>互聯網信托</li>
                	<li>股權眾籌</li>
                	<li>互聯網保險</li>
                	<li>網絡小貸</li>
                	<li>互聯網消費金融</li>
                	<li>互聯網支付</li>
                	<li>金融創新平臺 </li>
                	<li>互聯網基金銷售 </li>
                	<li>...</li>
                </ul>
              </div>
      </el-tab-pane>
      <el-tab-pane label="组织架构" name="组织架构">
        <div class="page-title">業務範疇</div>
        <div class="content-text">
                <br>
                <img src="../assets/p/7.png" width="100%">
              </div>
      </el-tab-pane>
      <el-tab-pane label="業務範疇" name="業務範疇">
        <div class="page-title">業務範疇</div>
        <div class="content-text">
                <br>
                <p class="aboutText">業務範疇</p>
                <p class="aboutText">1、組織兩岸互聯網金融從業者相互訪問、考察、講座、講學、聯誼等活動，促進兩岸互聯網從業者之間的友好往來。</p>
                <p class="aboutText">2、組織兩岸互聯網金融行業論壇、研討、會展等交流活動，促進兩岸互聯網金融業界的交流與合作。</p>
                <p class="aboutText">3、組織兩岸互聯網金融先進科技的相互借鑒、推廣和應用，發揮互聯網金融對兩岸經濟的助推作用。</p>
                <p class="aboutText">4、組織兩岸互聯網金融行業人才培養交流，合作舉辦相關培訓活動，開展互聯網金融知識教育，提高公眾對行業的認知。</p>
                <p class="aboutText">5、組織兩岸互聯網金融相關建設、投資項目資訊的交流、諮詢與服務，推動兩岸業界互惠合作與互利雙贏。</p>
              </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '協會簡介'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>

</style>