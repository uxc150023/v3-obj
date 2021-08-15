<template>
  <div>
    <p>{{ title }}</p>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期" />
    <el-button type="primary">123123</el-button>
  </div>
</template>

<script lang="ts" src="./home.ts"></script>
<style lang="scss" scoped>
p {
  color: red;
}
</style>
