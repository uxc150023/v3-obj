<template>
  <div class="header-wrapper">
    <div class="yz-shop">
      <i class="iconfont icon-top_shangcheng"></i>
      研值商城
    </div>
    <div class="user-info">
      <div class="img"></div>
      <div class="no-login">
        <div class="to-login" @click="toLogin">
          <i class="iconfont icon-top_yonghu"></i>
          您好，请登录
        </div>
        <div class="split-line">|</div>
        <div class="to-regist" @click="toRegister">立即注册</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./home-header.ts"></script>
<style lang="scss" scoped>
$color: #9fa3bb;
.header-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  height: 40px;
  line-height: 40px;
  padding: 0 80px;
  color: $color;
  background: #0f1954;
  .yz-shop {
    cursor: pointer;
    i {
      position: relative;
      top: 1px;
      color: #ff5a2c;
    }
  }
  .no-login {
    display: flex;
    .to-login {
      position: relative;
      color: #ffffff;
      cursor: pointer;
      i {
        position: relative;
        top: 2px;
        color: #7179a4;
      }
    }
    .split-line {
      margin: 0 5px;
    }
    .to-regist {
      cursor: pointer;
    }
    .to-login:hover,
    .to-regist:hover {
      color: #ff5a2c;
    }
  }
}
</style>
