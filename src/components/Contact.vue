<template>
  <div>
    <div class="page-title">聯繫我們</div>
    <div class="map-container">
      <iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://3gimg.qq.com/lightmap/v1/wxmarker/index.html?marker=coord:23.1864,113.57;title:中華兩岸
互聯網金融協會;addr:廣州天河珠江新城廣州周大福金融中心39F&referer=wexinmp_profile"></iframe>
    </div>
    <div class="content-layout">
          <div class="article">
            <h4 class="content-title">留言</h4>
            <div class="articleArea" style="padding:10px">
              <el-form :model="userInfo" ref="userInfo" :rules="rules" label-width="100px" size="mini">
                <el-form-item label="First Name" prop="fname">
                  <el-input v-model="userInfo.fname"></el-input>
                </el-form-item>
                <el-form-item label="Last Name" prop="lname">
                  <el-input v-model="userInfo.lname"></el-input>
                </el-form-item>
                 <el-form-item label="Email" prop="email">
                  <el-input v-model="userInfo.email"></el-input>
                </el-form-item>
                
                <el-form-item label="留言内容" prop="desc" size="medium">
                  <el-input type="textarea" v-model="userInfo.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button @click="submitForm('userInfo')" type="danger" plain round>立即發送</el-button>
                  <el-button @click="resetForm('userInfo')"  plain round>重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      <div class="content-layout">
          <div class="article">
            <h4 class="content-title">聯繫我們</h4>
            <div class="articleArea">
              <p class="artcleText">地址：廣州天河珠江新城廣州周大福金融中心39F</p>
              <p class="artcleText">聯繫：020-7758 1688 &nbsp;&nbsp; 傳真：020-7758 1688</p>
              <p class="artcleText">E-mail：services@leadercf.com</p>
              <div class="mui-content-padded">
              	<a><span class="fa fa-weixin"></span></a>
                <a><span class="fa fa-qq"></span></a>
                <a><span class="fa fa-weibo"></span></a>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        userInfo:{
          fname:'',
          lname:'',
          email:'',
          website:'',
          desc:''
        },
        rules: {
          fname: [
            { required: true, message: '请输入First Name', trigger: 'blur' },
          ],
          lname: [
            { required: true, message: '请输入Last Name', trigger: 'blur' },
          ],
          email: [
            { required: true, message: '请输入Email', trigger: 'blur' },
          ],
          desc: [
            { required: true, message: '请输入留言内容', trigger: 'blur' },
          ],
        }
      }
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              type: 'success',
              message: (this.userInfo.fname||this.userInfo.lname)+'您好! 信息发送成功,等待回复吧'
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
.mui-content-padded a{
    margin:0 5px 20px 0;
    width: 36px;
    height: 36px;
    line-height:36px;
    display: inline-block;
    text-align: center;
    background-color: #fff;
    border: 1px solid #898989;
    border-radius: 50%;
    background-clip: padding-box;
    color: #898989;
    font-size:18px;
}

</style>