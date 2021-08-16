<template>
  <div class="pi-card common-card">
    <div class="pi-card__mark">
      <div class="reference">
        <span>@{{ piItem.reference }}</span> 向您推荐
      </div>
      <div class="rate">
        <el-rate
          v-model="piItem.piPoint"
          disabled
          disabled-void-color=" #CECECE"
          :colors="['#FFB01F', '#FFB01F', '#FFB01F']"
        >
        </el-rate>
      </div>
    </div>
    <div class="pi-card__info">
      <div class="avatar">
        <i class="iconfont icon-top_yonghu"></i>
      </div>
      <div class="detail">
        <p>
          <span class="name">徐杜喜</span>
          <span>主任医师 / 副主任</span>
        </p>
        <p>上海复旦大学附属医学院 - 心血管内科</p>
        <p>CDE登记试验数：<span class="cde">14</span></p>
      </div>
    </div>
    <div class="pi-card__labels">
      <!-- field -->
      <div
        v-for="item in piItem.field"
        :key="item"
        class="pi-card__labels__item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./pi-card.ts"></script>
<style lang="scss" scoped>
.pi-card {
  &__mark {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 34px;
    line-height: 34px;
    border-radius: 4px;
    padding: 0 15px;
    background: #f7f7f7;
    .rate {
      margin-left: 10px;
    }
    &::before {
      content: "";
      position: absolute;
      left: -18px;
      top: 0;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid #f7f7f7;
    }
  }
  &__info {
    position: relative;
    width: 100%;
    margin: 20px 0;
    padding-left: 72px;
    .avatar {
      position: absolute;
      left: 0px;
      top: 4px;
      width: 62px;
      height: 62px;
      line-height: 62px;
      border-radius: 50%;
      i {
        font-size: 62px;
      }
    }
    .detail {
      p {
        margin-bottom: 2px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .name {
        font-size: 16px;
        margin-right: 12px;
        color: #000;
      }
      .cde {
        color: #ff5a2c;
      }
    }
  }
  &__labels {
    width: 100%;
    display: flex;
    &__item {
      padding: 0 14px;
      height: 26px;
      line-height: 26px;
      border-radius: 2px;
      border: 1px solid #e6e6e6;
      margin-right: 10px;
    }
  }
}
</style>
