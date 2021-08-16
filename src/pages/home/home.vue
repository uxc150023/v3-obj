<template>
  <div class="home-page">
    <HomeMenu />

    <div class="home-page--carousel">
      <div class="home-page--carousel__user">
        <template v-if="true">
          <div class="avatar"></div>
          <div class="text">Hi，欢迎来到Trial.Link</div>
          <div class="function">
            <div class="tool"> <i class="iconfont icon-zhaogongju"></i>找工具 </div>
            <div class="misson"> <i class="iconfont icon-zhaorenwu"></i>找任务 </div>
            <div class="master"> <i class="iconfont icon-zhaozhuanjia"></i>找专家 </div>
            <div class="pi"> <i class="iconfont icon-zhaoyanjiuzhe"></i>找研究者 </div>
          </div>
          <div class="btn">
            <el-button style="width: 105px" @click="toLogin">登录</el-button>
            <el-button style="width: 105px" type="primary" @click="toRegister">注册</el-button>
          </div>
        </template>
        <template v-else>
          <div class="avatar"></div>
          <div class="text">Hi，苏梦莹，欢迎回来~</div>
          <div class="yan-value"><i>2</i>我的研值：2000</div>
          <div class="btn">
            <el-button>个人中心</el-button>
            <el-button type="primary">前往企业认证</el-button>
          </div>
        </template>
      </div>
      <el-carousel :interval="8000" @change="carouselChange" trigger="click" height="550px">
        <el-carousel-item v-for="item in carouselList" :key="item.id">
          <div class="home-page--carousel__item">
            <div :class="{ active: item.isShow }" class="banner-text">
              {{ item.content }}
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-page--used">
      <div v-for="item in usedList" :key="item.id" class="home-page--used__item">
        <div class="icon"></div>
        <div class="info">
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
      <div class="home-page--used__item show-more">查看全部工具 →</div>
    </div>
    <div class="home-page--body">
      <!-- 找任务 -->
      <div class="home-page--body__modules">
        <div class="home-page--body__modules__title">
          <div class="label">找任务</div>
          <div class="show-more">查看全部 ></div>
        </div>
        <div class="home-page--body__modules__box">
          <MissonCard :missonItem="item" v-for="item in missonList" :key="item.id" /> 
        </div>
      </div>
      <!-- 找专家 -->
      <div class="home-page--body__modules">
        <div class="home-page--body__modules__title">
          <div class="label">找专家</div>
          <div class="show-more">查看全部 ></div>
        </div>
        <div class="home-page--body__modules__box">
          <ExpertCard :expertItem="item" v-for="item in expertList" :key="item.id"> </ExpertCard>
        </div>
      </div>
      <!-- 找研究者 -->
      <div class="home-page--body__modules">
        <div class="home-page--body__modules__title">
          <div class="label">找研究者</div>
          <div class="show-more">查看全部 ></div>
        </div>
        <div class="home-page--body__modules__box">
          <PiCard :piItem="item" v-for="item in piList" :key="item.id"></PiCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./home.ts"></script>
<style lang="scss">
  .home-page {
    &--menu {
      &__right {
        .el-select .el-input {
          width: 110px;
        }
        .el-input-group__prepend {
          background-color: #fff;
        }
      }
    }
    .common-card {
      display: flex;
      flex-wrap: wrap;
      align-content: start;
      width: 390px;
      padding: 20px 20px 15px 20px;
      background: #fff;
      color: #767676;
      border-radius: 2px;
      margin: 0 15px 15px 0;
      transition: 0.3s;
      cursor: pointer;
      border: 1px solid transparent;

      &:hover {
        box-shadow: 8px 16px 32px 0px rgba(0, 0, 0, 0.12);
        border: 1px solid #ff5a2c;
      }
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
</style>
<style lang="scss" scoped>
  .home-page {
    width: 100%;
    &--menu {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 80px;
      line-height: 80px;
      padding: 0 80px;
      background: #fff;
      font-size: 14px;
      &__left {
        display: flex;
        .logo {
          color: #0f1954;
          width: 200px;
          height: 100%;
          font-size: 24px;
          font-weight: bold;
          background: url("https://assets.trial.link/ins_institution/1066_644715305761491.png")
            center no-repeat;
        }
        .menu {
          display: flex;
          margin-left: 25px;
          &__item {
            display: inline-block;
            padding: 0 24px;
            line-height: 80px;
            cursor: pointer;
            &:hover,
            &.active {
              background: #ff5a2c;
              color: #fff;
            }
          }
        }
      }
    }
    &--carousel {
      position: relative;
      &__item {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        color: #fff;
        justify-content: start;
        align-items: center;
        background: rgba(15, 15, 16, 0.5);
        padding: 0 80px;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: url("https://assets.trial.link/ins_institution/1066_111791888505604.png")
            center no-repeat;
          background-size: 100% 100%;
          z-index: -1;
        }
        .banner-text {
          width: 600px;
          color: #fff;
          font-size: 36px;
          opacity: 0;
          transition: 1s ease-in-out;
          &.active {
            opacity: 1;
          }
        }
      }
      &__user {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        right: 80px;
        top: 85px;
        width: 300px;
        height: 340px;
        padding: 30px;
        color: #383838;
        background: rgba(245, 245, 245, 0.6);
        border-radius: 2px;
        z-index: 3;
        .avatar {
          width: 50px;
          height: 50px;
          margin-top: 10px;
          border-radius: 50%;
          border: 2px solid #fff;
          background: #7179a4;
        }
        .text {
          width: 100%;
          margin: 20px 0 35px 0;
          font-size: 16px;
          cursor: default;
          text-align: center;
        }
        .function {
          display: flex;
          width: 100%;
          justify-content: space-between;
          & > div {
            position: relative;
            padding-top: 50px;
            i {
              position: absolute;
              top: 0;
              display: inline-block;
              width: 40px;
              height: 40px;
              left: 50%;
              margin-left: -20px;
              border-radius: 50%;
              text-align: center;
              line-height: 38px;
              font-size: 20px;
              color: #ff5a2c;
              border: 1px solid #ff5a2c;
            }
          }
        }
        .yan-value {
          width: 100%;
          height: 60px;
          line-height: 60px;
          text-align: center;
          color: #ff5a2c;
          border: 1px solid #ff5a2c;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.5);
          i {
            margin-right: 10px;
          }
        }
        .btn {
          display: flex;
          width: 100%;
          margin-top: 30px;
          justify-content: space-between;
          button {
            padding: 0 18px;
            font-size: 14px;
            height: 36px;
          }
        }
      }
    }
    &--used {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 0 80px;
      height: 170px;
      background: #fff;
      &__item {
        position: relative;
        display: flex;
        align-items: center;
        min-width: 230px;
        width: 20%;
        height: 90px;
        border-radius: 2px;
        border: 1px solid #e2e2e2;
        padding: 0px 20px 0 75px;
        margin-right: 16px;
        transition: 0.5s;
        &:hover {
          cursor: pointer;
          border: 1px solid #ff5a2c;
          color: #ff5a2c;
        }
        &:last-child {
          margin-right: 0;
        }
        &.show-more {
          display: flex;
          border: 1px solid #ff5a2c;
          align-items: center;
          justify-content: center;
          color: #ff5a2c;
          padding: 0;
        }
        .icon {
          position: absolute;
          top: 50%;
          left: 20px;
          margin-top: -20px;
          width: 40px;
          height: 40px;
          background: #6053db;
          border-radius: 6px;
        }
        .info {
          .content {
            color: #8f8f8f;
            font-size: 12px;
            line-height: 20px;
          }
        }
      }
    }
    &--body {
      width: 1200px;
      margin: 40px auto;
      &__modules {
        width: 100%;
        margin-top: 15px;
        &__title {
          display: flex;
          width: 100%;
          height: 40px;
          line-height: 40px;
          margin-bottom: 10px;
          justify-content: space-between;
          .label {
            font-size: 20px;
            padding-left: 35px;
            font-weight: bold;
            background: url("https://assets.trial.link/ins_institution/1066_221565550949575.png")
              left no-repeat;
          }
          .show-more {
            color: #767676;
            cursor: pointer;
          }
        }
        &__box {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
        }
      }
    }
  }
</style>
