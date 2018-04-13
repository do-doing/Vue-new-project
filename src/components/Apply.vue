<template>
  <div class="centerTab">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="入會流程" name="入會流程">
        <div class="page-title">
                入會流程
              </div>
              <div class="content-text">
          <br>
          <img src="../assets/p/8.png">
          </div> 
      </el-tab-pane>
      <el-tab-pane label="入會要求" name="入會要求">
        <div class="page-title">
                入會要求
              </div>
        <div class="content-text">
          <br>
                <ul class="mui-list-unstyled">
                  <li>機構會員</li>
                  <li>①擁護本協會的章程;</li>
                  <li>②有加入本協會的意願;</li>
                  <li>③在內地或臺灣地區依法設立、開展互聯網金融業務的企業，並且在互聯網金融業務領域內具有一定影響力;</li>
                  <li>④達到本協會製定的行業標準;</li>
                  <li>⑤積極參加本協會組織的活動;</li>
                  <li>⑥願意履行會員義務、按時交納會費。</li>
                </ul>
                 <br>
                <ul class="mui-list-unstyled">
                  <li>個人會員</li>
                  <li>①從事互聯網金融企業家和企業高層管理人員;</li>
                  <li>②從事互聯網金融理論研究並有較高學術水準的專家學者;</li>
                  <li>③關心與支持互聯網金融發展的各界知名人士;</li>
                  <li>④有投融資需求或有其他資訊需求的有關人士。</li>
                </ul>
              </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '入會流程'
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
ul{
  line-height:1.4;
}
</style>