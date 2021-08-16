<template>
  <div class="home-page--menu">
    <div class="home-page--menu__left">
      <div class="logo"></div>
      <div class="menu">
        <div
          :class="{ active: activeMenuIndex === item.id }"
          v-for="item in menuList"
          :key="item.id"
          @click="jumpTo(item)"
          class="menu__item"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
    <div class="home-page--menu__right">
    </div>
  </div>
</template>
<script lang="ts" src="./home-menu.ts"></script>
<style lang="scss" scoped>
.home-page--menu {
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
        transition: 0.3s;
        &:hover,
        &.active {
          background: #ff5a2c;
          color: #fff;
        }
      }
    }
  }
}
</style>
