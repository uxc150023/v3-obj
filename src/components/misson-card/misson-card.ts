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

const props = {
  missonItem: {
    type: Object,
    default: () => {},
  },
};

export default defineComponent({
  components: {
  },
  props,
  setup(props) {
    const state = reactive({
      missonItem: props.missonItem,
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
