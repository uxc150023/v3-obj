import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup(props) {
    const state = reactive({
      title: "home",
      value1: "",
    });
    return {
      ...toRefs(state),
    };
  },
});
