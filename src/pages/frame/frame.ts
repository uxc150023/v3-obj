import { defineComponent, computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  components: {
  },
  setup() {
    const route = useRoute();
    console.log("route.path", route.path);
    const routerKey = computed(() => route.path + Math.random());
    return {
      routerKey,
    };
  },
});
