import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      title: "login",
    });

    return {
      ...toRefs(state),
    };
  },
});
