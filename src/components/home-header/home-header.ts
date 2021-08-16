import {
  defineComponent,
  ref,
  reactive,
  computed,
  toRefs,
  watch,
  onMounted,
} from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  components: {
  },
  setup() {
    const state = reactive({
    })
    const router = useRouter();
    const route = useRoute();

    function jumpTo(){

    }

    onMounted(() => {
      
    });
    return {
      ...toRefs(state),
      jumpTo,
    };
  },
});
