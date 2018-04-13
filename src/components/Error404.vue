<template>
  <div>
    <div class="milky">
      <div>
        <h1>ERROR 404<br>找不到页面了</h1>
        <h2>不过你可以试试找他<br><i class="fa fa-caret-down"></i>
          <a href="https://do-doing.github.io/Resume" target="_blank" class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
          </a>
        </h2>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

.milky {
    font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;
    text-transform: uppercase;
    display:flex;
    justify-content: center;
    align-items: center;
    color: #f1ebe5;
    text-shadow: 0 5px 9px #c4b59d, 0px -1px 1px #fff;
    font-weight: bold;
    text-align: center;
    overflow:hidden;
    line-height:1.6;
    background: linear-gradient(to bottom, #ece4d9 0%,#e9dfd1 100%);
    height:calc(100vh - 50px);
}
h1{
font-size: 8vh;
}
h2{
font-size: 6vh;
}
.spinner {
  display:block;
  width: 60px;
  height: 60px;
  position: relative;
  margin: 10px auto;
}
 
.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color:#a1de3e;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08);
  -webkit-animation: bounce 2.0s infinite ease-in-out;
  animation: bounce 2.0s infinite ease-in-out;
}
 
.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
@-webkit-keyframes bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}
 
@keyframes bounce {
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>