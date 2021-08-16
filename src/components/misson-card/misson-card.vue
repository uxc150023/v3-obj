<template>
  <div class="misson-card common-card">
    <div class="misson-card__title">
      <div class="label">{{ missonItem.name }}</div>
      <div class="value">
        {{ missonItem.yanValue }} <span class="text">研值</span>
      </div>
    </div>
    <div class="misson-card__time">
      <i class="el-icon-time"></i>
      剩余时间：{{ missonItem.time }}
    </div>
    <div class="misson-card__labels">
      <div v-for="item in missonItem.labels" :key="item" class="item">
        {{ item }}
      </div>
    </div>
    <div class="misson-card__footer">
      <div class="author">
        <div class="avatar">
          <i class="iconfont icon-top_yonghu"></i>
        </div>
        {{ missonItem.author }}
      </div>
      <div class="misson-btn">接任务</div>
    </div>
  </div>
</template>
<script lang="ts" src="./misson-card.ts"></script>
<style lang="scss" scoped>
.misson-card {
  &__title {
    width: 100%;
    display: flex;
    height: 30px;
    align-items: center;
    justify-content: space-between;
    .label {
      font-size: 16px;
      color: #000;
      width: 264px;
    }
    .value {
      font-size: 24px;
      color: #ff5a2c;
      .text {
        position: relative;
        top: -4px;
        font-size: 14px;
      }
    }
  }
  &__time {
    margin-top: 10px;
    width: 100%;
    color: #767676;
  }
  &__labels {
    display: flex;
    width: 100%;
    margin-top: 15px;
    border-bottom: 1px dashed #d7d7d7;
    padding-bottom: 20px;
    .item {
      padding: 0 14px;
      height: 26px;
      line-height: 26px;
      border-radius: 2px;
      border: 1px solid #e6e6e6;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 15px;
    .author {
      display: flex;
      align-items: center;
      .avatar {
        width: 28px;
        height: 28px;
        line-height: 28px;
        border-radius: 50%;
        margin-right: 8px;
        i {
          font-size: 26px;
        }
      }
    }
    .misson-btn {
      padding: 0 12px;
      height: 28px;
      line-height: 28px;
      border-radius: 2px;
      border: 1px solid #ff5a2c;
      color: #ff5a2c;
      &:hover {
        background: #ff5a2c;
        color: #fff;
      }
    }
  }
}
</style>
