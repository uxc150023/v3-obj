<template>
  <div class="main-wrapper">
    <HomeHeader />
    <router-view></router-view>
  </div>
</template>

<script lang="ts" src="./frame.ts"></script>

<style lang="scss" scoped>
  .main-wrapper {
    background: #f9f9fe;
    font-size: 14px;
  }
</style>
