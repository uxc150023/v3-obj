<template>
  <div class="expert-card common-card">
    <div class="expert-card__title">
      <div class="avatar">
        <div class="author">
          <i class="iconfont icon-top_yonghu"></i>
        </div>
        <div class="info">
          <div class="name">{{ expertItem.name }}</div>
          <div class="company">{{ expertItem.company }}</div>
        </div>
      </div>
      <div class="icon">
        <i class="iconfont icon-consult"></i>
      </div>
    </div>
    <div class="expert-card__labels">
      <div v-for="item in expertItem.labels" :key="item" class="item">
        {{ item }}
      </div>
    </div>
    <div class="expert-card__services">
      <div class="title">
        <i class="iconfont icon-service"></i>
        可提供服务：
      </div>
      <div class="servicesList">
        <span
          class="services-item"
          v-for="(item, itemIndex) in expertItem.services"
          :key="item"
        >
          {{ `${itemIndex + 1}) ${item}` }}
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./expert-card.ts"></script>
<style lang="scss" scoped>
.expert-card {
  &__title {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .avatar {
      display: flex;
      .author {
        width: 54px;
        height: 54px;
        line-height: 54px;
        border-radius: 50%;
        i {
          font-size: 54px;
        }
      }
      .info {
        margin: 3px 0 0 10px;
        .name {
          font-size: 16px;
          color: #000;
          margin-bottom: 2px;
        }
        .company {
          color: #767676;
        }
      }
    }
    .icon {
      position: relative;
      top: 5px;
      width: 20px;
      height: 20px;
      line-height: 20px;
      border-radius: 50%;
      i {
        color: #ff5a2c;
        font-size: 20px;
      }
    }
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
  &__services {
    margin-top: 10px;
    .title {
      i {
        color: #ff5a2c;
      }
    }
    .services-item {
      color: #767676;
      font-size: 12px;
      &::after {
        content: ";";
      }
      &:last-child:after {
        content: "。";
      }
    }
  }
}
</style>
