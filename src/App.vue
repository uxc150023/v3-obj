<template>
  <el-config-provider :locale="locale">
    <slot name="app"></slot>
  </el-config-provider>
  <div>
    <router-view />
  </div>
</template>

<style></style>

<script>
//引入vue方法
import { ElConfigProvider } from "element-plus";
//中文包
import zhCn from "element-plus/lib/locale/lang/zh-cn";

export default {
  name: "layout",
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
  },
  setup() {
    let locale = zhCn;
    return {
      locale,
    };
  },
};
</script>
<style scoped lang="scss"></style>
